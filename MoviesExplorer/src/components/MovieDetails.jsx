import NoPreview from "../assets/no-preview.webp";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "./Header";
import TypingText from "./TypingText";
import Spinner from "./SpinnerLoader";

export default function MovieDetails() {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        const fetchMovieDetails = async () => {
            const res = await fetch(`https://www.omdbapi.com/?apikey=ec61a1a0&i=${id}`);
            const data = await res.json();
            setMovie(data);
        };
        fetchMovieDetails();
    }, [id]);

    if (!movie) {
        return <Spinner />;
    }

    return (
        <>
            <Header bg="bg-black" />
            <section className="pt-16 bg-[#191919] min-h-screen">
                <div className="container mx-auto px-4">
                    <TypingText text={movie.Title} />
                    <div className="mt-16 flex flex-col md:flex-row gap-10">

                        <div className="md:w-1/3 flex justify-center">
                            <img
                                src={movie.Poster !== "N/A" ? movie.Poster : NoPreview}
                                alt={movie.Title}
                                loading="lazy"
                                className="rounded-xl shadow-lg object-cover w-full"
                            />
                        </div>
                        <div className="md:w-2/3 text-white flex flex-col gap-6">

                            <div className="flex flex-wrap gap-12 text-gray-400 font-semibold">
                                <p >Year : <span className="text-white font-[normal]">{movie.Year}</span></p>
                                <p>Genre :  <span className="text-white font-[normal]">{movie.Genre}</span></p>
                                <p>Director :  <span className="text-white font-[normal]">{movie.Director}</span></p>
                                <p>Actors : <span className="text-white font-[normal]">{movie.Actors}</span></p>
                                <p>Language : <span className="text-white font-[normal]">{movie.Language}</span></p>
                                <p>Country :  <span className="text-white font-[normal]">{movie.Country}</span></p>
                                <p>Type : <span className="text-white font-[normal]">{movie.Type}</span> </p>

                                {movie.totalSeasons && (
                                    <>
                                        <p>Total Seasons : <span className="text-white font-[normal]">{movie.totalSeasons}</span></p>

                                    </>
                                )}
                                <p>IMDB Rating : <span className="text-white font-[normal]">{movie.imdbRating}</span></p>
                                <p>IMDB Votes : <span className="text-white font-[normal]">{movie.imdbVotes}</span></p>
                                <p>Awards :  <span className="text-white font-[normal]">{movie.Awards}</span></p>
                                <p>Released : <span className="text-white font-[normal]">{movie.Released}</span></p>

                            </div>
                            <div className="mt-6">
                                <h2 className="text-xl font-semibold text-white mb-2">Plot</h2>
                                <p className="text-gray-300">{movie.Plot}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
