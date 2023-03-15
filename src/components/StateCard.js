function StateCard({ stateName }) {
  // because we called it 'stateName' when we pass the prop in the parent, we have to call it 'stateName inside the child component
  // if we had called it 'hamburger' in the parent we'd call it 'hamburger' here
  return (
    <span className="border-black">{ stateName }</span>
  )
}

export default StateCard
