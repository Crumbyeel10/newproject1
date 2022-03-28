import "./Card.css";

 const Card = ({text,Autor,func,styleButton,styleTxt}) => {

        // const jsonData= require('./Components/Quote.json');
        // let quotte = (jsonData.quotes[Math.floor(Math.random() * 103)].quote)
     return(

        
         <div className="card-text">
             <p style={styleTxt}>{text}</p>
             <label style={styleTxt} > {Autor}</label> <br /> <br />
             <button  style={styleButton} className="btn-card" onClick = {() => func()}>Next Quote</button>

        </div>
     )
 }


 export default Card