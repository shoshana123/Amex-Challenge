import React, {Component} from 'react'
import axios from 'axios'
import MovieList from './movieList'

export default class DropDownForm extends Component {
  constructor(props){
    super()
    this.state= {
      selectedCharacter: '',
      filmsData: [],
      currentCharacterForFilms: '',
      axiosRequest: false,
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange(event) {
    this.setState({
      selectedCharacter: event.target.value
    })
  }
  async handleSubmit(event) {
    event.preventDefault()
    this.setState({
      axiosRequest: true
    })
    const currentCharacterForFilms=this.state.selectedCharacter
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
    this.setState({
      filmsData,
      currentCharacterForFilms,
      axiosRequest: false
    })
    this.setState({
      selectedCharacter: ''
    })
  }
  render() {


const {characters} = this.props
return (
    <div id='container'>
    <div id='selectCharacterForm'>
    <div>
      <h1>
    <label>
      Select Your Favorite Star Wars Character:
      </label>
      </h1>
    </div>
      <div>
    <form onSubmit={this.handleSubmit}>

    <select className="form-control" data-style="btn-info" value={this.state.selectedCharacter} onChange={this.handleChange}>
      <option value='--'>--</option>
      {characters.map((character, index) => {
        return (
            <option value={character.name} key={index} >{character.name}</option>
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
    <MovieList movieData={this.state.filmsData} currentCharacter={this.state.currentCharacterForFilms}/>
  }
  </div>
  </div>
)
}
}
