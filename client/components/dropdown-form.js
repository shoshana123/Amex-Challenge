import React, {Component} from 'react'
import axios from 'axios'
import MovieList from './movieList'

export default class DropDownForm extends Component {
  constructor(props){
    super()
    this.state= {
      selectedCharacter: '',
      filmsData: []
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange(event) {
    this.setState({
      selectedCharacter: event.target.value
    })
    console.log('stateCheck!',this.state)
  }
  async handleSubmit(event) {
    event.preventDefault()
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
    console.log('FILS',filmsData)
    if(this.state.filmsData.length) this.setState({
      filmsData:[]
    })
    this.setState({
      filmsData
    })
    this.setState({
      selectedCharacter: ''
    })

    // console.log('TEST',filmsData)
  }
  render() {


const {characters} = this.props
return (
    <div id='container'>
    <div id='selectCharacterForm'>
    <div>

    <label>
      Pick Your Favorite Star Wars Character:
      </label>
    </div>
      <div>
    <form onSubmit={this.handleSubmit}>

    <select value={this.state.selectedCharacter} onChange={this.handleChange}>
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
    <MovieList movieData={this.state.filmsData} />
    </div>
    </div>
)
}
}
