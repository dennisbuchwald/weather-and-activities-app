import "./App.css";
import { Form } from "./components/Form";

function App() {
  const handleAddActivity = (data) => console.log(data);
  return (
    <div>
      <Form onAddActivity={handleAddActivity} />
    </div>
  );
}
export default App;
