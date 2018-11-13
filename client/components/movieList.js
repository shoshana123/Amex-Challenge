import React from 'react'
import MovieRow from './movieRow'

export default (props) => {
  const {movieData, currentCharacter} = props
  if(!movieData.length) return ('')
  else return(
    <div>
      <h1>Film Details For {currentCharacter}</h1>
      <table className='table'>
        <thead>
          <tr>
            <th id='movieListTitle'>Title</th>
            <th id='movieListDirector'>Director(s)</th>
            <th id='movieListProducer'>Producer(s)</th>
            <th id='movieListReleaseDate'>Release Date</th>
          </tr>
        </thead>
        <tbody>
          {movieData.map((movie)=> <MovieRow key={movie.episode_id} movie={movie} />)}
        </tbody>
      </table>
  </div>
  )
}
