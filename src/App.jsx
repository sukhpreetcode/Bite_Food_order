import React from 'react'
// import './App.css';
import './Componets/Hs.css';
import Head from './Page/Head';
import Home from './Page/Home';
import Footer from './Componets/Footer';
import { BrowserRouter, Route ,Routes,Link,useNavigate} from 'react-router-dom';
import Menu from './Page/Menu';
import Burger from './Page/Burger';
import Des from './Page/Des';
import Ff from './Page/Ff';
import Blue from './Page/Blue';
import Cok from './Page/Cok';
import Desert from './Page/Desert';
import Cart from './Page/Cart';


const App = () => {
  return (
    <>
  
   

  <BrowserRouter>
 <Head />
  <Routes>
    <Route path='/Bite_Food_order' element={<Home />} />
    <Route path='/Menu' element={<Menu />} />

    <Route path='/Burger' element={<Des />} />
    <Route path='/French Fries' element={<Ff />} />
    <Route path='/Blueberry Cake' element={<Blue />} />
    <Route path='/Cookie Monster' element={<Cok />} />
    <Route path='/Dessert' element={<Desert />} />
    <Route path='/cart' element={<Cart />} />
  </Routes>
  <Footer />
  </BrowserRouter>

</>
  );
};

export default App