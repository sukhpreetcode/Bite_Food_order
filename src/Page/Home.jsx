import React from 'react'
import fd from '../assets/Pngt.jpg';
import bf from '../Assets/Buff.jpg';
import fod from '../assets/Ffd.jpg';


const Home = () => {
  return (
    <>
    <h1>Welcome </h1>
     <p id='p1'>  Welcome back – hope you're having a great day! What delicious craving are we satisfying today? 😋</p>
    <div className="pix">
       <img id='m1' src={fd} alt='food img' width={600}  />  <img id='m1' src={fod} alt='food img' width={600}  />
    
    </div>
   
   
   
    <img id='m2' src={bf} alt='food img' width={600} />
    <h3 id='sk'>We serve only the best – all our foods are top-notch favorites!<br />
try our burger today – pure bliss in every bite!<br />
Thanks for the chance to make you smile with every order 🥰🍹</h3>

    </>
  )
}

export default Home