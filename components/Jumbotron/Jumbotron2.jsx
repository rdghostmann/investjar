'use client'

import Link from 'next/link'
import { AnimatedShinyText } from '../ui/animated-shiny-text'


export default function Jumbotron2() {

  return (

    <div className="relative isolate px-6 pt-14 lg:px-8">
      <div className="overflow-hidden py-20 sm:py-32 lg:pb-32 xl:pb-36">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-x-8 lg:gap-y-20">
            <div className="relative z-10 mx-auto max-w-2xl lg:col-span-7 lg:max-w-none lg:pt-6 xl:col-span-6">
              <h1 className="text-4xl font-medium tracking-tight text-gray-900">
                Invest at the perfect time.
              </h1>
              <p className="mt-6 text-lg text-gray-600">
                By leveraging insights from our network of industry insiders, you’ll know exactly when to buy to maximize profit, and exactly when to sell to avoid painful losses.
              </p>
              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-4">
                <Link
                  aria-label="Download on the App Store"
                  className="rounded-lg transition-colors bg-gray-800 text-white hover:bg-gray-900"
                  href="#"
                >
                  <svg viewBox="0 0 120 40" aria-hidden="true" className="h-10">
                    <path fill="currentColor" d="M24.769 20.301a4.947 4.947 0 0 1 2.357-4.152..." />
                  </svg>
                </Link>
              </div>
            </div>
            <div className="relative z-0 lg:col-span-5 xl:col-span-6">
              {/* <Image
                className="relative aspect-[3/2] w-full rounded-lg bg-gray-100 object-cover xl:aspect-[5/3]"
                src="/image-path.jpg"
                alt="Sample Image"
                width={500}
                height={300}
              /> */}
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

