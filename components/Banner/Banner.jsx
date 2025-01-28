import { XMarkIcon } from '@heroicons/react/20/solid'
import { AnimatedShinyText } from '../ui/animated-shiny-text'
import Link from 'next/link'

export default function Banner() {
  return (
    <div className="relative isolate flex items-center gap-x-6 overflow-hidden px-6 py-2.5 sm:px-3.5 sm:before:flex-1">
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-[max(-7rem,calc(50%-52rem))] -z-10 -translate-y-1/2 transform-gpu blur-2xl"
      >
        <div
          style={{
            clipPath:
              'polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)',
          }}
          className="aspect-577/310 w-[36.0625rem] bg-linear-to-r from-[#ff80b5] to-[#9089fc] opacity-30"
        />
      </div>
   
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
      <div className="relative text-center my-4 rounded-full px-2 py-1 text-sm text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
            <AnimatedShinyText className="text-xs/5 inline-flex items-center justify-center px-2 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
              <span>✨ Announcing our next round of funding.</span>
              <Link href="#" className="font-semibold ml-2 text-indigo-600">
                <span aria-hidden="true" className="absolute inset-0" />
                <span aria-hidden="true">&rarr;</span>
              </Link>
            </AnimatedShinyText>
          </div>
      </div>
     
    </div>
  )
}
