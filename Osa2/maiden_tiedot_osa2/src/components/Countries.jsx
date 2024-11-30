const Country = ({country, weather}) => {
    console.log("country", country)
    console.log("weather", weather)
    
    return(
        <div>
            <h1>{country.name.common}</h1>
            <p>capital {country.capital}</p>
            <p>area {country.area}</p>
            <h3>languages:</h3>
            <ul>
                {
                Object.values(country.languages).map(language =>
                    <li key={language}>{language}</li>
                )
                }
            </ul>
            <img src={country.flags.png} alt={country.flags.alt}/>
            <h2>Weather in {country.capital}</h2>
            <p>temperature {weather.main.temp} Celsius</p>
            <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}/>
            <p>wind {weather.wind.speed} m/s</p>
        </div>
    )
}

const Countries = ({ countries, weather, showAll, showCountry }) => {
    console.log("countriesToShow", countries, "showAll", showAll)

    if (countries.length > 10) {
        return(
            <p>Too many matches, specify another filter</p>
        )
    } else if (!showAll) {
        console.log("one country", countries)
        return(
            <Country 
                country={countries}
                weather={weather}
            />
        )
    } else {
        console.log("filtered countries", countries)
        const filteredCountries  = countries.map(country =>
            <div key={country.name.common}>
                {country.name.common}
                <button onClick={() => showCountry(country.name.common, country.latlng)}>show</button>
            </div>
        )

        return(filteredCountries)
    }
}

export default Countries