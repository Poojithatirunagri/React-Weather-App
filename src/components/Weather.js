import React from 'react';
import "./weather.css";
import { useState } from 'react';
import DisplayWeather from  './DisplayWeather';
// Ref : https://openweathermap.org/current

function Weather() {
    const APIKEY="d8bd4cfc99ac10ba2f2d229e28626bfa";
    const [form, setForm] = useState({
        city:""
    });
    const[weather, setWeather]=useState({});

    async function weatherData(e){
 
        e.preventDefault();
        if(form.city===""){
            alert("Add values")
        }
        else{
            const Data=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${form.city}&appid=${APIKEY}`
            ).then((res) => {return res.json()})
             .catch((err) => console.log(err));
            
            console.log(Data);
            setWeather({
                data : Data
            });
        }
    }
    const handleChange = (e) =>{
        let name = e.target.name;
        let value = e.target.value;
        if (name==="city"){
            setForm({...form, city:value})
        }
    }
    return (
        <div className= "weather"> 
            <span className= "title">Weather App</span>
            <form>
                <input type="text" 
                name="city" 
                placeholder="City" 
                onChange={(e)=>{handleChange(e)}}/>

                <button className="getweather" onClick={e => weatherData(e)}>Submit</button>
            </form>
            {
                weather.data!==undefined?
                <div>
                    <DisplayWeather data={weather.data}/>
                </div>
                :null
            }
        </div>
    
    );
}
 

export default Weather  