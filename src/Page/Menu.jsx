import React from 'react'
import Item from '../Componets/Item'

const Menu = () => {
  let bg="🍔 Burger";
  return (
    <>
    <h2 id='mn1'>Your Favorite Foods, All in One Place</h2>
    <Item nm="1" bg={bg}  dec="A burger is one of those foods that’s simple but insanely satisfying 🍔

At its core, a burger is a sandwich made with a soft bun and a filling—usually a juicy patty. The classic version uses a grilled or fried meat patty (like beef or chicken), but you’ll also find veggie or paneer options." pr="79"  />
<Item nm="4" bg="🍪 Cookie Monster"  dec="Try our Cookie Monster—loaded with rich chocolate cookies, creamy layers, and a delightful crunch in every bite. A perfect treat for true dessert lovers. " pr="149"  />
<Item nm="3" bg="🫐 Blueberry Cake"  dec="Freshly baked Blueberry Cake topped with juicy blueberries and smooth cream, offering a perfect balance of sweetness and tangy flavor." pr="349"  />
<Item nm="2" bg="🍟 French Fries"  dec="Crispy golden French Fries, perfectly seasoned and fried to perfection—light, crunchy, and irresistibly tasty" pr="49"  />
<Item nm="5" bg="🍰 Dessert"  dec="End your meal on a sweet note with our delicious desserts, crafted to bring happiness in every bite." pr="439"  />
</>
  )
}

export default Menu