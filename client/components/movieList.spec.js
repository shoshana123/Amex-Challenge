import {expect} from 'chai'
import React from 'react'
import enzyme, {shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import MovieList from './movieList'

const adapter = new Adapter()
enzyme.configure({adapter})

describe('MovieList', () => {
  let fakeData = [
    {
      "title": "The Empire Strikes Back",
      "director": "Irvin Kershner",
      "producer": "Gary Kurtz, Rick McCallum",
      "release_date": "1980-05-17",
      "episode_id" : '123134'
    }
  ]
  let currentCharacter = 'R2-D2'
  let movieList

  beforeEach(() => {
    movieList = shallow(<MovieList movieData={fakeData} currentCharacter={currentCharacter} />)
  })
  it('renders the film table header with the character name in an h1', () => {
    expect(movieList.find('h1').text()).to.be.equal('Film Details For R2-D2')
  })
  it('renders four column headers', () => {
    expect(movieList.find('th').length).to.be.equal(4)
  })

})
