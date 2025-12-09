import humidity from '../assets/humidity2.png';
import wind from '../assets/wind2.png';
import pressure from '../assets/pressure2.png';
import uv from '../assets/uv2.png';
import sunrise from '../assets/sunrise2.png';
import sunset from '../assets/sunset2.png';
import LoadingAnimation from './LoadingAnimation';
export default function WeatherCard({ weather, loading }) {

    const Cards = [
        {
            title: 'Humidity',
            value: `${weather?.current?.humidity} %`,
            img: humidity,


        },
        {
            title: 'Wind Speed',
            value: `${weather?.current?.wind_kph} kph`,
            img: wind
        },

        {
            title: 'pressure',
            value: `${weather?.current?.pressure_in} in`,
            img: pressure
        },
        {
            title: 'UV Index',
            value: `${weather?.current?.uv}`,
            img: uv
        },
        {
            title: 'Sunrise',
            value: `${weather?.forecast?.forecastday[0].astro?.sunrise}`,
            img: sunrise
        },
        {
            title: 'Sunset',
            value: `${weather?.forecast?.forecastday[0].astro?.sunset} `,
            img: sunset
        },

    ];
    const today = new Date();
    const formattedDate = today.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    }).replace(',', '');
    return (
        <>
            <div className="my-4 bg-black/20 backdrop-blur-md border-2 border-white rounded-xl py-3 px-4 md:hidden">
                <div className="flex  items-center justify-between w-full ">
                    <div className="flex flex-col items-start ">
                        <p className="flex items-center gap-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                            >
                                <path
                                    d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"
                                    fill="white"
                                    stroke="black"
                                    strokeWidth="1"
                                />
                                <circle cx="12" cy="9" r="2.5" fill="black" />
                            </svg>

                            <span className="text-lg md:text-2xl font-semibold">{weather?.location?.name} , {weather?.location?.country}</span>
                        </p>
                        <time className="mb-3 ms-4  font-normal" dateTime={formattedDate}>{formattedDate}</time>
                    </div>
                    <img className="overflow-hidden h-auto md:ms-12 " src={weather?.current?.condition?.icon} alt="icon" width={180} height={80} />
                </div>
                <div className="w-full flex flex-col items-start gap-1">
                    <p className="text-[36px] md:text-[72px] font-bold text-white text-center leading-[normal] flex items-start gap-1">{weather?.current?.temp_c} <span className="text-2xl font-semibold mt-3">℃</span> </p>
                    <span className="text-gray-300">Feels like {weather?.current?.feelslike_c} ℃ </span>
                </div>
            </div>
            <h1 className="text-[32px] md:text-[44px] font-bold mt-6 md:mt-0 ">Today's Highlights</h1>
            <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-8 mt-8">
                {Cards.map((card, index) => (
                    <div className=" bg-black/20 backdrop-blur-md border-2 border-white rounded-xl py-3 px-4 flex flex-col items-center gap-1 transition transform duration-300 hover:scale-105" key={index}>
                        {loading ? (<LoadingAnimation />) : (
                            <>
                                <h2 className="text-2xl font-bold mt-2">{card.title}</h2>
                                <img src={card.img} alt={card.title} width={70} />
                                <span className='font-semibold'>{card.value}</span>
                            </>
                        )}


                    </div>
                ))}

            </div>
        </>
    )
}