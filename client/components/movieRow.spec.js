import {expect} from 'chai'
import React from 'react'
import enzyme, {shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import MovieRow from './movieRow'

const adapter = new Adapter()
enzyme.configure({adapter})

describe('MovieRow', () => {
  let movie = {
      "title": "The Empire Strikes Back",
      "director": "Irvin Kershner",
      "producer": "Gary Kurtz, Rick McCallum",
      "release_date": "1980-05-17"
  }
  let movieRow
  let index = 0

  beforeEach(() => {
    movieRow = shallow(<MovieRow key={index} movie={movie}/>)
  })

  it('renders the four different row elements', () => {
    expect(movieRow.find('td').length).to.be.equal(4)
  })

  it('renders the title in a td element', () => {
    expect(movieRow.find('td').getElements()[0].props.children).to.be.equal('The Empire Strikes Back')
  })

  it ('renders the correctly formatted release date', () => {
    expect(movieRow.find('td').getElements()[3].props.children).to.be.equal('Saturday, May 17, 1980')})

  })
