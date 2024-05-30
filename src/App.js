import React, {useState} from "react";
import Demo from './Demo'
import Button from "./ui/Button";

// props - это способ передачи данных JS от редельского компонента к дочерним компанентам
// children - это свойство props в парном элементе


function App() {
  const [toggle, setToggle] = useState(true)
 

  const toggleHandler = () => {
      setToggle(prevState => !prevState)
  }

  let nums = [4, 5, 2, 3, 8, 11, 23, 14]
  return (
    <div>
      {toggle && <p>Hello</p>}
      <Demo text={'This is a DEMO page'} list={nums}/>
      <Button onClick={toggleHandler}>Toggle</Button>
      <Button>Delete</Button>
      <Button>Add</Button>
      <Button>Edit</Button>
    </div>
  );
}




export default App;
