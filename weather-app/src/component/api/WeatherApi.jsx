import { useEffect, useState } from "react";
import Sidebar from "../Sidebar";
import WeatherCard from "../Weather-card";
import Forecast from "../Forecast";
import Header from "../Header";

export default function WeatherApi() {
    const [city, setCity] = useState(""); // city name to display
    const [weather, setWeather] = useState(null);
    const [currentCity, setCurrentCity] = useState(""); // city name from geolocation
    const [loading, setLoading] = useState(true);


    const [sidebarOpen, setSidebarOpen] = useState(false);

    const API_KEY = "b9b2a93743504103a33105448250512";

    //  open weather api : fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=889a2a7ba8af815bf0f7c4e64a567cdb&units=metric`)

    // Fetch weather using lat/lon
    const fetchWeather = (query) => {
        setLoading(true);
        fetch(`https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${query}&days=10&aqi=no&alerts=no`)
            .then((res) => res.json())
            .then((data) => {
                console.log("API Response:", data);
                setWeather(data);
                setCurrentCity(data.location.name); // update city name
                setLoading(false);
            })
            .catch((err) => {
                console.log(err)
                setLoading(false);
            });

    };

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords;
                    fetchWeather(`${latitude},${longitude}`);
                },
                (error) => {
                    console.log("Geolocation error:", error);
                    alert("Could not get location. Please allow location access.");
                }
            );
        } else {
            alert("Geolocation is not supported by this browser.");
        }
    }, []);

    // Handle city search
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!city) return;

        // Convert city name to lat/lon using WeatherAPI search endpoint
        try {
            const res = await fetch(
                `https://api.weatherapi.com/v1/search.json?key=${API_KEY}&q=${city}`
            );
            const data = await res.json();

            if (data.length > 0) {
                const { lat, lon } = data[0];
                fetchWeather(`${lat},${lon}`);
            } else {
                alert("City not found!");
            }
        } catch (err) {
            console.log(err);
        }
        setCity("");
        setSidebarOpen(false);
    };
    return (
        <>
            <Header setSidebar={setSidebarOpen} sidebarOpen={sidebarOpen} />
            <div className="flex h-screen">
                <Sidebar
                    city={city}
                    setCity={setCity}
                    handleSubmit={handleSubmit}
                    weather={weather}
                    sidebarOpen={sidebarOpen} // pass state
                    loading={loading}
                />
                <div className="flex-1 flex flex-col">

                    <main className="p-6 bg-white/20 backdrop-blur-md flex-1 overflow-auto">
                        <WeatherCard weather={weather} loading={loading} />
                        <Forecast forecast={weather} loading={loading} />
                    </main>
                </div>
            </div>

        </>
    )
}

