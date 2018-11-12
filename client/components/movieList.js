import React from 'react'
import MovieRow from './movieRow'

export default (props) => {
  const {movieData, currentCharacter} = props
  if(!movieData.length) return (<div id='loaderContainer'><div className='loader'></div></div>)
  else return(
    <div>
    <h1>Film Details For {currentCharacter}</h1>
    <table className='table'>
      <tbody>
        <tr>
          <th id='movieListTitle'>Title</th>
          <th id='movieListDirector'>Director(s)</th>
          <th id='movieListProducer'>Producer(s)</th>
          <th id='movieListReleaseDate'>Release Date</th>
        </tr>
        {movieData.map((movie,index)=> <MovieRow key={index} movie={movie} />)}
      </tbody>
    </table>
  </div>
  )
}
