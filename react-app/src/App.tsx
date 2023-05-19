import ListGroup from "./components/ListGroup";
import ListGroup2 from "./components/ListGroup2";

function App() {

  const items = ["New York", "Tokyo", "London"];

  return (
    <div>
      <ListGroup/>
      <ListGroup2 items={items} heading="Cities" />
      </div>
 
  )
}
 
export default App;
