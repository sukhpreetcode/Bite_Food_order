import React from 'react'
import { useNavigate } from 'react-router-dom';
import { BrowserRouter, Route ,Routes,Link} from 'react-router-dom';


const Burger = ({headline,l1,l2,l3,lastl,pk,mm}) => {
   const navi=useNavigate()
   const click=()=>{
      navi('/cart');
      alert("Welcome to cart page");
    }
  return (
    <>
    <div class="head">
        <h1>{headline}</h1>
    </div>
    <div class="main">
        {mm==1 &&<img src='/Bite.jpg' width={300} /> }
        {mm==2 &&<img src='/Cake.jpg' width={300} /> }
        {mm==3 &&<img src='/Cook.jpg' width={300} /> }
        {mm==4 &&<img src='/Des.jpg' width={300} /> }
        {mm==5 &&<img src='/Fir.jpg' width={300} /> }
        
        
        <ul>
            <li>{l1}</li>
             <li><br /><br /></li><li>{l2}</li>
             <li><br /><br /></li><li>{l3}</li>
             <li><br /> </li>
        </ul>
        <h3>{lastl}<br />Only {pk}/-</h3>   <button onClick={click} >Buy</button>
    </div>

    </>
  )
}

export default Burger