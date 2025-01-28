export default function VerveCard() {
  return (
    <div className="relative w-[420px] h-[280px] rounded-xl p-8 overflow-hidden bg-gradient-to-br from-[#DC143C] via-[#FF0000] to-[#8B0000]">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `linear-gradient(120deg, #FF0000 25%, transparent 25%, transparent 75%, #FF0000 75%, #FF0000)`,
          backgroundSize: "30px 30px",
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
        <div className="text-white text-2xl tracking-wider font-mono">5399 **** **** 1234</div>

        {/* CVV */}
        <div className="text-white/80 text-sm">CVV: ***</div>
      </div>

      {/* Verve Logo */}
      <div className="absolute bottom-8 right-8">
        <div className="text-white text-xl font-bold">VERVE</div>
      </div>
    </div>
  )
}

