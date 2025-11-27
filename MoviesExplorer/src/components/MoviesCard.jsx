import { Link } from "react-router-dom";
import NoPreview from "../assets/no-preview.png";

export default function MoviesCard({ movie }) {
    return (
        <>
            <div className="min-h-[634px] bg-[#191919] p-4 rounded-xl flex flex-col items-start gap-4">
                <img className="overflow-hidden object-cover w-full h-auto rounded-md" src={movie.Poster !== "N/A" ? movie.Poster : NoPreview} alt={movie.Title} width={300} height={300} loading="lazy" />
                <div className="flex flex-col items-start gap-2">
                    <h2 className="text-white font-bold text-xl">{movie.Title}</h2>
                    <p> Type : {movie.Type}</p>
                    <div className="flex items-center gap-3">
                        <p> Year : {movie.Year}</p>
                        <Link to={`/movie/${movie.imdbID}`} className="text-blue-400 font-semibold p-1.5 border border-white rounded-md ">More Details</Link>
                    </div>

                </div>
            </div>

        </>
    )
}