import OurMission from "@/components/OurMission/OurMission";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import smokySky from "../../public/smoky-sky.jpg";

export default function () {
  return (
    <section>
      {/* <!-- Container --> */}
      <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-20">
        {/* <!-- Title --> */}
        <h2 className="mb-8 text-3xl font-bold md:text-5xl lg:mb-14"> Meet <span className="text-blue-600">InvestJar</span> </h2>
        <p className="mb-8 max-w-lg text-sm text-gray-500 sm:text-base lg:mb-24"> Stable Earnings
          With a guaranteed
          floating rate </p>
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
            <Image
              src={smokySky}
              alt="Dashboard Interface"
              width={600}
              height={400}
              className="inline-block h-full w-full rounded-2xl object-cover"
            />
          <div className="flex flex-col gap-5 rounded-2xl border border-solid border-black p-10 sm:p-20">
            <h2 className="text-3xl font-bold md:text-5xl">Our Mission</h2>
            <p className="text-sm text-gray-500 sm:text-base"> There has been always a demand for quality investment services. In an attempt to satisfy this demand, the idea of creating an Riovest company came up. Riovest is a modern investment company that combines the most advanced projects in its work.
              <br />
              <br /> We worked hard to develop a multifunctional cryptocurrency investment space where people from the whole globe can earn on digital currencies.


            </p>
            <Button className="bg-blue-600 text-white hover:bg-blue-700">
              Learn More <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
        <OurMission />

      </div>
    </section>
  )
}