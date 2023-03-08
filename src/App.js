import "./App.css";
import { Form } from "./components/Form/Form";
import { List } from "./components/List/List";
import { uid } from "uid";
import { useState } from "react";

function App() {
  const [activities, setActivities] = useState([]);

  const handleAddActivity = (data) => {
    const newActivity = {
      id: uid(),
      name: data.name,
      isForGoodWeather: data.isForGoodWeather,
    };
    console.log(newActivity);
    setActivities([activities, newActivity]);
  };
  return (
    <div>
      <Form onAddActivity={handleAddActivity} />
    </div>
  );
}
export default App;
