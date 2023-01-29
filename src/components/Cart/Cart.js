import React from "react";
import classes from './Cart.module.css';
import Modal from "../UI/Modal";

const Items = [{id:'c1',name:'Sushi',amount:2,price:12}];

const Cart = props => {
    const cartItems = (<ul className={classes['cart-items']}> {Items.map((item) => (<li>{item.name}</li>))}

    </ul> );
    return (
    <Modal onCartClose={props.onCartClose} >
        {cartItems}
        <div className={classes.total}>
            <span>Total Amount</span>
            <span>60.20</span>
        </div>
        <div className={classes.actions}>
            <button className={classes['button-alt']} onClick={props.onCartClose}>Close</button>
            <button className={classes.button}>Order</button>
        </div>
    </Modal>);
};

export default Cart;