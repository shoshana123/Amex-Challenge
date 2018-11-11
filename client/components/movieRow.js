import React from 'react'

export default (props) => {
  const {movie, index} = props

  return (
    <tr key={index}>
      <td>{movie.title}</td>
      <td>{movie.director}</td>
      <td>{movie.producer}</td>
      <td>{formatDate(movie.release_date)}</td>
    </tr>
  )
}


function formatDate (movieData) {
  let monthConverter = {
    '01' : 'January',
    '02' : 'February',
    '03' : 'March',
    '04' : 'April',
    '05' : 'May',
    '06' : 'June',
    '07' : 'July',
    '08' : 'August',
    '09' : 'September',
    '10' : 'October',
    '11' : 'November',
    '12' : 'December'
  }
  const movieDataArray = movieData.split('-')
  return `${monthConverter[movieDataArray[1]]} ${movieDataArray[2]}, ${movieDataArray[0]}`
}
