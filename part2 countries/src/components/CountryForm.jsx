const CountryForm = ({country, handleChange}) => {

  return (
    <form>
      <h2>
        Find countries
        <input value={country} onChange={handleChange}></input>
      </h2>
    </form>
  )

}

export default CountryForm