import { useState } from 'react'
import StateCard from "./StateCard"

const stateNames = [
  "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming", "District of Columbia", "American Samoa", "Guam", "Northern Mariana Islands", "Puerto Rico", "U.S. Virgin Islands"
]

function StatesList(props) {

  // our search input will CHANGE so we create a state called 'search'
  // this tracks what we just typed in to our search bar
  const [search, setSearch] = useState('')

  // this just sets the search state when we type something in
  function handleChange(e) {
    setSearch(e.target.value)
  }

  // our states are already strings so we can just call .toLowerCase and .includes
  // the .includes checks to see if what we typed in (search) is inside the string w're checking (state)
  const nameSearch = stateNames.filter( state => state.toLowerCase().includes( search.toLowerCase() ) )

  // once again we map the filtered states into cards and pass the name as a string as a prop
  const stateTags = nameSearch.map( name => <StateCard stateName={name} /> )

  return (
    <div className="states-list border-black">

      <h2>U.S. States</h2>

      <label>Filter States:</label>
      <input type="text" onChange={handleChange} />

      <div className="flex">

        {/* and finally we plug them in! */}
        { stateTags }

      </div>

    </div>
  )
}

export default StatesList
