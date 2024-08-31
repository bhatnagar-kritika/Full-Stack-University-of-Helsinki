import viewOneCountry from "./ViewOneCountry"
import Weather from "./Weather"


const DisplayCountry = ({searchResult, onShowCountry}) => {

  
  console.log('inDisplayCountry searchResult is',searchResult)
  // console.log('length',searchResult.length)


  if(searchResult.length===1) {
    return (
      <div>
          {searchResult.map(
          (filterCountry) => (
            <div key={filterCountry.name.common}>
              <h2>{filterCountry.name.common}</h2>
              <h3>Capital: {filterCountry.capital}</h3>
              Area: {filterCountry.area}
              Languages:             
              
              {filterCountry.languages && Object.values(filterCountry.languages).map((language,index) =>
              <li key={index}>
                {language}
              </li>
              )}
              <div>
                <img src={filterCountry.flags.png} alt={filterCountry.name} height="50%" width={"50%"}/>
              </div>

              <Weather capital={filterCountry.capital[0]} />
            </div>
          )
        )}
      </div>
    )
      
    }
  else if(searchResult.length>10) return <div> Too many matches, specify another filter</div>

  else {
    return (
      <div>
        {searchResult.map((filterCountry) => (
          <div key={filterCountry.name.common}>
              {filterCountry.name.common}
              <input type="button" value="show" onClick={() => onShowCountry(filterCountry)} />
          </div>
        ))}
      </div>
    )
  }

}

export default DisplayCountry