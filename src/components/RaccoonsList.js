import { useState } from 'react'
import RaccoonCard from './RaccoonCard'

const raccoons = [
  { id: 1, name: "Robert", favFood: "hamburgers" },
  { id: 2, name: "Rocket", favFood: "pizza" },
  { id: 3, name: "Rocky", favFood: "pizza" },
  { id: 4, name: "Red", favFood: "hamburgers" },
]

function RaccoonsList() {

  // we need a piece of state for what our select tag has chosen
  // we know our select tag CHANGES our raccoons list
  const [select, setSelect] = useState('all')
  
  // this function changes our select state based on what we selected
  function handleChange(e) {
    setSelect(e.target.value)
  }
  
  // use a ternary statement in case we have an option for 'all'
  const filteredRaccoons = select === 'all' // is the option all?
    ? 
    raccoons // if it is, just return the whole array
    : 
    raccoons.filter( raccoon => raccoon.favFood === select ) 
    // otherwise filter raccoons by their favorite food

    // HERE IS AN ALTERNATIVE USING THE OR STATEMENT
    // const filteredRaccoons = raccoons.filter( raccoon => select === 'all' || raccoon.favFood === select )

    // HERE IS AN ALTERNATIVE USING INCLUDES
    // const filteredRaccoons = raccoons.filter( raccoon => raccoon.favFood.includes(select))
  
  // once we filter our raccoons, map out our RaccoonCards
  const raccoonTags = filteredRaccoons.map( raccoon => {
    return <RaccoonCard name={raccoon.name} favFood={raccoon.favFood} />
    // the RaccoonCard needs props for name and favFood 
  })
  
  return (
    <div className="raccoons-list border-black">

      <h2>Raccoons</h2>

      <select onChange={handleChange}>
        <option value="all">Pick One</option>
        <option value="pizza">Pizza</option>
        <option value="hamburgers">Hamburgers</option>
      </select>

      <div className="flex">

        {/* once we hvae our filtered raccoonTags we can plug them in */}
        { raccoonTags }

      </div>

    </div>
  )
}

export default RaccoonsList
