"use client";
import React from "react";

const CoinPriceStaticHeadlineWidget = () => {
  return (
    <div className="max-w-full py-5 overflow-x-hidden">
     <script src="https://widgets.coingecko.com/gecko-coin-price-static-headline-widget.js"></script>
     <gecko-coin-price-static-headline-widget locale="en" outlined="true" coin-ids="" initial-currency="usd"></gecko-coin-price-static-headline-widget>
    </div>
  );
};

export default CoinPriceStaticHeadlineWidget;
