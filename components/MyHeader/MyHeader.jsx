import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import headerImg from "../../public/myHeaderImg.png";
import earth from "../../public/earth.png";
import earth2 from "../../public/earth2.png";
import roadmapearth from "../../public/roadmapearth.png";
import bitcoin from "../../public/bitcoin.png";
import appImg from "../../public/apps.png";


export default function MyHeader() {
  return (
    <header className="relative overflow-hidden px-4 py-5 md:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
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

        <section className="text-gray-600 ">
          <div className="container mx-auto flex px-5 py-10 md:flex-row  flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Invest at the perfect time.</h1>
              <p className="mb-8 leading-relaxed"> By leveraging insights from our network of industry insiders, you’ll
                know exactly when to buy to maximize profit, and exactly when to
                sell to avoid painful losses.</p>
              <div className="flex justify-center">
                <Link href="/login" className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"> Get started <span className="ml-4" aria-hidden="true">&rarr;</span></Link>
              </div>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
              <Image 
              className="object-cover object-center rounded" 
              alt="hero" 
              src={headerImg}
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

          </div>
        </section>

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

      </div>
    </header>
  );
}
