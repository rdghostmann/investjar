export default function VisaCard() {
  return (
    <div className="relative w-[420px] h-[280px] rounded-xl p-8 overflow-hidden bg-gradient-to-br from-[#4682B4] via-[#87CEEB] to-[#B0C4DE]">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `linear-gradient(45deg, #FFFFFF 25%, transparent 25%, transparent 75%, #FFFFFF 75%, #FFFFFF)`,
          backgroundSize: "20px 20px",
        }}
      />

      {/* Bank Logo */}
      <div className="flex justify-end mb-4">
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/images%20(1)-OAUqnnWtC9dwSKTor4syNx4hm4Y5Cf.jpeg"
          alt="Bank Logo"
          className="w-16 h-8 object-contain"
        />
      </div>

      {/* Chip */}
      <div className="w-12 h-10 bg-gradient-to-br from-[#FFD700] to-[#B8860B] rounded-md mb-8" />

      {/* Card Number */}
      <div className="space-y-4">
        <div className="text-white text-2xl tracking-wider font-mono">4921 **** **** 8523</div>

        {/* CVV */}
        <div className="text-white/80 text-sm">CVV: ***</div>
      </div>

      {/* Visa Logo */}
      <div className="absolute bottom-8 right-8">
        <div className="text-white text-2xl font-bold italic">VISA</div>
      </div>
    </div>
  )
}

