<InvestBtn planId={plan._id} />

'use client';

import React from 'react';
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Award } from "lucide-react"

export function InvestmentPlanCard({
  type = "gold",
  roi = 120,
  duration = 30,
  minInvest = 500,
  maxInvest = 5000,
}) {
  const colors = {
    gold: {
      bg: "bg-[#FFD700]/10",
      border: "border-[#FFD700]",
      text: "text-[#FFD700]",
    },
    silver: {
      bg: "bg-[#C0C0C0]/10",
      border: "border-[#C0C0C0]",
      text: "text-[#C0C0C0]",
    },
    bronze: {
      bg: "bg-[#CD7F32]/10",
      border: "border-[#CD7F32]",
      text: "text-[#CD7F32]",
    },
  }

  return (
    <Card className={`${colors[type].bg} ${colors[type].border} border-2`}>
      <CardHeader className="flex items-center pb-2">
        <div className={`${colors[type].bg} p-3 rounded-full`}>
          <Award className={`h-8 w-8 ${colors[type].text}`} />
        </div>
      </CardHeader>
      <CardContent className="text-center space-y-4">
        <h3 className={`text-2xl font-bold ${colors[type].text} uppercase`}>{type} plan</h3>
        <div className="space-y-2">
          <div className="text-4xl font-bold">
            {roi}% <span className="text-sm">ROI</span>
          </div>
          <p className="text-sm text-gray-400">Daily for {duration} Days</p>
        </div>
        <div className="bg-black/20 rounded-lg p-4 space-y-2">
          <div className="flex justify-between text-sm">
            <span>Min. Invest</span>
            <span>${minInvest.toLocaleString()}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span>Max. Invest</span>
            <span>${maxInvest.toLocaleString()}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

