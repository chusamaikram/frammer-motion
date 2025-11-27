import { useEffect, useRef, useState } from "react";
import MoviesCard from "./MoviesCard";
import Spinner from "./SpinnerLoader";

export default function MoviesSection() {
    const [title, setTitle] = useState("");
    const [loading, setLoading] = useState(false);
    const [movies, setMovies] = useState([]);

    // to save the last search in local storage
    const [heading, setHeading] = useState(() => {
        return localStorage.getItem("lastSearch") || "Avengers";
    })
    const inputRef = useRef();

    // Fetch Movies from API
    const FetchMovies = async (query) => {
        setLoading(true);
        const res = await fetch(`http://www.omdbapi.com/?apikey=ec61a1a0&s=${query}`);
        const data = await res.json();
        setMovies(data.Search || []);
        setLoading(false);
    }

    // Handle Search Form Submission
    const handleSearch = (e) => {
        e.preventDefault();
        const query = inputRef.current.value.trim();
        if (query) {
            FetchMovies(query);
            setHeading(query);
            localStorage.setItem("lastSearch", query);
        }
        setTitle("");
    }

    useEffect(() => {
        FetchMovies(heading);
    }, []);

    // Event listener for custom event to reset to "Avengers"
    useEffect(() => {
        const resetToAvengers = () => {
            setHeading("Avengers");
            localStorage.setItem("lastSearch", "Avengers");
            FetchMovies("Avengers");
        };

        window.addEventListener("goHome", resetToAvengers);

        return () => {
            window.removeEventListener("goHome", resetToAvengers);
        };
    }, []);


    return (
        <>
            <section className="mt-16">
                <div className="container">

                    <form onSubmit={handleSearch} className="flex items-center justify-center gap-4">
                        <input
                            className="p-4 bg-white rounded-xl text-black font-bold outline-none "
                            type="text"
                            ref={inputRef}
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            placeholder="Search any movie.."
                        />
                        <button
                            type="submit"
                            className="flex items-center cursor-pointer justify-center p-4 bg-blue-400 rounded-xl border-none text-base font-bold text-black"
                        >
                            Search here
                        </button>
                    </form>


                    <h2 className="text-xl font-bold my-10">
                        Showing result for:{" "}
                        <span className="text-amber-600 capitalize">{heading}</span>
                    </h2>

                    {loading ? (
                        <Spinner />
                    ) : movies.length > 0 ? (
                        <div className="mt-16 grid grid-cols-3 gap-y-8 gap-x-8 items-start">
                            {movies.map((movie) => (
                                <MoviesCard key={movie.imdbID} movie={movie} />
                            ))}
                        </div>
                    ) : (
                        <p className="text-center text-white font-semibold text-xl">No movies found</p>
                    )}
                </div>
            </section>

        </>
    )
}