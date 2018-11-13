import React, {Component} from 'react'
import axios from 'axios'
import CharactersData from './data/characters.json'
import DropDownFrom from './components/dropdown-form'

class App extends Component {
  constructor(){
    super()
    this.state = {
      characters: []
    }
  }
  async componentDidMount() {
    let characterArrayPromises = CharactersData.characters.map(character => {
      try{
        return axios.get(character.url).catch(err=> err)
      } catch (err){
        return null
      }

    })

    let characterArray = await Promise.all(characterArrayPromises)
    characterArray = characterArray.filter(character=>!!character.data === true)
    characterArray = characterArray.map(character => character.data)
    this.setState({
      characters: characterArray
    })
  }

  render() {
    return (
      <div>
        <DropDownFrom characters={this.state.characters} />
      </div>
    )
  }
}

export default App
