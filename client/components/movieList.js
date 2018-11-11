import React from 'react'
import MovieRow from './movieRow'

export default (props) => {
  const {movieData} = props
  // console.log('movie',movieData)
  return (
    <table>
      <tbody>
        <tr>
          <th>Title</th>
          <th>Director(s)</th>
          <th>Producer(s)</th>
          <th>Release Date</th>
        </tr>
        {movieData.map((movie,index)=> <MovieRow key={index} movie={movie} />)}
      </tbody>
    </table>

  )
}
