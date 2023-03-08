import "./App.css";
import { Form } from "./components/Form/Form";
import { List } from "./components/List/List";
import { uid } from "uid";
import { useState, useEffect } from "react";
import { fetchedWeather } from "./components/API/Api";

function App() {
  const [activities, setActivities] = useState([]);
  const isGoodWeather = true;
  // hier haben wir versucht, die API einzubauen:
  useEffect(() => {
    const fetchedData = async () => {
      try {
        const weather = await fetchedWeather();
      } catch (error) {
        console.log(error);
      }
    };
    fetchedData();
  }, []);

  const handleAddActivity = (data) => {
    const newActivity = {
      id: uid(),
      name: data.name,
      isForGoodWeather: data.isForGoodWeather,
    };
    console.log(newActivity);
    setActivities([...activities, newActivity]);
  };
  const filteredActivities = activities.filter(
    (activity) => activity.isForGoodWeather === isGoodWeather
  );
  return (
    <div>
      <List activities={filteredActivities} isGoodWeather={isGoodWeather} />
      <Form onAddActivity={handleAddActivity} />
    </div>
  );
}
export default App;
