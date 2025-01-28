"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Slider } from "@/components/ui/slider"
import { ArrowRight } from "lucide-react"
import Image from "next/image"



const plans = [
  { type: "gold", roi: 120, minInvest: 500, maxInvest: 5000, medal: 1 },
  { type: "silver", roi: 80, minInvest: 100, maxInvest: 500, medal: 2 },
  { type: "bronze", roi: 50, minInvest: 20, maxInvest: 100, medal: 3 },
]
const InvestmentCalculator = ({ plans = [] }) => {
  const [selectedPlan, setSelectedPlan] = useState(plans[0])
  const [amount, setAmount] = useState(selectedPlan.minInvest)

  const handlePlanSelect = (plan) => {
    setSelectedPlan(plan)
    setAmount(plan.minInvest)
  }

  const handleAmountChange = (value) => {
    setAmount(value[0])
  }

  const dailyProfit = (amount * selectedPlan.roi) / (100 * 30)
  const totalProfit = dailyProfit * 30


  return (
         <div className="w-full px-4 py-12 bg-[#2C1810]">
            <div className="container mx-auto">
              {/* Investment Plans */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {plans.map((plan) => (
                  <Card
                    key={plan.type}
                    className={`relative overflow-hidden ${plan.type === "gold"
                        ? "bg-[#FFD700]/10 border-[#FFD700]"
                        : plan.type === "silver"
                          ? "bg-[#C0C0C0]/10 border-[#C0C0C0]"
                          : "bg-[#CD7F32]/10 border-[#CD7F32]"
                      } border-2`}
                  >
                    <div className="absolute -top-6 left-1/2 -translate-x-1/2">
                      <Image src={`/medal-${plan.medal}.png`} alt={`${plan.type} medal`} width={60} height={60} />
                    </div>
                    <CardContent className="pt-12 text-center">
                      <h3 className="text-xl font-bold uppercase mb-4">{plan.type} plan</h3>
                      <div className="text-4xl font-bold mb-2">
                        {plan.roi}% <span className="text-sm">ROI</span>
                      </div>
                      <p className="text-sm text-gray-400 mb-4">Daily for 30 Days</p>
                      <div className="bg-black/20 rounded-lg p-4">
                        <div className="flex justify-between text-sm mb-2">
                          <span>Min. Invest</span>
                          <span>${plan.minInvest}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span>Max. Invest</span>
                          <span>${plan.maxInvest}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
      
              {/* Investment Calculator */}
              <Card className="bg-[#FFECD1] text-[#2C1810]">
                <CardContent className="p-6">
                  <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                    <div className="lg:col-span-3 space-y-6">
                      <div>
                        <label className="text-lg font-medium">Choose Plan:</label>
                        <div className="flex flex-wrap gap-2 mt-2">
                          {plans.map((plan) => (
                            <Button
                              key={plan.type}
                              onClick={() => handlePlanSelect(plan)}
                              variant={selectedPlan.type === plan.type ? "default" : "outline"}
                              className={
                                selectedPlan.type === plan.type
                                  ? "bg-[#2C1810] text-white"
                                  : "border-[#2C1810] text-[#2C1810]"
                              }
                            >
                              {plan.type.charAt(0).toUpperCase() + plan.type.slice(1)} Plan
                            </Button>
                          ))}
                        </div>
                      </div>
      
                      <div>
                        <label className="text-lg font-medium">Enter Amount:</label>
                        <div className="flex items-center gap-4 mt-2">
                          <Input
                            type="number"
                            value={amount}
                            onChange={(e) => setAmount(Number(e.target.value))}
                            className="bg-white border-[#2C1810]"
                          />
                          <span>USD</span>
                        </div>
                        <Slider
                          value={[amount]}
                          min={selectedPlan.minInvest}
                          max={selectedPlan.maxInvest}
                          step={1}
                          onValueChange={handleAmountChange}
                          className="mt-4"
                        />
                        <div className="text-sm text-gray-600 mt-2">{amount} USD</div>
                      </div>
                    </div>
      
                    <div className="bg-[#2C1810] text-white p-6 rounded-lg">
                      <div className="space-y-4">
                        <div>
                          <div className="text-sm">Daily Profit</div>
                          <div className="text-2xl font-bold">{dailyProfit.toFixed(2)} USD</div>
                        </div>
                        <div>
                          <div className="text-sm">Total Profit</div>
                          <div className="text-2xl font-bold">{totalProfit.toFixed(2)} USD</div>
                        </div>
                        <Button className="w-full bg-[#FFD700] text-black hover:bg-[#FFD700]/90">
                          Invest Now
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
            </div>
          </div>
   
  );
};

export default InvestmentCalculator;
