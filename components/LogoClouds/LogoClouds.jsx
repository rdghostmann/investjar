"use client";
import Image from 'next/image';

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
  
        <div className="flex overflow-hidden space-x-16 group">
          <div className="flex space-x-16 animate-loop-scroll ">
            <Image loading="lazy" src={CoinDesk} className="max-w-fit" alt="Image 1" />
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/80480f8a-69ad-4c30-88ba-f4e7ee08fc51?apiKey=7e8b177c7c374d8abaf3aebf27f1c17d&" className="max-w-none" alt="Image 2" />
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/140d376c-13f2-4823-b397-b3de733bf560?apiKey=7e8b177c7c374d8abaf3aebf27f1c17d&" className="max-w-none" alt="Image 3" />
          </div>
          <div className="flex space-x-16 animate-loop-scroll " aria-hidden="true">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/8ee9f161-df19-4fa7-a2a6-edf9acf0e0d6?apiKey=7e8b177c7c374d8abaf3aebf27f1c17d&" className="max-w-none" alt="Image 1" />
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/80480f8a-69ad-4c30-88ba-f4e7ee08fc51?apiKey=7e8b177c7c374d8abaf3aebf27f1c17d&" className="max-w-none" alt="Image 2" />
          </div>
        </div>
      </div>
    </div>
  );
}
