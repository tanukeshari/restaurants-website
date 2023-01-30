import CartContext from "./cart-context";
import React ,{ useReducer } from "react";

const defaultCartState = {
    items:[],
    totalAmount: 0
};

const cartReducer = (state,action) => {
    if (action.type === 'ADD') {
        const updatedItems = state.items.concat(action.item);
        const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;
    
    return {
        items:updatedItems,
        totalAmount : updatedTotalAmount
        };
    };    
    return defaultCartState;
}

const CartProvider = (props) =>{
    // const [items , updateItems] =useState([]);
    const [cartState, dispatchCartAction ] = useReducer(cartReducer,defaultCartState);

    

    const addItemToCartHandler = (item) =>{
        // updateItems([...items,item]);
        // console.log('inside addeItemToCartHandler', cartCtx)
        dispatchCartAction({
            type:'ADD',
            item:item
        });
    };
    const removeItemFromCartHandler= (id) =>{
        dispatchCartAction({
            type:'REMOVE',
            id:id
        })

    }

    const cartCtx = {
        items : cartState.items,
        totalAmount: cartState.totalAmount,
        addItem:addItemToCartHandler ,
        removeItem: removeItemFromCartHandler
        
    }
    return <CartContext.Provider value={cartCtx}>
        
        {props.children}
    </CartContext.Provider>

};

export default CartProvider;