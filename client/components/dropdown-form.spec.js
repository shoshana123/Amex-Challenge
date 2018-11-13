import {expect} from 'chai'
import React from 'react'
import enzyme, {shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import DropDownForm from './dropdown-form'

const adapter = new Adapter()
enzyme.configure({adapter})

describe('DropDown Form', () => {
  let DropDown
  let fakeData = [
    {
      "name": "Luke Skywalker",
      "url": "https://swapi.co/api/people/1/"
    },
    {
      "name": "Darth Vader",
      "url": "https://swapi.co/api/people/4/"
    }]

  beforeEach(() => {
    DropDown = shallow(<DropDownForm characters={fakeData} />)
  })

  it('renders the select form', () => {
    expect(DropDown.find('select').length).to.be.equal(1)
  })

  it('renders all of the character options including the initial blank option', () => {
    expect(DropDown.find('option').length).to.be.equal(3)
  })

})
