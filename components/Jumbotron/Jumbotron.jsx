'use client'

import Link from 'next/link'
import { AnimatedShinyText } from '../ui/animated-shiny-text'
import myBgImg from "../../public/myHeaderImg2.png"
import Image from 'next/image'

export default function Jumbotron() {
  return (
    <div
      className="relative max-w-full isolate px-10 py-10 sm:px-6 lg:px-8 ">
      <div
        aria-hidden="true"
        className=" absolute inset-x-0 top-40 -z-10 transform-gpu overflow-hidden blur-3xl"
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="relative left-1/2 aspect-[1155/678] w-60 -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:w-[32.125rem]"
        />
      </div>
      <div
        aria-hidden="true"
        className=" absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl"
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="relative left-1/2 aspect-[1155/678] w-60 -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:w-[32.125rem]"
        />
      </div>
           {/* <div className="absolute inset-0 bg-[url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/safemoney6-F6MnrlJ3VjEegYw0ZWEJmJ0Tfum1VH.png')] bg-cover bg-center opacity-10" /> */}
           <div className="absolute w-full inset-0 bg-[url('https://superdesigner.co/img/3d_shapes.png')] bg-cover bg-center opacity-10" />

      <div className="mx-auto max-w-xl ">

        <div className="sm:mb-8 sm:flex sm:justify-center">
          {/* <div className="sm:mb-8 sm:flex sm:justify-center"> */}
          <div className="relative text-center rounded-full px-2 py-1 text-sm text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
            <AnimatedShinyText className="inline-flex items-center justify-center px-3 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
              <span>✨ Announcing InvestJar.</span>
              <Link href="#" className="font-semibold ml-2 text-indigo-600">
                <span aria-hidden="true" className="absolute inset-0" />
                <span aria-hidden="true">&rarr;</span>
              </Link>
            </AnimatedShinyText>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
            Invest at the perfect time.
          </h2>
          <p className="mt-4 text-base text-gray-500 sm:text-lg">
            By leveraging insights from our network of industry insiders, you’ll
            know exactly when to buy to maximize profit, and exactly when to
            sell to avoid painful losses.
          </p>
          <div className="mt-6 flex flex-col items-center gap-y-4 sm:flex-row sm:justify-center sm:gap-x-6">
            <Link
              href="/login"
              className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Get started
              {/* <span className="ml-4" aria-hidden="true">&rarr;</span> */}
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
