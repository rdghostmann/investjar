// export default function MotionCard() {
//   return (
//     <div className="relative w-[240px] h-[330px] rounded-2xl overflow-hidden bg-transparent shadow-md shadow-black/40 mx-auto my-[100px]">
//       <div className="absolute w-[540px] h-[700px] bg-gradient-to-br from-[#af40ff] via-[#5b42f3] to-[#00ddeb] opacity-60 -top-[70%] -left-[50%] rounded-[40%] animate-spin-slow"></div>
//       <div className="absolute w-[540px] h-[700px] bg-gradient-to-br from-[#af40ff] via-[#5b42f3] to-[#00ddeb] opacity-60 top-[210px] -left-[50%] rounded-[40%] animate-spin-slower"></div>
//       <div className="absolute w-[540px] h-[700px] bg-gradient-to-br from-[#af40ff] via-[#5b42f3] to-[#00ddeb] opacity-60 top-[210px] -left-[50%] rounded-[40%] animate-spin-slowest"></div>
//       <div className="absolute inset-x-0 top-[5.6em] text-center text-white font-semibold text-lg">
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           fill="none"
//           viewBox="0 0 24 24"
//           className="w-12 h-12 mx-auto -mt-4 mb-4"
//         >
//           <path
//             fill="currentColor"
//             d="M19.4133 4.89862L14.5863 2.17544C12.9911 1.27485 11.0089 1.27485 9.41368 2.17544L4.58674 4.89862C2.99153 5.7992 2 7.47596 2 9.2763V14.7235C2 16.5238 2.99153 18.2014 4.58674 19.1012L9.41368 21.8252C10.2079 22.2734 11.105 22.5 12.0046 22.5C12.6952 22.5 13.3874 22.3657 14.0349 22.0954C14.2204 22.018 14.4059 21.9273 14.5872 21.8252L19.4141 19.1012C19.9765 18.7831 20.4655 18.3728 20.8651 17.8825C21.597 16.9894 22 15.8671 22 14.7243V9.27713C22 7.47678 21.0085 5.7992 19.4133 4.89862ZM4.10784 14.7235V9.2763C4.10784 8.20928 4.6955 7.21559 5.64066 6.68166L10.4676 3.95848C10.9398 3.69152 11.4701 3.55804 11.9996 3.55804C12.5291 3.55804 13.0594 3.69152 13.5324 3.95848L18.3593 6.68166C19.3045 7.21476 19.8922 8.20928 19.8922 9.2763V9.75997C19.1426 9.60836 18.377 9.53091 17.6022 9.53091C14.7929 9.53091 12.1041 10.5501 10.0309 12.3999C8.36735 13.8847 7.21142 15.8012 6.68783 17.9081L5.63981 17.3165C4.69466 16.7834 4.10699 15.7897 4.10699 14.7235H4.10784ZM10.4676 20.0413L8.60933 18.9924C8.94996 17.0479 9.94402 15.2665 11.4515 13.921C13.1353 12.4181 15.3198 11.5908 17.6022 11.5908C18.3804 11.5908 19.1477 11.6864 19.8922 11.8742V14.7235C19.8922 15.2278 19.7589 15.7254 19.5119 16.1662C18.7615 15.3596 17.6806 14.8528 16.4783 14.8528C14.2136 14.8528 12.3781 16.6466 12.3781 18.8598C12.3781 19.3937 12.4861 19.9021 12.68 20.3676C11.9347 20.5316 11.1396 20.4203 10.4684 20.0413H10.4676Z"
//           ></path>
//         </svg>
//         UI / EX Designer <br />
//         <div className="text-sm font-light lowercase mt-2">MikeAndrewDesigner</div>
//       </div>
//     </div>
//   );
// }
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Clock, Lock, CreditCard, ArrowRight } from "lucide-react"
import Image from "next/image"

export default function MotionCard() {
  const features = [
    {
      icon: <Clock className="w-8 h-8 text-blue-400" />,
      title: "Fast & Simple",
      description: "Start investing in under 10 minutes",
      bgColor: "bg-blue-500/10",
    },
    {
      icon: <Lock className="w-8 h-8 text-blue-400" />,
      title: "Deep Encryption",
      description: "All data is encrypted to secure your passwords & personal data.",
      bgColor: "bg-indigo-500/10",
    },
    {
      icon: <CreditCard className="w-8 h-8 text-blue-400" />,
      title: "Easy deposit & withdrawals",
      description: "Quickly add & withdraw funds to your bank account",
      bgColor: "bg-blue-500/10",
    },
  ]
  return (
    <div className="relative border w-full h-[70vh] overflow-hidden bg-transparent shadow-md shadow-black/40 mx-auto ">
    <div className="absolute w-[540px] h-[700px] bg-gradient-to-br from-[#af40ff] via-[#5b42f3] to-[#00ddeb] opacity-60 -top-[70%] -left-[50%] rounded-[40%] animate-spin-slow"></div>
    <div className="absolute w-[540px] h-[700px] bg-gradient-to-br from-[#af40ff] via-[#5b42f3] to-[#00ddeb] opacity-60 top-[210px] -left-[50%] rounded-[40%] animate-spin-slower"></div>
    <div className="absolute w-[540px] h-[700px] bg-gradient-to-br from-[#af40ff] via-[#5b42f3] to-[#00ddeb] opacity-60 top-[210px] -left-[50%] rounded-[40%] animate-spin-slowest"></div>
    <div className="absolute inset-x-0 top-[20%] md:top-[22%] lg:top-[24%] text-center text-white font-semibold text-sm md:text-lg lg:text-xl">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        className="w-8 h-8 md:w-12 md:h-12 lg:w-16 lg:h-16 mx-auto -mt-4 mb-4"
      >
        <path
          fill="currentColor"
          d="M19.4133 4.89862L14.5863 2.17544C12.9911 1.27485 11.0089 1.27485 9.41368 2.17544L4.58674 4.89862C2.99153 5.7992 2 7.47596 2 9.2763V14.7235C2 16.5238 2.99153 18.2014 4.58674 19.1012L9.41368 21.8252C10.2079 22.2734 11.105 22.5 12.0046 22.5C12.6952 22.5 13.3874 22.3657 14.0349 22.0954C14.2204 22.018 14.4059 21.9273 14.5872 21.8252L19.4141 19.1012C19.9765 18.7831 20.4655 18.3728 20.8651 17.8825C21.597 16.9894 22 15.8671 22 14.7243V9.27713C22 7.47678 21.0085 5.7992 19.4133 4.89862ZM4.10784 14.7235V9.2763C4.10784 8.20928 4.6955 7.21559 5.64066 6.68166L10.4676 3.95848C10.9398 3.69152 11.4701 3.55804 11.9996 3.55804C12.5291 3.55804 13.0594 3.69152 13.5324 3.95848L18.3593 6.68166C19.3045 7.21476 19.8922 8.20928 19.8922 9.2763V9.75997C19.1426 9.60836 18.377 9.53091 17.6022 9.53091C14.7929 9.53091 12.1041 10.5501 10.0309 12.3999C8.36735 13.8847 7.21142 15.8012 6.68783 17.9081L5.63981 17.3165C4.69466 16.7834 4.10699 15.7897 4.10699 14.7235H4.10784ZM10.4676 20.0413L8.60933 18.9924C8.94996 17.0479 9.94402 15.2665 11.4515 13.921C13.1353 12.4181 15.3198 11.5908 17.6022 11.5908C18.3804 11.5908 19.1477 11.6864 19.8922 11.8742V14.7235C19.8922 15.2278 19.7589 15.7254 19.5119 16.1662C18.7615 15.3596 17.6806 14.8528 16.4783 14.8528C14.2136 14.8528 12.3781 16.6466 12.3781 18.8598C12.3781 19.3937 12.4861 19.9021 12.68 20.3676C11.9347 20.5316 11.1396 20.4203 10.4684 20.0413H10.4676Z"
        ></path>
      </svg>
      {/* UI / EX Designer <br />
      <div className="text-sm font-light lowercase mt-2">MikeAndrewDesigner</div> */}
   <div className="relative container mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <span className="inline-block text-blue-400 font-medium">Our Amazing Features</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Why Should You
              <br />
              Invest
            </h2>
            <p className="text-blue-100/80 max-w-lg">
              We are worldwide investment company who are committed to the principle of revenue maximization and
              reduction of the financial risks at investing.
            </p>
            <Button className="bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white">
              Discover More <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          {/* Right Content - Feature Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative">
            {features.map((feature, index) => (
              <Card
                key={index}
                className={`${feature.bgColor} border-0 backdrop-blur-sm 
                  ${index === 2 ? "sm:col-span-2 sm:w-2/3 sm:justify-self-end" : ""}
                `}
              >
                <CardContent className="p-6 space-y-4">
                  <div
                    className={`${feature.bgColor} w-16 h-16 rounded-full flex items-center justify-center bg-opacity-30`}
                  >
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                  <p className="text-blue-100/70">{feature.description}</p>
                </CardContent>
              </Card>
            ))}

            {/* Decorative Image */}
            <div className="absolute -right-20 bottom-0 hidden lg:block">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Amazing-Features.PNG-NJG8g5ifzOYIMKY2ZB0KSr13yjQg7S.png"
                alt="Investment Illustration"
                width={300}
                height={300}
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  );
}
