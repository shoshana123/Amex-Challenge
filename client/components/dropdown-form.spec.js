/* global describe beforeEach it */

import {expect} from 'chai'
import React from 'react'
import enzyme, {shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import DropDownForm from './dropdown-form'
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'

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

    let fakeDataArray = Object.values(fakeData[0])
    console.log('check',fakeDataArray)

  beforeEach(() => {
    DropDown = shallow(<DropDownForm characters={fakeData} />)
  })

  it('renders all of the character options including the initial blank option', () => {
    expect(DropDown.find('option').length).to.be.equal(3)
  })

  // it('renders the character name', () => {
  //   console.log('!!!',DropDown.find('select').props().children)
  //   expect(DropDown.find('option').value).to.be.equal('R2-D2')
  // })

  // it('makes an axios request to get the characters', () => {
  //   const mockAxios = new MockAdapter(axios)
  //   mockAxios.onGet('https://swapi.co/api/people/1/').replyOnce(200, fakeData[0])
  //   console.log('test!!',expect(axios.get('https://swapi.co/api/people/1/')
  //   .then((response) => response.data.name)
  //   .catch((err) => console.error(err))))
  //   expect(axios.get('https://swapi.co/api/people/1/')
  //     .then((response) => response.data.name)).to.be.equal('Luke Skywalker')
  // })
})
