import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt"; 
import User from "@/model/User";
import  connectToDB  from "@/lib/connectDB";

const handlers = NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        await connectToDB();

        if (!credentials?.email || !credentials?.password) {
          throw new Error("Missing email or password");
        }

        try {
          const user = await User.findOne({ email: credentials.email });

          if (!user) {
            console.error("User not found:", credentials.email);
            throw new Error("User not found");
          }

          const isMatch = await bcrypt.compare(credentials.password, user.password);

          if (isMatch) {
            return {
              id: user._id,
              email: user.email,
              username: user.username,
              role: user.role,
            };
          } else {
            throw new Error("Incorrect password");
          }
        } catch (error) {
          console.error("Error during authorization:", error);
          throw new Error("Authorization failed");
        }
      },
    }),
  ],
  session: {
    strategy: "jwt", // Use JWT for session management
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.username = user.username;
        token.role = user.role;
      }
      return token;
    },
    async session({ session, token }) {
      session.id = token.id;
      session.username = token.username;
      session.role = token.role;
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/login", // Customize the sign-in page
    error: "/auth/error", // Customize the error page
  },
});

export { handlers as GET, handlers as POST };
