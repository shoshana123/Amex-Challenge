import React, {Component} from 'react'
import axios from 'axios'
import {Navbar} from './components'
import Routes from './routes'
import Characters from './data/characters.json'

class App extends Component {
  constructor(){
    super()
    this.state = {
      characters: []
    }
  }
  async componentDidMount() {
    // console.log('characters',Characters.characters)
    let characterArray = []
    Characters.characters.map(async character=>{
      try{
        const {data} = await axios.get(character.url)
        try{
          await data.films.map(async film => {
            const filmObject = await axios.get(film)
            // console.log('filmObj',filmObject.data)
            return filmObject.data
          })
          await console.log('data',data.films)
        } catch (err){
          console.error(err)
        }
        await console.log('fiml',data.films)
        return {
          name: character.name,
          data: characterArray.push(data)
        }
      } catch (err) {
        console.error(err)
      }

    })
    // console.log('character,',characterArray)
    // const {data} = await axios.get('https://swapi.co/api/people')
    // console.log('data',data.results)
  }

  render() {
    return (
      <div>
        <Navbar />
        <Routes />
      </div>
    )
  }
}

export default App
