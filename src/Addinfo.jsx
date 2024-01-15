import React from "react";

export const AddInfo = (data) => {
        const currentWeather = data.data.data;
        let currentdate = new Date();
        let sunrise = currentWeather.sys.sunrise;
        console.log(currentWeather)
        console.log(currentdate)
    return(
        <>
            <div className="center-div">
               <p className="center-div-country">{currentWeather.name}, {currentWeather.sys.country}. Weather</p>
                <p className="time">As of {currentdate.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true })}</p>
               <div className="clouds">
                    <div className="temp">{Math.round(currentWeather.main.temp - 273.15)}<sup>0</sup></div>
                    <div className="clouds"> {currentWeather.weather[0].main}  </div>
               </div>
                <p className="weader-description">{currentWeather.weather[0].description}</p>
            </div>
            <div className="description">
                <div>
                    <div className="row">
                        <p className="text"><strong>High/Low</strong></p>
                        <p className="desc">{Math.round(currentWeather.main.temp_max - 273.15)}/{Math.round(currentWeather.main.temp_min - 273.15)}</p>
                    </div>
                    <div className="row">
                        <p className="text"><strong>Wind</strong></p>
                        <p className="desc">{currentWeather.wind.speed} km/hr</p>
                    </div>

                </div>
                <div>
                    <div className="row">
                        <p className="text"><strong>Humidity</strong></p>
                        <p className="desc">{currentWeather.main.humidity} %</p>
                    </div>
                    <div className="row">
                        <p className="text"><strong>Wind Direction</strong></p>
                        <p className="desc">{currentWeather.wind.deg}<sup>o</sup> deg</p>
                    </div>
                </div>
                <div>
                    <div className="row">
                        <p className="text"><strong>Pressure</strong></p>
                        <p className="desc">{currentWeather.main.pressure} hPa</p>
                    </div>
                    <div className="row">
                        <p className="text"><strong>Sunrise</strong></p>
                        <p className="desc">{currentWeather.sys.sunrise.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true })}</p>
                    </div>
                </div>
                <div>
                    <div className="row">
                        <p className="text"><strong>Visibility</strong></p>
                        <p className="desc">{currentWeather.visibility / 1000} Km</p>
                    </div>
                    <div className="row">
                        <p className="text"><strong>Sunset</strong></p>
                        <p className="desc">{currentWeather.sys.sunset.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true })}</p>
                    </div>
                </div>
            </div>
        </>

    )
}