const FilterName = ({searchName, FilterPerson}) => {
  (console.log('inside FilterName file'))
  return (
    <div>
      Filter shown with: <input value={searchName} onChange={FilterPerson}/>
    </div>
  )
}

export default FilterName