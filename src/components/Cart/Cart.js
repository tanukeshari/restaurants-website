import React ,{useContext } from "react";
import classes from './Cart.module.css';
import Modal from "../UI/Modal";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";



const Cart = props => {
    const cartCtx = useContext(CartContext);


    
    const items = cartCtx.items;

    const totalAmount = `Rs${cartCtx.totalAmount.toFixed(2)}`

    const addcartItemHandler =(item) =>{
        cartCtx.addItem({...item,amount:1});

    }

    const removecartItemHandler =(id) =>{
        cartCtx.removeItem(id);

    }

    const hasItems = cartCtx.items.length > 0 ;

    const cartItems = (<ul className={classes['cart-items']}> {items.map((item) => (
        <CartItem 
            key={item.id} 
            name={item.name} 
            amount={item.amount} 
            price={item.price}
            onRemove={removecartItemHandler.bind(null, item.id)}
            onAdd={addcartItemHandler.bind(null, item)}/>
        ))}

    </ul> 
    );
    return (
    <Modal onCartClose={props.onCartClose} >
        {cartItems}
        <div className={classes.total}>
            <span>Total Amount</span>
            <span>{totalAmount}</span>
        </div>
        <div className={classes.actions}>
            <button className={classes['button-alt']} onClick={props.onCartClose}>Close</button>
            {hasItems && <button className={classes.button}>Order</button>}
        </div>
    </Modal>);
};

export default Cart;