import React from "react";

function WeatherForecast({ data }) {
  return (
    <>
      <div className="card bg-gradient-to-br from-green-300 to-gray-900 lg:col-span-2 md:col-span-2">
        <div className="card-body">
          <h2 className="card-title">3 Days Forecast</h2>
          <div className="flex justify-around">
            {/* <div className="stats">
              <div className="stat">
                <div className="card-title">Monday</div>
              </div>
            </div> */}

            {data.forecast.forecastday.map((day) => (
              <p key={day.date}>{day.day.condition.text}</p>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default WeatherForecast;
