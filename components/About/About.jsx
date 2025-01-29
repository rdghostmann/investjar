import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import About1 from "../../public/about-1.png";

export default function About() {
  return (
    <div className="min-h-screen bg-white text-slate-700">
      {/* Hero Section */}
      <section className="w-full py-4 md:py-8">
        <div className="px-4">
          <div className="flex pb-6 flex-col lg:flex-row items-center gap-8 lg:gap-12">
            <div className="w-full sm:w-3/4">
              <Image
                src={About1}
                alt="Analytics Dashboard"
                width={408}
                height={386}
                className="border rounded-lg w-full h-auto"
              />
            </div>
            <div className="w-full lg:w-1/2 space-y-4">
              <span className="text-blue-600">About InvestJar</span>
              <h2 className="text-3xl md:text-5xl font-bold text-blue-600">
                Stable Earnings
                <br />
                With a guaranteed
                <br />
                floating rate
              </h2>
              <p className="text-gray-600">
                There has been always a demand for quality investment services. In an attempt to satisfy this demand,
                the idea of creating an Riovest company came up. Riovest is a modern investment company that combines the
                most advanced projects in its work.
              </p>
              <p className="text-gray-600">
                We worked hard to develop a multifunctional cryptocurrency investment space where people from the whole
                globe can earn on digital currencies.
              </p>
              <Button className="bg-blue-600 text-white hover:bg-blue-700">
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
