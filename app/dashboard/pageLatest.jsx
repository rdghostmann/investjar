import { ArrowUpRight } from "lucide-react";

import React from "react";
import Watchlist from "./_components/WatchList/WatchList";

const page = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-6 p-4 lg:p-8 bg-gray-100 min-h-screen overflow-x-hidden max-w-full">
      {/* Left Section */}
      <div className="flex-1 space-y-6 basis-0">
        {/* Portfolio Overview */}
        <div className="flex justify-between bg-white shadow-md p-4 rounded-lg">
          <div className="border-r-2 flex-1 p-2 w-1/2 lg:px-2">
            <p className="text-sm text-gray-500">PORTFOLIO VALUE</p>
            <div className="flex items-center gap-2">
              <h2 className="text-2xl font-bold md:text-3xl">$5,260</h2>
              <span className="flex items-center text-sm text-green-500">
                <ArrowUpRight className="h-4 w-4" />
                1.25%
              </span>
            </div>
          </div>
          <div className="flex-1 p-2 w-1/2 lg:px-2">
            <p className="text-sm text-gray-500">VOLUME (24H)</p>
            <div className="flex items-center gap-2">
              <h2 className="text-2xl font-bold md:text-3xl">$7,472</h2>
              <span className="flex items-center text-sm text-green-500">
                <ArrowUpRight className="h-4 w-4" />
                1.25%
              </span>
            </div>
          </div>
        </div>

        {/* Portfolio Stats */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 bg-white shadow-md p-4 rounded-lg">
          <div className="bg-white p-4">
            <div className="flex flex-wrap justify-between items-center mb-4">
              <h3 className="font-semibold text-gray-800">Portfolio Stats</h3>
              <div className="flex items-center space-x-2">
                <button className="bg-gray-100 px-3 py-1 rounded text-sm">
                  Bitcoin
                </button>
                <button className="bg-gray-100 px-3 py-1 rounded text-sm">
                  Weekly
                </button>
              </div>
            </div>
            <div className="h-fit bg-gray-50 rounded-lg flex items-center justify-center">
              {/* Replace with graph component */}
              <span className="text-gray-400">Graph Placeholder</span>
            </div>
          </div>
          <div className="bg-white shadow-md p-4 rounded-lg">
            {/* Watchlist */}
            <Watchlist />
          </div>
        </div>

        {/* My Portfolio */}
        <div className="bg-white shadow-md p-4 rounded-lg">
          <h3 className="font-semibold text-gray-800 mb-4">My Portfolio</h3>
          <div className="space-y-4">
            <div className="flex flex-wrap justify-between items-center">
              <div className="flex items-center space-x-4">
                <div className="w-8 h-8 rounded-full bg-purple-500"></div>
                <div>
                  <p className="font-semibold text-gray-800">Ethereum (ETH)</p>
                  <p className="text-gray-500 text-sm">46%</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-gray-800">0.124567 ETH</p>
                <p className="text-green-500 text-sm">+0.25%</p>
              </div>
            </div>
            <div className="flex flex-wrap justify-between items-center">
              <div className="flex items-center space-x-4">
                <div className="w-8 h-8 rounded-full bg-blue-500"></div>
                <div>
                  <p className="font-semibold text-gray-800">XRP</p>
                  <p className="text-gray-500 text-sm">24%</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-gray-800">0.6567 XRP</p>
                <p className="text-red-500 text-sm">-0.19%</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full lg:w-1/3 space-y-6 basis-0">
        {/* Buy/Sell/Convert */}
        <div className="mb-2 bg-white shadow-md p-4 rounded-lg">
          {/* Tabs */}
          <div className="flex justify-around mb-6">
            <button className="text-purple-600 font-medium border-b-2 border-purple-600 pb-2">
              Buy
            </button>
            <button className="text-gray-500 pb-2">Sell</button>
            <button className="text-gray-500 pb-2">Convert</button>
          </div>

          {/* Amount */}
          <div className="text-center mb-6">
            <h2 className="text-4xl font-bold text-gray-800">$0</h2>
            <p className="text-gray-500 text-sm">You can buy up to $25,000</p>
          </div>

          {/* Buy Section */}
          <div className="space-y-4">
            {/* Buy Option */}
            <div className="flex flex-wrap justify-between items-center bg-gray-50 p-4 rounded-lg">
              <div className="w-full">
                <p className="text-sm text-gray-500">Buy</p>
                <select className="bg-transparent p-2 rounded w-full">
                  <option>Ethereum</option>
                  <option>Bitcoin</option>
                </select>
              </div>
            </div>

            {/* Pay With */}
            <div className="flex flex-wrap justify-between items-center bg-gray-50 p-4 rounded-lg">
              <div className="w-full">
                <p className="text-sm text-gray-500">Pay with</p>
                <select className="bg-transparent p-2 rounded w-full">
                  <option>PayPal</option>
                  <option>Credit Card</option>
                </select>
              </div>
            </div>
          </div>

          {/* Buy Button */}
          <button className="w-full bg-purple-600 text-white font-medium py-3 rounded-lg mt-6">
            Buy
          </button>
        </div>

        {/* Recent Transactions */}
        <div className="my-6 bg-white shadow-md p-4 rounded-lg lg:mx-0">
          {/* Header */}
          <div className="flex items-center justify-between">
            <h3 className="font-medium">Recent Transactions</h3>
            <button className="text-sm text-indigo-600">See all</button>
          </div>

          {/* Transactions List */}
          <div className="mt-4 space-y-4 overflow-x-auto">
            {/* Transaction Item 1 */}
            <div className="flex items-center justify-between min-w-[320px]">
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-green-100 p-2">
                  <ArrowUpRight className="h-4 w-4 text-green-600" />
                </div>
                <div>
                  <p className="font-medium">Deposit Bitcoin</p>
                  <p className="text-sm text-gray-500">Oct 1 2023, 8:00 AM</p>
                </div>
              </div>
              <p className="font-medium text-green-600">+0.00048724 BTC</p>
            </div>

            {/* Transaction Item 2 */}
            <div className="flex items-center justify-between min-w-[320px]">
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-red-100 p-2">
                  <ArrowUpRight className="h-4 w-4 rotate-45 text-red-600" />
                </div>
                <div>
                  <p className="font-medium">Withdraw Ethereum</p>
                  <p className="text-sm text-gray-500">Sep 20 2022, 2:23 PM</p>
                </div>
              </div>
              <p className="font-medium text-red-600">-0.02034675 ETH</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
