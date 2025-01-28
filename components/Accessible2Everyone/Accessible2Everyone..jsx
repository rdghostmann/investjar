"use client"

import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Image from "next/image"

const ActiveUser = ({ image, progress }) => (
  <div className="flex items-center gap-3 mb-4">
    <div className="relative w-10 h-10">
      <Image src={image || "/placeholder.svg"} alt="" fill className="rounded-full object-cover" />
    </div>
    <div className="flex-1">
      <div className="h-2 rounded-full bg-amber-100/10">
        <div className="h-full rounded-full bg-amber-400" style={{ width: `${progress}%` }} />
      </div>
    </div>
  </div>
)

const StatCard = ({
  label,
  value,
  percentage,
  color,
}) => (
  <Card className="bg-amber-900/50 border-amber-400/20 p-6 relative overflow-hidden">
    <h3 className="text-amber-200/80 mb-2">{label}</h3>
    <div className="flex items-baseline gap-4">
      <span className="text-4xl font-bold text-white">{value}</span>
      <span className={`text-${color}-400`}>+ {percentage}%</span>
    </div>
    <div className="absolute bottom-0 left-0 right-0 h-16">
      <svg className="w-full h-full" preserveAspectRatio="none">
        <defs>
          <linearGradient id={`gradient-${color}`} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style={{ stopColor: color === "amber" ? "#f59e0b" : "#3b82f6", stopOpacity: 0.2 }} />
            <stop offset="100%" style={{ stopColor: color === "amber" ? "#f59e0b" : "#3b82f6", stopOpacity: 0 }} />
          </linearGradient>
        </defs>
        <path
          d={`M0 40 Q${window.innerWidth / 4} 20, ${window.innerWidth / 2} 30, ${window.innerWidth} 10 V60 H0 Z`}
          fill={`url(#gradient-${color})`}
        />
      </svg>
    </div>
  </Card>
)

export function Accessible2veryone() {
  return (
    <section className="bg-gradient-to-br from-amber-900 to-amber-950 min-h-screen relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Accessible2Everyone-zPTJKIBcdmOmkBzhdTBI9VVmNORljK.png')] bg-cover bg-center opacity-10" />

      <div className="container mx-auto px-4 py-16 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="relative">
              <StatCard label="New Users" value={856} percentage={5.89} color="amber" />

              <Card className="bg-amber-800/50 border-amber-400/20 p-6 mt-6">
                <h3 className="text-white mb-4">Active User</h3>
                <ActiveUser image="/placeholder.svg" progress={75} />
                <ActiveUser image="/placeholder.svg" progress={60} />
                <ActiveUser image="/placeholder.svg" progress={85} />
              </Card>

              <StatCard label="Growth Rate" value={532} percentage={4.22} color="blue" />

              {/* Floating Crypto Icons */}
              <div className="absolute -right-4 top-1/2 -translate-y-1/2 space-y-2">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-amber-600 rounded-lg transform rotate-12" />
                <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg transform -rotate-12 ml-4" />
                <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-purple-600 rounded-lg transform rotate-45" />
              </div>
            </div>
          </div>

          <div className="text-center lg:text-left lg:max-w-xl">
            <h2 className="text-amber-400 text-xl mb-4">Accessible to Everyone</h2>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">A Simple and Easy Way to Investment</h1>
            <p className="text-amber-100/80 mb-8">
              We offer our investors a unique opportunity to start investing in the most relevant instruments of the
              21st century. Maximum profit at low risks. Start earning today with Aribuka.
            </p>
            <Button className="bg-amber-400 hover:bg-amber-500 text-amber-950 rounded-full px-8 py-6 text-lg font-medium group">
              Invest Now
              <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

