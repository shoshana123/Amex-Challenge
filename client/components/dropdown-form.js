import React from 'react'

export default (props)=> {
const {characters} = props
return (
    <form>
    <label>
      Pick Your Favorite Star Wars Character:
    <select>
      <option value='--'>--</option>
      {characters.map((character, index) => {
        return (
            <option value={character.name} key={index}>{character.name}</option>
        )
      })}
    </select>
    </label>
    </form>
)
}
