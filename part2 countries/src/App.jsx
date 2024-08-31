import { useState, useEffect } from 'react'
import axios from 'axios'
import CountryForm from './components/CountryForm'
import CountryService from './services/CountryService'
import DisplayCountry from './components/DisplayCountry'
import ViewOneCountry from './components/ViewOneCountry'
    
const App = () => {
  const [country, setCountry] = useState('')
  const [countrySourceData, setCountrySourceData] = useState([])
  const [searchResult, setSearchResult] = useState([])
  const [selectedCountry, setselectedCountry] = useState([])


  useEffect(() => {
    CountryService.getAll()
      .then(allData => {
        console.log('data received:',allData) //go through data to know the names of the fields in the api 
        setCountrySourceData(allData)
      })
      .catch(error => {
        console.error("Failed to fetch country data:", error)
      })
  }, [])

  const handleChange = (event) => {
    
    const searchCountry = event.target.value
    setCountry(searchCountry)
    console.log('coutry to be searched:',searchCountry)

    if(searchCountry!=='') {
      const afterFilter = countrySourceData.filter(
        country => country.name.common.toLowerCase().includes(searchCountry.toLowerCase())
      )
      setSearchResult(afterFilter)
    }
    else{
      setSearchResult([])
      setselectedCountry(null)
    }
   
  }

  const handleShowCountry = (country) => {
    console.log('in handleshow country',country)
    setselectedCountry(country)
  }

  return (
    <>
      <CountryForm handleChange={handleChange} />

      <DisplayCountry searchResult={searchResult} onShowCountry={handleShowCountry} />

      {selectedCountry
        ?( <ViewOneCountry country= {selectedCountry} />)
        :(<DisplayCountry searchResult={searchResult} onShowCountry={handleShowCountry}/>)
      }

      
      
    </>
  )
}

export default App
