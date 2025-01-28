"use client"

import { Clock, Lock, CreditCard, Shield } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import { useRef } from "react"



const features= [
  {
    icon: <Clock className="w-8 h-8 text-orange-400" />,
    title: "Fast & Simple",
    description: "Start investing in under 10 minutes",
    highlight: true,
  },
  {
    icon: <Lock className="w-8 h-8 text-orange-400" />,
    title: "Deep Encryption",
    description: "All data is encrypted to secure your passwords & personal data.",
  },
  {
    icon: <CreditCard className="w-8 h-8 text-orange-400" />,
    title: "Easy deposit & withdrawals",
    description: "Quickly add & withdraw funds to your bank account",
  },
  {
    icon: <Shield className="w-8 h-8 text-orange-400" />,
    title: "Safe & Secure",
    description: "World class security features ensure your investments are in safe",
  },
]

export default function StartEarning() {
  const plugin = useRef(Autoplay({ delay: 3000, stopOnInteraction: true }))

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-blue-600 text-lg md:text-xl font-medium">Start earning today together with Riovest</h2>
          <h1 className="text-4xl md:text-5xl font-bold text-blue-600">Simply, Profitably, Conveniently!</h1>
          <p className="max-w-2xl mx-auto text-gray-700">
            Fast and easy way to earn money by making secure and safe investments. Provide your passive income by
            choosing the investment plan you like and get profit every day.
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[plugin.current]}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {features.map((feature, index) => (
              <CarouselItem key={index} className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/4">
                <Card
                  className={`
                    h-full transition-all duration-300 hover:shadow-lg
                    ${
                      feature.highlight
                        ? "bg-gradient-to-br from-amber-50 to-amber-100 border-amber-200"
                        : "bg-white border-gray-200"
                    }
                  `}
                >
                  <CardContent className="p-6 space-y-4">
                    <div className="mx-auto w-16 h-16 rounded-full bg-orange-50 flex items-center justify-center">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
                    <p className="text-gray-700">{feature.description}</p>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  )
}

