import React from 'react';

const Cart = ({carts}) => {
    return (
       <div className="cart">
           <h3>selected items : {carts.length} </h3>
       </div>
    );
};

export default Cart;