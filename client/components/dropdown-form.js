import React, {Component} from 'react'
import axios from 'axios'
import MovieList from './movieList'

export default class DropDownForm extends Component {
  constructor(props){
    super()
    this.state= {
      selectedCharacter: '',
      filmsData: [],
      characterNameForFilmsHeader: '',
      axiosRequest: false,
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    // set the state with the selected character from the dropdown
    this.setState({
      selectedCharacter: event.target.value
    })
  }

  async handleSubmit(event) {
    event.preventDefault()

    // make axios request and set the state accordingly for the condition for the loading bar
    this.setState({
      axiosRequest: true
    })
    const selectedCharacterData = this.props.characters.filter(character=>character.name===this.state.selectedCharacter)[0]
    let selectedCharacterFilmsArrayPromises = selectedCharacterData.films.map(film => {
      try {
        return axios.get(film)
        .catch(err=>err)
      } catch (err) {
        return null
      }
    })
    let filmsData = await Promise.all(selectedCharacterFilmsArrayPromises)
    filmsData = filmsData.map(film=>film.data)
    if(this.state.filmsData.length) this.setState({
      filmsData:[]
    })

    // set the state with the data and set axios request to false to stop the loading bar
    // to avoid the character name currently rendered in "Film Details for ${characterName}' header changing prior to loading new data, update the characterNameForFilmsHeader
    this.setState({
      filmsData,
      characterNameForFilmsHeader: this.state.selectedCharacter,
      axiosRequest: false
    })
  }

  render() {
    const {characters} = this.props
    return (
        <div id='container'>
          <div id='selectCharacterForm'>
            <div>
              <h1>
                <label>Select Your Favorite Star Wars Character:</label>
              </h1>
            </div>
            <div>
             <form onSubmit={this.handleSubmit}>
              <select className="form-control" data-style="btn-info" value={this.state.selectedCharacter} onChange={this.handleChange}>
                <option value='--'>--</option>
                {characters.map((character) => {
                  return (
                      <option value={character.name} key={character.name} >{character.name}</option>
                  )
                })}
              </select>
              <div>
                <input className="btn btn-primary" type="submit" value="Submit" />
              </div>
             </form>
            </div>
          </div>
          <div id='movieTable'>
            {this.state.axiosRequest ? <div id='loaderContainer'><div className='loader'></div></div> :
            <MovieList movieData={this.state.filmsData} currentCharacter={this.state.characterNameForFilmsHeader}/>
            }
          </div>
        </div>
      )
   }
}
