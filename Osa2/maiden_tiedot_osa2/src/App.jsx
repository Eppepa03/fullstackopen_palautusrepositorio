import { useEffect, useState } from 'react'
import Countries from './components/Countries'
import Filter from './components/Filter'
import countryService from "./services/countries"
import weatherService from './services/weather'

const App = (props) => {
  const[countries, setCountries] = useState([])
  const [currentCountry, setCurrentCountry] = useState([])
  const [currentWeather, setCurrentWeather] = useState()
  const [filter, setFilter] = useState("")
  const [showAll, setShowAll] = useState(true)

  useEffect(() => {
    countryService
      .getAll()
      .then(allCountries => {
        setCountries(allCountries)
      })
  }, [])

  const showCountry = (name, latlng) => {
    console.log("show country", name)
    console.log("latlng", latlng)
    
    weatherService
      .getWeather(latlng[0], latlng[1])
      .then(currentWeather => {
        setCurrentWeather(currentWeather)
        countryService
          .getByName(name)
          .then(nextCountry => {
            setCurrentCountry(nextCountry)
            setShowAll(false)
          })
      })    
  }

  const getFilteredCountries = () => {
    const filteredCountries = countries.filter(country =>
      country.name.common.toLowerCase().includes(filter.toLowerCase())
    )
    if (showAll && filteredCountries.length === 1){
      showCountry(filteredCountries[0].name.common, filteredCountries[0].latlng)
    } 
    return(filteredCountries)
  }

  const filteredCountries = getFilteredCountries()

  const countriesToShow = showAll
    ? filteredCountries
    : currentCountry
  
  const weatherToShow = showAll
    ? undefined
    : currentWeather

  const handleFilterChange = (event) => {
    const nextFilter = event.target.value
    setFilter(nextFilter)
    const nextFilteredCountries = countries.filter(country =>
      country.name.common.toLowerCase().includes(nextFilter.toLowerCase())
    )

    if (nextFilteredCountries.length > 1) {
      setShowAll(true)
    }  
  }

  return(
    <div>
      <Filter filterHandle={handleFilterChange}/>
      <Countries
        countries={countriesToShow}
        weather={weatherToShow}
        showAll={showAll}
        showCountry={showCountry}
      />
    </div>
  )
}

export default App
