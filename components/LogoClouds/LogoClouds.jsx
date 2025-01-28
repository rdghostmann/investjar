"use client";
import Image from 'next/image';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/css'; // Splide core styles
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll'; // Correct import

import CoinDesk from "../../public/coindesk-logo.png"
import Binance from "../../public/binance-logo.png"
import CoinBase from "../../public/coinbase-logo.png"
import CoinTelegraph from "../../public/cointelegraph-logo.png"
import ByBit from "../../public/bybit-logo.png"
import TradingView from "../../public/tradingview-logo.png"

export default function LogoClouds() {
  const logos = [
    {
      alt: 'Coindesk logo',
      src: CoinDesk
    },
    {
      alt: 'Binance logo',
      src: Binance
    },
    {
      alt: 'CoinBase logo',
      src: CoinBase
    },
    {
      alt: 'CoinTelegraph logo',
      src: CoinTelegraph
    },
    // {
    //   alt: 'ByBit logo',
    //   src: ByBit
    // },
    {
      alt: 'TradingView logo',
      src: TradingView
    },

  ];

  return (
    <div className="w-full bg-white mt-10 py-4 sm:py-8">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-2xl font-semibold text-gray-900">
          Our Trusted Partners
        </h2>
        <div className="mx-auto mt-6">
          <Splide
            options={{
              type: 'loop',
              perPage: 4, // Adjust for responsive behavior
              perMove: 1,
              gap: '1rem',
              autoScroll: {
                speed: 2, // Adjust scroll speed
              },
              pagination: false,
              arrows: false,
            }}
            extensions={{ AutoScroll }}
            className="max-w-5xl mx-auto"
          >
            {logos.map((logo, index) => (
              <SplideSlide className="flex items-center justify-center" key={index}>
                <Image
                  alt={logo.alt}
                  src={logo.src}
                  width={158}
                  height={48}
                  className="max-h-12 w-full object-contain"
                />
              </SplideSlide>
            ))}
          </Splide>
        </div>
      </div>
    </div>
  );
}
