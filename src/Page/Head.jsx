import React from 'react'
import { BrowserRouter, Route ,Routes,Link} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Head = () => {
  const navi=useNavigate()
 const click=()=>{
    navi('/menu');
  }
  const clickc=()=>{
    navi('/cart');
  }
   const hm=()=>{
    navi('/');
  }
  return (
    <>
    <div className="po">
        <div className="logo">
            <p id='p1' onClick={hm} > Food</p><p id='p2'onClick={hm} > Bite</p>
            <p id='p3' onClick={hm}  > Order</p>
        </div>
        <div className="left">
          <button onClick={click} >Menu</button>
            
              {/* <button onClick={clickc} >Cart</button> */}
        </div>
        </div>    
    </>
  )
}

export default Head