import { useState, useEffect } from "react";
import countriesService from "./service"
import weather from "../weather/Weather"

const DetailedCountry = ({ country }) => {
    const [fetchedCountry, setfetchedCountry]= useState(null)

    useEffect(() => {
        const fetchCountry = async () => {
            try {
            const response = await countriesService.getCountry(country);
            const result = await response.data;
            setfetchedCountry(result);
            }
            catch (error) {
                console.log("Error fetching single country", error)
            }
        }
        fetchCountry();
    }, [country]);


    if (!fetchedCountry) {
        return null
    }

    return (
        <div>
            <h1>{fetchedCountry.name.common}</h1>
            capital {fetchedCountry.capital[0]}<br/>
            area {fetchedCountry.area}<br/>
            <h2>languages:</h2>
            <Languages languages={fetchedCountry.languages}/>
            <img src={fetchedCountry.flags.png} alt={fetchedCountry.flags.alt}></img><br></br>
            <weather.Weather capital={fetchedCountry.capital[0]} />
        </div>
    )
}

const Languages = ({ languages }) => {
    return (
        <ul>
            {Object.values(languages).map((language, index) => (
                <li key={index}>{language}</li>
            ))}
        </ul>
    )
}

export default { DetailedCountry }