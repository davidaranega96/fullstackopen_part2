import { useState, useEffect } from 'react'
import countriesService from './countries/service'
import SearchCountry from './Search'
import Countries from './countries/Countries'

const App = () => {
  const [countries, setCountries] = useState([])
  const [searchCuntry, setSearchCounrty] = useState("")

  useEffect(() => {
    countriesService.getAll()
    .then(
      response => {
        const countryNames = response.data.map(country => country.name.common)
        setCountries(countryNames)
    })
  }, [])

  const handleSearchCountryChange = (event) => {
    setSearchCounrty(event.target.value)
    console.log(searchCuntry)
  }
  console.log("Countries", countries)

  return (
    <>
      <SearchCountry onchange={handleSearchCountryChange} />
      <Countries.CountrySearchResult countries={
        countries.filter(
          country=>(
            country.toLowerCase().includes(searchCuntry.toLowerCase())))
        }/>
    </>
  )
}

export default App
