import React, {Component} from 'react'
import axios from 'axios'
import {Navbar} from './components'
import Routes from './routes'
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

    // for(let i = 0; i < characterArray.length; i++) {
    //   for (let j = 0; j < characterArray[i].films.length; j++) {
    //     try{
    //       let filmObj = await axios.get(characterArray[i].films[j])
    //       .catch(err => err)

    //       characterArray[i].films[j] = filmObj.data

    //   } catch (err){
    //     return null
    //   }

    //   }
    // }

    this.setState({
      characters: characterArray
    })
  }

  render() {

    console.log('state',this.state)

    return (
      <div>
        <Routes />
        <DropDownFrom characters={this.state.characters} />
      </div>
    )
  }
}

export default App
