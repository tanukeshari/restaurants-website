import React from "react";
import classes from './Cart.module.css';
import Modal from "../UI/Modal";

const Items = [{id:'c1',name:'Sushi',amount:2,price:12}];

const Cart = props => {
    const cartItems = (<ul className={classes['cart-items']}> {Items.map((item) => (<li>{item.name}</li>))}

    </ul> 
    );
    return (
    <Modal>
        {cartItems}
        <div className={classes.total}>
            <span>Total Amount</span>
            <span>60.66</span>
        </div>
        <div className={classes.actions}>
            <button className={classes['button-alt']}>Close</button>
            <button className={classes.button}>Order</button>
        </div>
    </Modal>);
};

export default Cart;