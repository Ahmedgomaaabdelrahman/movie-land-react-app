import React, { useEffect, useState } from "react";
import './App.css';
import SearchIcon from './searchIcon.svg';
import MovieCard from "./Movie";
// API KEY
// 97f7a116

const API_URL = "http://www.omdbapi.com/?apikey=97f7a116";

const App = () => {

    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('')

    useEffect(() => {
        searchMovies('batman')
    } , [])


    const searchMovies = async(title) =>{
        console.log(title)
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        setMovies(data.Search)
    } 

    return (
        <div className="app">
            <h1> MovieLand </h1>
            <div className="search">
                <input value={searchTerm} placeholder="search for a movie" onInput={(e) =>  {setSearchTerm(e.target.value) ; searchMovies(searchTerm)} }/>
                <img src={SearchIcon} alt="Search" onClick={() => searchMovies(searchTerm)}/>
            </div>

            {
                movies?.length > 0 ? (
                    <div className="container">
                        {movies.map((movie) => (
                              <MovieCard movie={movie}/>
                        )
                        )}
                    </div>
                ) : (
                    <div className="empty">
                        <h3> There is no movies</h3>
                    </div>
                )
            }
           
        </div>
    )
}

export default App; 