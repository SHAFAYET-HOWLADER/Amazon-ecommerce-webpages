import React from 'react';
import './Cart.css'
const Cart = ({carts,children}) => {
    let total = 0;
    let shipping = 0;
    let quantity = 0;
    for(const product of carts){
      quantity = quantity + product.quantity;
      total = total + product.price* product.quantity;
      shipping = shipping + product.shipping;
    }
    const  tax = total * 10 / 100;
    const grandTotal = total+shipping+tax
    return (
        <div className='cart'>
            <h2>Order Summary</h2>
            <h3>Selected items : {quantity}</h3>
            <h3>Total : $ {total}</h3>
            <h3>Shipping  : $ {shipping}</h3>
            <h3>Tax : $ {tax}</h3>
            <h3>grand Total  : $ {grandTotal}</h3>
            <h3>{children}</h3>
        </div>
    );
};
export default Cart;