import React, { useState } from "react";
import { AddInfo } from "./Addinfo"

export const FormSubmit = () => {
    const [city, setCity] = useState("");
    const [country, setCountry] = useState("");
    const [weather, setWeather] = useState({});


    const getCityValue = (e) => {
        setCity(e.target.value);       
    }
    const getCountryValue = (e) => {
        setCountry(e.target.value);
    }
    const APIKEY = "e6d2f6f7a2cc8b41b0ad47d1ede36fa9"
    async function weatherData(e) {
        e.preventDefault();

            if (city === "") {
                alert("Add values");
            } else {

                const data = await fetch(
                    `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${APIKEY}`
                )
                    .then((res) => res.json())
                    .then((data) => data);
          setWeather({data: data});
        }
      }
    return (
        <>
            <h1>Weather App</h1>
            <form onSubmit={weatherData}>
                <input
                    type="text"
                    placeholder="city"
                    value={city}
                    onChange={getCityValue}
                />
                <input
                    type="text"
                    placeholder="country"
                    value={country}
                    onChange={getCountryValue}
                />
                <button type="submit">Submit</button>
            </form>

            { Object.keys(weather).length !== 0 &&
               <AddInfo data = {weather} />
            }

        </>
    )
}