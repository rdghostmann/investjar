import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, Award, TrendingUp } from "lucide-react";
import About1 from "../../public/about-1.png";
import smokySky from "../../public/smoky-sky.jpg";

export default function OurMission() {
  return (
    <div className="min-h-screen bg-white text-slate-700">

      {/* Mission Section */}
      <section className="w-full px-5 py-12 md:py-20 bg-white">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-8 lg:gap-12">
            <div className="w-5/6 bg-gray-900">
              <Image
                src={smokySky}
                alt="Dashboard Interface"
                width={600}
                height={400}
                className="rounded-lg w-full h-auto"
              />
            </div>
            <div className="w-full lg:w-1/2 space-y-8">
              <div className="space-y-4">
                <span className="text-indigo-600">Our Mission to help our User</span>
                <h2 className="text-3xl md:text-5xl font-bold text-indigo-600">To Maximize Money</h2>
                <p className="text-gray-600 w-5/6">
                  We are a worldwide investment company committed to the principle of revenue maximization and
                  reduction of financial risks at investing.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-indigo-600 rounded-full">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl text-indigo-600">Fast & Simple</h3>
                    <p className="text-gray-600">Our team consists of specialists with longstanding experience.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-indigo-600 rounded-full">
                    <Award className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl text-indigo-600">License</h3>
                    <p className="text-gray-600">Our company has all the necessary documents to legally engage.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-indigo-600 rounded-full">
                    <TrendingUp className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl text-indigo-600">Maximized Profit</h3>
                    <p className="text-gray-600">Careful selection of investment diversification gives excellent results.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
