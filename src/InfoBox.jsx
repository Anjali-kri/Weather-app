// eslint-disable-next-line no-unused-vars
import React from 'react';

// eslint-disable-next-line react/prop-types
const InfoBox = ({ weatherData }) => {
    console.log(weatherData, "weatherData");
    const haze_img = "https://media.istockphoto.com/id/668658580/photo/blue-sky.jpg?s=2048x2048&w=is&k=20&c=YKnxZp6wFI6waypN6aPhlnBfjFhaeUgCuZRRUWVJqTk=";
    const hot_img = "https://media.istockphoto.com/id/993738504/photo/hot-summer-or-heat-wave-background-orange-sky-with-glowing-sun.jpg?s=2048x2048&w=is&k=20&c=ZR0hdP99-dsQlHIGQMmeVKnBb4WuqEoAG4-l62MiS3A=";
    const cold_img = "https://www.istockphoto.com/photo/hail-crystal-white-balls-laying-in-the-grass-after-a-hailstorm-gm1545364250-526029768?utm_campaign=srp_photos_bottom&utm_content=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fweather-cold-imgae&utm_medium=affiliate&utm_source=unsplash&utm_term=weather+cold+imgae%3A%3A%3A";

    // eslint-disable-next-line react/prop-types
    const imgsrc = weatherData.temp < 10 ? cold_img : weatherData.temp <=20 ? haze_img : hot_img
    return (
        <>
            <div className="max-w-md mx-auto bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <div className="p-5">
              
                         <img className="rounded-t-lg" src={imgsrc} alt="" />
                   
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Weather Information : {weatherData.City}
                    </h5>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                        Temperature: {weatherData.temp}°C
                    </p>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                        Min Temperature: {weatherData.minTemp}°C
                    </p>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                        Max Temperature: {weatherData.maxTemp}°C
                    </p>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                        Feels Like: {weatherData.feels_like}°C
                    </p>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                        Humidity: {weatherData.humidity}%
                    </p>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                        Pressure: {weatherData.pressure} hPa
                    </p>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                        Weather: {weatherData.weather}
                    </p>
                </div>
            </div>
        </>
    );
};

export default InfoBox;
