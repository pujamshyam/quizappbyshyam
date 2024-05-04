
import './App.css';
import Card from './Card.js';
import pr from './data.js';


function App() {
 
 

  return (
    <div className="App">
      
     {pr.map((p)=>{
      return <Card {...p}/>
     })}
    
    </div> 
  );
}

export default App;
