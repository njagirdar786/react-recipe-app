"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

function page({ params }) {
  const [dayData, setDayData] = useState(null);
  const date = params.date;
  const location = params.location;

  useEffect(() => {
    const fetchData = async () => {
      const apiKey = process.env.NEXT_PUBLIC_WEATHER_API_KEY;
      const url = `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${location}&days=3&aqi=no&alerts=no`;

      const response = await fetch(url);
      const data = await response.json();
      const specificDayData = data.forecast.forecastday.find(
        (day) => day.date === date
      );
      setDayData(specificDayData);
    };

    fetchData();
  }, []);

  return (
    <div className="flex flex-col items-center p-4 bg-black text-white min-h-screen">
      {dayData && (
        <div>
          <h1>Forecast for {dayData.date}</h1>

          <Link className="btn" href={"/"}>
            Go Back
          </Link>
        </div>
      )}
    </div>
  );
}

export default page;
