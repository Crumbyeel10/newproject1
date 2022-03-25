import './App.css';
import Card from './Card.js';

function App() {



  const jsonData= require('./Components/Quote.json'); 
  
  for (let property in jsonData.quotes){
    let written =  jsonData.quotes[property].quote
    let arr = written.split('.')
    console.log(arr)
    // for(let quotee in written){
    //   console.log(quotee[1])
    // }
  }


  return (

      <div className="App">

        <Card text="Hola soy una prueba" />
        
     </div>

    
  );
}


export default App;
