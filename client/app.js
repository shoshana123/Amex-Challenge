import React, {Component} from 'react'
import axios from 'axios'
import {Navbar} from './components'
import Routes from './routes'
import CharactersData from './data/characters.json'

class App extends Component {
  constructor(){
    super()
    this.state = {
      characters: []
    }
  }
  async componentDidMount() {
    // console.log('characters',Characters.characters)
    let characterArrayPromises = CharactersData.characters.map(character => {
      try{
        return axios.get(character.url).catch(err=>err)
      } catch (err){
        return null
      }

    })

    let characterArray = await Promise.all(characterArrayPromises)
    characterArray = characterArray.filter(character=>!!character.data===true)

    // characterArray.map(character => character.data)
    for(let i = 0; i < characterArray.length; i++) {
      console.log('character',characterArray[i])
      for (let j = 0; j < characterArray[i].data.films.length; j++) {
        let filmObj = await axios.get(characterArray[i].data.films[j])
        console.log('filmObj',filmObj)
      }
    }
      // return (character.films.map(async film => {
      //   const {data} = await axios.get(film)
      //   console.log('data',data)
      //   return data
      // }))

    this.setState({
      characters: characterArray
    })

    //  console.log('charactersdata',state)
    // try{
    //   await data.films.map(async film => {
    //     const filmObject = await axios.get(film)
    //     // console.log('filmObj',filmObject.data)
    //     return filmObject.data
    //   })
    //   console.log('data',data.films)
    // } catch (err){
    //   console.error(err)
    // }
  }

  render() {

    console.log('state',this.state.characters)

    return (
      <div>
        <Navbar />
        <Routes />
      </div>
    )
  }
}

export default App
