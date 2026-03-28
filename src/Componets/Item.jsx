import React from 'react'
import { Link } from 'react-router-dom'


const Item = ({bg,dec,pr,nm}) => {
  return (
    <>
    <div className="ko">
<h1>{bg}</h1>{nm==1 && <Link to="/Burger">Go To Page</Link>}
{nm==2 && <Link to="/French Fries">Go To Page</Link>}
{nm==3 && <Link to="/Blueberry Cake">Go To Page</Link>}
{nm==4 && <Link to="/Cookie Monster">Go To Page</Link>}
{nm==5 && <Link to="/Dessert">Go To Page</Link>}


<p>{dec}</p>
<p>
Just ₹{pr} Only</p>
    </div>

    </>
  )
}

export default Item