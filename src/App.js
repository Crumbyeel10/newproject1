
import { useState } from 'react';
import './App.css';
import Card from './Card.js';


function App() {

  let [count, setCount] = useState(0)
  const [hex, setHex] = useState("#ffffff")


  const jsonData= require('./Components/Quote.json'); 
  let quotte = (jsonData.quotes[count].quote)
  let autor = (jsonData.quotes[count].author)

  const randomHex = () => {
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16)
    setHex(randomColor)
    
  }

  const quoteRandom = () => {
    
    randomHex()
    setCount(count = Math.round(Math.random() * 100) )
    
  }


   
 

  return (
      <div className="App" style={{backgroundColor: `${hex}`}}>
     

        <Card func={quoteRandom} text={quotte} Autor={autor} styleButton={{backgroundColor: `${hex}`}} styleTxt={{color: `${hex}`}}  />
       
     </div>

    
  );
}


export default App;

