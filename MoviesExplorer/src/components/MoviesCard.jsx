import { Link } from "react-router-dom";

export default function MoviesCard({ movie }) {
    return (
        <>
            <div className="min-h-[634px] bg-[#191919] p-4 rounded-xl flex flex-col items-start gap-4">
                <img className="overflow-hidden object-cover w-full h-auto rounded-md" src={movie.Poster} alt={movie.Title} width={300} height={300} />
                <div className="flex flex-col items-start gap-2">
                    <h2 className="text-white font-bold text-xl">{movie.Title}</h2>
                    <p> Type : {movie.Type}</p>
                    <div className="flex items-center gap-3">
                        <p> Year : {movie.Year}</p>
                        <Link to={`/movie/${movie.imdbID}`} className="text-blue-400 font-semibold">More Details</Link>
                    </div>

                </div>
            </div>

        </>
    )
}