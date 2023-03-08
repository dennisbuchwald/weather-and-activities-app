import "./form.css";

export function Form(){
    return (

    <form>
    <h2>Add new Activity</h2>
    <label className="name">Name:</label>
    <input id="name" type="text" />
    <br />
    <label className="good-weather-activity">Good-weather activity:</label>
    <input type="checkbox" id="good-weather-activity" />
    <br />
    <input type="submit" />
    </form>

    );
}


