"use client";
import React, { useEffect, useState } from "react";
import Slider from "react-slick"; // Import react-slick
import "slick-carousel/slick/slick.css"; // Slick styles
import "slick-carousel/slick/slick-theme.css"; // Slick theme styles

const WatchList = () => {
  const [cryptos, setCryptos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCryptoPrices = async () => {
      try {
        const response = await fetch(
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setCryptos(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching crypto prices:", error);
        setError("Failed to load cryptocurrency data.");
        setLoading(false);
      }
    };

    fetchCryptoPrices();
  }, []);

  // Carousel settings
  const settings = {
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const handleRedirect = (coinId) => {
    const url = `https://www.coingecko.com/en/coins/${coinId}`;
    window.open(url, "_blank");
  };

  return (
    <div className="w-full border px-10 sm:px-6 md:px-8 lg:px-10 py-6">
      <div className="border w-9/12 mx-auto">
        <h2 className="text-center text-xl sm:text-2xl lg:text-3xl font-bold mb-6 text-gray-700">
          Market Prices
        </h2>

        {loading ? (
          <div className="text-center">
            <div className="animate-spin border-t-2 border-pink-500 rounded-full w-8 h-8 mx-auto mb-2"></div>
            <p className="text-gray-600">Loading...</p>
          </div>
        ) : error ? (
          <div className="text-center text-red-500">{error}</div>
        ) : (
          <Slider {...settings}>
            {cryptos.map((crypto) => (
              <div
                key={crypto.id}
                className="p-2 md:p-4"
                onClick={() => handleRedirect(crypto.id)}
              >
                <div className="p-4 bg-white rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
                  <div className="flex items-center space-x-4">
                    <img
                      src={crypto.image}
                      alt={crypto.name}
                      className="w-10 h-10 sm:w-12 sm:h-12 rounded-full shadow-md"
                    />
                    <div>
                      <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-gray-800">
                        {crypto.name} ({crypto.symbol.toUpperCase()})
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-600">
                        Price: ${crypto.current_price.toFixed(2)}
                      </p>
                      <p className="text-xs sm:text-sm text-gray-600">
                        Market Cap: ${crypto.market_cap.toLocaleString()}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        )}
      </div>
    </div>
  );
};

export default WatchList;
