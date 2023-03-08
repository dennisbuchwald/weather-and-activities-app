import "./App.css";
import { Form } from "./components/Form";
import { uid } from "uuid";
import { useState } from "react";

function App() {
  // const [activities, setActivities] = useState([]);

  const handleAddActivity = (data) => console.log(data);
  // const handleAddActivity = (data) =>

  return (
    <div>
      <Form onAddActivity={handleAddActivity} />
    </div>
  );
}
export default App;
