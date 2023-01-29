import React, { useState , Fragment } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";




function App() {
  const [showCartItems , setShowCartItems] = useState(false);
  const showCartItemsHandler = ()=>{
    setShowCartItems(true)
  };
  
  const hideCartItemsHandler = () => {
    setShowCartItems(false);
  };
  return (
    <Fragment>
      {showCartItems && <Cart onCartClose={hideCartItemsHandler}/>}
      <Header onCartClick={showCartItemsHandler}/>
      <main>
        <Meals/>
      </main>
    </Fragment>
  );
}

export default App;