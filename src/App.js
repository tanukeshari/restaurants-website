import React, { useState  } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";




function App() {
  const [showCartItems , setShowCartItems] = useState(false);
  const showCartItemsHandler = ()=>{
    setShowCartItems(true)
  };
  
  const hideCartItemsHandler = () => {
    setShowCartItems(false);
  };
  return (
    <CartProvider>
      {showCartItems && <Cart onCartClose={hideCartItemsHandler}/>}
      <Header onCartClick={showCartItemsHandler}/>
      <main>
        <Meals/>
      </main>
    </CartProvider>
  );
}

export default App;