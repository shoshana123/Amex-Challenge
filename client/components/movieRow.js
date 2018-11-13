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


function formatDate (releaseDate) {
  const monthConverter = {
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
  const dayConverter = {
    '0' : 'Sunday',
    '1' : 'Monday',
    '2' : 'Tuesday',
    '3' : 'Wednesday',
    '4' : 'Thursday',
    '5' : 'Friday',
    '6' : 'Saturday'
  }
  const dayOfWeek = dayConverter[new Date(releaseDate).getUTCDay()]
  const releaseDateArray = releaseDate.split('-')
  return `${dayOfWeek}, ${monthConverter[releaseDateArray[1]]} ${releaseDateArray[2]}, ${releaseDateArray[0]}`
}
