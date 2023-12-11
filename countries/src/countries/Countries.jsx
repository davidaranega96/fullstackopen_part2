import { useState } from "react"
import Detailed from './Detailed'

const Country = ({ country }) => {
    const [show, setShow] = useState(false)

    if (show) {
        return (
        <div>
            <Detailed.DetailedCountry country={country}/>
            <button onClick={() => setShow(!show)}>Hide</button>
        </div>
    )
    }

    else {
        return (
            <div>
                {country} <button onClick={() => setShow(!show)}>show</button>
            </div>
        )
    }
}


const CountryList = ({ countries }) => {
    return (
        <div>
            <ul>
                {countries.map((country, index) => (
                    <Country key={index} country={country}/>
                ))}
            </ul>
        </div>
    )
}


const CountrySearchResult = ({ countries }) => {
    console.log(countries)
    if (countries.length > 10) {
        return (
            <div>Too many countries, speciffy the filter</div>
        )
    }
    else if (countries.length > 1) {
        return (
            <CountryList countries={countries}/>
        )
    }
    else if (countries.length == 1) {
        return (
            <Country country={countries[0]} />
        )
    }

}
export default {CountrySearchResult}
