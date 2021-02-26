import './App.css';
import { useEffect, useState } from 'react';

function App() {
  //const names = ["Akhi", "Nur", "Jobeda"]
  const [countTitle, setTitle] = useState([]);
  useEffect(()=> {
    fetch("https://jsonplaceholder.cypress.io/todos/")
    .then(res => res.json())
    .then(data => setTitle(data))
  })
  //const students = [{name:"Akhi",id:1},{name:"Rakhi",id:2},{name:"Pakhi",id:3}];
  return (
    <div className="App">
      <header className="App-header">
      <Nayok></Nayok>
      {
        countTitle.map(student => <Student key={student.id} data={student}></Student>)
      }
      </header>
    </div>
  );
}

function Student(props) {
  const style={
    border:"5px solid green",
    width: "500px",
    height: "200px",
    margin: "10px"
  }
  return(
    <div style={style}>
      <h3>Title: {props.data.title}</h3>
      <h3>ID: {props.data.id}</h3>
    </div>
  )
}

export default App;


function Nayok(props) {
  const increase = () => {
    setMovie(movieCount+1); 
  }
  const decrease = () => {
    if(movieCount>0){
      const count = movieCount-1;
      setMovie(count);
    }
  }
  const [movieCount, setMovie] = useState(10);
  return (
    <div>
      <h1>Total Movies: {movieCount}</h1>
      <button onClick={increase} style={{width: "150px",height: "70px", borderRadius: "20px"}}>Add Nayok</button>
      <button onClick={decrease} style={{width: "150px",height: "70px", borderRadius: "20px"}}>Remove Nayok</button>
       
    </div>
  )
}