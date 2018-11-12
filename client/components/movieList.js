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

// function sortTable() {
//   let table, rows, switching, i, x, y, shouldSwitch;

//   // check which table to sort
//   table = document.getElementById('table')
//   switching = true;
//   while (switching) {
//     switching = false;
//     rows = table.rows;

//     // loop through all the rows
//     for(let i  = 0; i < rows.length -1; i++){
//       shouldSwitch = false;

//       // Get the 2 elements to compare between row1 and row2 (quantity or percent for holdings and account type tables respectively)
//       let j = tableType === 'accountType' ? 2 : 4
//       let row1 = rows[i].getElementsByTagName("td")[j];
//       let row2 = rows[i + 1].getElementsByTagName("td")[j];

//       // Check if the two rows should switch place:
//       if (tableType==='accountType' && +row1.innerHTML.slice(0,-1) < +row2.innerHTML.slice(0,-1) || tableType==='holdings' && +row1.innerHTML < +row2.innerHTML) {

//         // If so switch:
//           rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
//           switching = true;
//       }
//     }
//   }
// }
