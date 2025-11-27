import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import MovieDetails from "../components/MovieDetails";


export default function CustomRoutes() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/movie/:id' element={<MovieDetails />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}