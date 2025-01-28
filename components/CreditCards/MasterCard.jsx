import MastercardCard from "@/components/mastercard"
import VisaCard from "@/components/visa"
import VerveCard from "@/components/verve"

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-6xl mx-auto space-y-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Credit Cards</h1>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <MastercardCard />
          <VisaCard />
          <VerveCard />
        </div>
      </div>
    </div>
  )
}

