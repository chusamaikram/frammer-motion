import LoadingAnimation from "./LoadingAnimation";


export default function Forecast({ forecast, loading }) {

    return (
        <>
            <div className=" p-6">
                <h2 className="text-2xl md:text-[44px] font-semibold mb-6"> 10 days forecast</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                    {forecast?.forecast?.forecastday?.map((day, index) => (
                        <div key={index}
                            className=" bg-black/20 backdrop-blur-md border-2 border-white rounded-xl p-3 flex flex-col items-center transition transform duration-300 hover:scale-105 "
                        >
                            {loading ? (<LoadingAnimation />) : (
                                <>
                                    <time className="font-medium"> {new Date(day.date).toLocaleDateString("en-US", { weekday: "long" })}</time>
                                    <time className="font-normal text-sm mb-2 text-gray-300"> {new Date(day.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</time>

                                    <img src={day.day.condition.icon} alt="icon" />
                                    <span className="text-sm text-gray-300">{day.day.condition.text}</span>

                                    <div className="mt-4 flex items-center justify-between gap-8">
                                        <div className="flex flex-col">
                                            <span className="text-sm text-gray-300" >High/Low</span>
                                            <span className="text-sm">{day.day.maxtemp_c}/{day.day.mintemp_c}</span>
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="text-sm text-gray-300">Rain </span>
                                            <span className="text-sm">{day.day.daily_chance_of_rain}%</span>
                                        </div>

                                    </div>
                                </>
                            )}

                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}