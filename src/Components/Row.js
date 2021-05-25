import React, { useState, useEffect } from 'react'
import axios from '../axios'
import './Row.css'
import YouTube from 'react-youtube'
import movieTrailer from 'movie-trailer'

const baseUrl = 'https://image.tmdb.org/t/p/original/'

function Row (props) {
  // State for short term memory storage it gone after refresh
  const [movies, setMovies] = useState([])
  const [trailerUrl, setTrailerUrl] = useState('')
  // A snippet of code which runs based on a specific condition/variables

  useEffect(() => {
    //if [], is blank run once when the row loads and dont run again
    async function fetchData () {
      const request = await axios.get(props.fetchUrl)
      setMovies(request.data.results)
      return request
    }
    fetchData()
  }, [props.fetchUrl])

  const opts = {
    height: '380',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1
    }
  }

  const handleClick = movie => {
    if (trailerUrl) {
      setTrailerUrl('')
    } else {
      movieTrailer(movie?.name || '')
        .then(url => {
          // https://www.youtube.com/watch?v=XT8QWLCLJSL
          const urlParams = new URLSearchParams(new URL(url).search)
          console.log(urlParams);
          setTrailerUrl(urlParams.get('v'))
        })
        .catch(err => {
          console.log(err)
        })
    }
  }

  return (
    <div className='row'>
      {/* title */}
      <h2>{props.title}</h2>
      <div className='row__posters'>
        {movies.map(movie => (
          <img
            key={movie.id}
            onClick={() => handleClick(movie)}
            className={`row__poster ${props.isLargeRow && 'row_posterLarge'}`}
            src={`${baseUrl}${
              props.isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  )
}

export default Row
