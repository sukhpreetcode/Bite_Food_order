import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Cart = () => {
  


   
 

  const [first, setfirst] = useState('0')
const seting =()=>{
  setfirst("1")
}
  return (
    <>
   <h3>Enter what you want to buy </h3>
   1 for Burger<br />
   2 for Cookie Monster<br />
   3 for Blueberry Cake<br />
   4 for French Fries<br />
   5 for Dessert<br />

  <input type='test' placeholder='Enter number and Number for repeats ' ></input>
   <button onClick={()=>setfirst('1')} >Confirm</button>
  { first==1 && <p>Your order is pendig,we send into your address as soon as posible</p>  } <br />
  { first==1 &&  <h2> Thankyou </h2> }<br />
  { first==1 && <Link to='/menu'>Go TO Menu</Link>  }
  
   
     <br />  </>
  )
}

export default Cart