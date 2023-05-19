import ListGroup from "./components/ListGroup";
import ListGroup2 from "./components/ListGroup2";

function App() {

  const items = ["New York", "Tokyo", "London"];

  const handleSelectItem = (item : string) => {
    console.log(item);
  }

  return (
    <div>
      <ListGroup/>
      <ListGroup2 items={items} heading="Cities" onSelectItem={handleSelectItem}/>
      </div>
 
  )
}
 
export default App;
