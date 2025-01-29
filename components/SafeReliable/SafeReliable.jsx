import { ArrowRight, PiggyBank, Coins, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function SafeReliable() {
  return (
    <section className="w-full relative bg-gradient-to-br from-blue-900 to-blue-800 overflow-hidden">
      {/* <div className="absolute inset-0 bg-[url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/safemoney6-F6MnrlJ3VjEegYw0ZWEJmJ0Tfum1VH.png')] bg-cover bg-center opacity-10" /> */}

      <div className="relative px-5 py-12 md:py-24">
        {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"> */}
        <div className="grid grid-cols-1 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-blue-200 font-medium">Safe & Stable & Credible</h2>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">Invest to Build Your Wealth</h1>
              <p className="text-blue-100/80 max-w-lg">
                You have more spare time to do your favorite things and enjoy life. You just need to watch the amount in
                your account you earn every.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-400/10">
                  <PiggyBank className="w-6 h-6 text-blue-200" />
                </div>
                <p className="text-blue-100">Daily interest is accrued to your balance</p>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-400/10">
                  <Coins className="w-6 h-6 text-blue-200" />
                </div>
                <p className="text-blue-100">Several popular payment systems</p>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-400/10">
                  <TrendingUp className="w-6 h-6 text-blue-200" />
                </div>
                <p className="text-blue-100">Bonus of 3% from each deposit of any referral</p>
              </div>
            </div>

            <Button className="bg-indigo-400 hover:bg-indigo-500 text-white rounded-full px-8 py-6 text-lg font-medium group">
              Start Making Money
              <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>

          {/* Right Column - App Preview */}
          {/* <div className="relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] aspect-square">
              <div className="absolute inset-0 bg-slate-400/10  rounded-full animate-pulse" />
              <div className="absolute inset-[15%] bg-slate-400/20 rounded-full animate-pulse delay-300" />
              <div className="absolute inset-[30%] bg-slate-300/50 rounded-full animate-pulse delay-500" />
            </div>

            <div className="relative aspect-[9/19] max-w-[300px] mx-auto">
              <div className="absolute inset-0 rounded-[3rem] bg-gradient-to-br from-amber-800/90 to-amber-950/90 backdrop-blur-xl border border-amber-400/20 shadow-2xl">
                <div className="p-6 space-y-4">
                  <div className="space-y-1">
                    <p className="text-amber-200/60 text-sm">Current Balance</p>
                    <p className="text-4xl font-bold text-white">$ 23,387</p>
                  </div>

                  <div className="h-48 rounded-xl bg-gradient-to-br from-amber-400/20 to-amber-400/5 border border-amber-400/10" />

                  <div className="space-y-2">
                    <div className="flex justify-between items-baseline">
                      <p className="text-amber-200/60">Earnings</p>
                      <p className="text-green-400 font-medium">$72,946</p>
                    </div>
                    <div className="flex justify-between items-baseline">
                      <p className="text-amber-200/60">Withdraw</p>
                      <p className="text-amber-200 font-medium">$17,937</p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <p className="text-amber-200/60">Transactions</p>
                    <div className="space-y-1">
                      <div className="flex justify-between">
                        <span className="text-amber-100">Withdraw</span>
                        <span className="text-red-400">-$5,000</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-amber-100">Invest</span>
                        <span className="text-green-400">+$5,000</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  )
}

