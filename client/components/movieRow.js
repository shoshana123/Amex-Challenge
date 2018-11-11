import React from 'react'

export default (props) => {
  const {movie} = props
  return (
    <tr>
      <td>{movie.title}</td>
      <td>{movie.director}</td>
      <td>{movie.producer}</td>
      <td>{movie.release_date}</td>
    </tr>
  )
}
