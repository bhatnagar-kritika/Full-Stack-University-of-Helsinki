import Weather from "./Weather"

const ViewOneCountry = ({country}) => {
  console.log('inside viewOneCountry country is:',country)
  if(!country || Object.keys(country).length===0)
  {
    return null

  }

  

return(
  <div>
    <h2>{country.name.common}</h2>
    <h3>Capital: {country.capital}</h3>
    <p>Area:{country.area}</p>
    <p>Languages:</p>

    <ul>
    {country.languages&&Object.values(country.languages).map((language,index) =>
      (
        <li key={index}>
            {language}
        </li>
      )
    )}
    </ul>
   

    
      <div>
        <img src={country.flags.png} alt={country.name} height="50%" width={"50%"} />
      </div>

      <Weather capital={country.capital[0]} />
  </div>
  
)

}

export default ViewOneCountry