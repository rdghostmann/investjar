import Image from "next/image"
import InstantTrading from "../../public/pick-29.png"
import RecurringBuying from "../../public/pick-28.png"
import SafeSecure from "../../public/pick-17.png"
import InvestmentPlanning from "../../public/pick-19.png"
import CoveredInsurance from "../../public/pick-12.png"
import BitcoinTransaction from "../../public/pick-38.png"

const features = [
  {
    title: "INSTANT TRADING",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesg indtrysum has been the ipsum dummy of the printing indus.",
    icon: InstantTrading,
  },
  {
    title: "RECURRING BUYING",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesg indtrysum has been the ipsum dummy of the printing indus.",
    icon: RecurringBuying,
  },
  {
    title: "SAFE AND SECURE",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesg indtrysum has been the ipsum dummy of the printing indus.",
    icon: SafeSecure,
  },
  {
    title: "INVESTMENT PLANNING",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesg indtrysum has been the ipsum dummy of the printing indus.",
    icon: InvestmentPlanning,
  },
  {
    title: "COVERED BY INSURANCE",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesg indtrysum has been the ipsum dummy of the printing indus.",
    icon: CoveredInsurance,
  },
  {
    title: "BITCOIN TRANSACTION",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesg indtrysum has been the ipsum dummy of the printing indus.",
    icon: BitcoinTransaction,
  },
]

export default function WhyChoose() {
  return (
    <section className="px-4 py-16 md:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-12 text-center">
          <h3 className="mb-2 text-sm font-medium uppercase tracking-wider text-gray-500">Buy and Sell Bitcoin</h3>
          <h2 className="mb-6 text-3xl font-bold text-gray-900 md:text-4xl">WHY CHOOSE BITCOIN</h2>
          <p className="mx-auto max-w-2xl text-gray-600">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry&apos;s standard dummy text ever since the 1500s.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div key={index} className="rounded-lg bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
              <div className="mb-4 flex justify-center">
                <div className="relative h-12 w-12">
                  <Image src={feature.icon || "/placeholder.svg"} alt="" fill className="object-contain" priority />
                </div>
              </div>
              <h3 className="mb-3 text-center text-lg font-semibold text-gray-900">{feature.title}</h3>
              <p className="text-center text-sm text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

