import "./form.css";
import { useState } from "react"

export function Form(onAddActivity){

    const [name, setName] = useState("")
    const [isForGoodWeather, setIsForGoodWeather] = useState(false)

function handleSubmit = (event) => {
event.preventDefault();

const data = {name, isForGoodWeather}

}

    return (

    <form onSubmit={handleSubmit}>
    <h2>Add new Activity</h2>
    <label className="name">Name:</label>
    <input id="name" type="text" value={name} />
    <br />
    <label className="good-weather-activity">Good-weather activity:</label>
    <input type="checkbox" id="good-weather-activity" checked={isForGoodWeather} />
    <br />
    <input type="submit" />
    </form>

    );
}


