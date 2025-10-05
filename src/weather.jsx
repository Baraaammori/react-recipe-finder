import {useEffect , useState} from "react";
import "./weather.css";


function WeatherApp(){

    const[choice , setChoice] = useState("");
    const[weather , setWeather] = useState();
    const [loading , setLoading] = useState(false)
    const apiKey = "966ed59e84ae2199a1362ff706f74577"



    function handleChange(event){
        setChoice(event.target.value)

    }

   async function handleSubmit(event){
        event.preventDefault();
        
       
        if (!choice.trim()) {
            alert("Please enter a city name");
            return;
        }
        
        setLoading(true)
       try{
         const url = `https://api.openweathermap.org/data/2.5/weather?q=${choice}&appid=${apiKey}&units=metric`;
        const response = await fetch(url)
        const data = await response.json()

        setWeather({
           city : data.name,
           temp : data.main.temp,
           description: data.weather[0].description
        })

       }
       catch(error){
        console.log("Error details:", error);
        alert("City not found! Please try a valid city name.");
       }
        setLoading(false)

        setChoice("")
    }






    return(
        <div className="main-div">
            <div className="form-div">

            <form action="" onSubmit={handleSubmit}>

                <input className="input" type="text" value={choice} onChange={handleChange}/>
                <button className="form-button" type="submit">Check</button>
            </form>
            </div>

            <div className="data-div">
           {loading
             ? <p className="loading">Loading...</p>
             : weather 
               ? <p className="data">The weather today in {weather.city} is {weather.temp}°C and {weather.description}</p>
               : <p className="search">Search for city</p>}
                  
                  </div>
           

           
        


        </div>


    )
}

export default WeatherApp