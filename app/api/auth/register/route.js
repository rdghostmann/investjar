import bcrypt from "bcrypt";
import { NextResponse } from "next/server";
import { connectToDB } from "@/lib/connectDB";
import User from "@/model/User";

export async function POST(req) {
  try {
    await connectToDB();
    const { username, email, password } = await req.json();

    if (!username || !email || !password) {
      return NextResponse.json({ message: "All fields are required" }, { status: 401 });
    }

    const existingUser = await User.findOne({ email }).exec();
    if (existingUser) {
      return NextResponse.json({ message: "User already exists" }, { status: 400 });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ username, email, password: hashedPassword });
    await newUser.save();

    return NextResponse.json({ message: "User registered successfully" }, { status: 201 });
  } catch (error) {
    console.error("Error during user registration:", error); // Log the error
    return NextResponse.json({ message: error.message || "Server error" }, { status: 500 });
  }
}
