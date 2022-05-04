import Button from "./Button";
import styles from "./App.module.css"
import {useState, useEffect} from"react";

function App() {
  const [count, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev)=> prev + 1);
  const onChange = (event) => setKeyword(event.target.value);

  useEffect(() => {
    console.log("I run only once");
  }, [])
  
  useEffect(() => {
    console.log("I run when 'keyword' changes");
    
  }, [keyword]);

  useEffect(() => {
    console.log("I run when 'counter' changes.");
  }, [count])

    return (
    <div>
      <input value={keyword} onChange={onChange} type="text" placeholder="Serach Here..."/>
      <h1 className={styles.title}>Welcome back!!</h1>
      <Button text={"continue"} />
      <h1>{count}</h1>
      <button onClick={onClick}>click me</button>

    </div>
  );
}

export default App;
