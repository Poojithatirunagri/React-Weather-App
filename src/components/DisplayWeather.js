import React from 'react'
import './displayweather.css'; 
function DisplayWeather(props){
    const {data}=props;
    console.log(data.dt);
    return (
            <div className= "displayweather">
             <div className="maincard">
                <span className="cardtitle">
                {data.name}.{data.sys.country}.weather
                </span>
                <span className="cardsubtitle">
                As of {new Date(data.dt * 1000).toLocaleString()} 
                </span>
                <h1>{Math.floor(data.main.temp-273.15)}
                <sup>o</sup>
                </h1>
                <span className="weather-main">{data.weather[0].main}</span>
             </div>
             <div className="weatherdetails">
                <div className="section1">
                    <table>
                        <tbody>
                            <tr>
                                <td>
                                    <h4>High/Low</h4>
                                </td>
                                <td>
                                    <span>
                                        {Math.floor(data.main.temp_max-273.15)}<sup>o</sup>C/{""}
                                        {Math.floor(data.main.temp_min-273.15)}<sup>o</sup>C
                                    </span>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <h4>Pressure</h4>
                                </td>
                                <td>
                                    <span>
                                        {data.main.pressure} hPa
                                    </span>
                                </td>
                            </tr><tr>
                                <td>
                                    <h4>Visibility</h4>
                                </td>
                                <td>
                                    <span>
                                    {data.visibility/1000} Km
                                    </span>
                                </td>
                            </tr>
                        </tbody>
                    </table>

                </div>

             </div>
            </div>
    );
}
export default DisplayWeather