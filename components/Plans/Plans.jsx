"use client";
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Award } from "lucide-react";

export default function Plans() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full px-4 py-12 md:py-20 overflow-hidden">
        <div className="container mx-auto relative z-10">
          <h1 className="text-3xl md:text-5xl font-bold mb-8 text-center">Investment Plans</h1>

          {/* Investment Plans */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {/* Gold Plan */}
            <Card className="bg-[#FFD700]/10 border-[#FFD700] border">
              <CardHeader className="flex items-center pb-2">
                <div className="border-4 border-[#FFD700]  p-3 rounded-full">
                  <Award className="text-[#FFD700] h-8 w-8 " />
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <div className="text-center">
                  <h3 className="text-xl font-bold text-[#FFD700] mb-4">GOLD PLAN</h3>
                  <div className="text-4xl font-bold mb-2">120%</div>
                  <p className="text-sm mb-4">Daily for 30 Days</p>
                  <div className="flex justify-between items-center mb-4">
                    <span>Min: $100</span>
                    <span>Max: $5,000</span>
                  </div>
                  <Button className="w-full bg-[#FFD700] text-black hover:bg-[#FFD700]/90">Choose Plan</Button>
                </div>
              </CardContent>
            </Card>

            {/* Silver Plan */}
            <Card className="bg-[#C0C0C0]/10 border-[#C0C0C0] border">
            <CardHeader className="flex items-center pb-2">
                <div className="border-4 border-[#C0C0C0]  p-3 rounded-full">
                  <Award className="text-[#C0C0C0] h-8 w-8 " />
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <div className="text-center">
                  <h3 className="text-xl font-bold text-[#C0C0C0] mb-4">SILVER PLAN</h3>
                  <div className="text-4xl font-bold mb-2">80%</div>
                  <p className="text-sm mb-4">Daily for 30 Days</p>
                  <div className="flex justify-between items-center mb-4">
                    <span>Min: $50</span>
                    <span>Max: $3,000</span>
                  </div>
                  <Button className="w-full bg-[#C0C0C0] text-black hover:bg-[#C0C0C0]/90">Choose Plan</Button>
                </div>
              </CardContent>
            </Card>

            {/* Bronze Plan */}
            <Card className="bg-[#CD7F32]/10 border-[#CD7F32] border">
            <CardHeader className="flex items-center pb-2">
                <div className="border-4 border-[#CD7F32]  p-3 rounded-full">
                  <Award className="text-[#CD7F32] h-8 w-8 " />
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <div className="text-center">
                  <h3 className="text-xl font-bold text-[#CD7F32] mb-4">BRONZE PLAN</h3>
                  <div className="text-4xl font-bold mb-2">50%</div>
                  <p className="text-sm mb-4">Daily for 30 Days</p>
                  <div className="flex justify-between items-center mb-4">
                    <span>Min: $10</span>
                    <span>Max: $1,000</span>
                  </div>
                  <Button className="w-full bg-[#CD7F32] text-black hover:bg-[#CD7F32]/90">Choose Plan</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Payment Methods Section */}
        <section className="mt-20 text-center px-4">
          <h2 className="text-2xl font-bold mb-8">We Accept Payment Methods</h2>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4 max-w-3xl mx-auto">
            {["Bitcoin", "Ethereum", "Litecoin", "Ripple", "Tether", "USDC"].map((crypto) => (
              <div key={crypto} className="border-2 flex items-center justify-center p-4 bg-white/5 rounded-lg">
                <span className="text-sm">{crypto}</span>
              </div>
            ))}
          </div>
        </section>


      </section>

      <style jsx global>{`
        body {
          background-image: url('${process.env.NEXT_PUBLIC_VERCEL_URL}/images/investment-bg.jpg');
          background-size: cover;
          background-position: center;
          background-attachment: fixed;
        }
      `}</style>
    </div>
  )
}

