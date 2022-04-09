
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useProducts from '../../hooks/useProducts';
import { addData, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'
const Shop = () => {
    const [products, setProducts] = useProducts();
    const [carts, setCarts] = useState([])
    useEffect(()=>{
       const storedCart = getStoredCart();
       const savedCart = [];
        for(const id in storedCart){
            const addedProduct = products.find(product=> product.id === id);
           if(addedProduct){
            const quantity = storedCart[id];
            addedProduct.quantity = quantity;
            savedCart.push(addedProduct)
           }
        }
       setCarts(savedCart);
    },[products])

    const handler = (product)=>{
       const newCarts = [...carts, product];
       setCarts(newCarts);
       addData(product.id)
    }
    return (
        <div className='shop_container'>
            <div className="shop_product">
                {
                    products.map(product=><Product handler={handler} key={product.id} product={product}></Product>)
                }          
            </div>
            <div className="shop_side_bar">  
            <Cart carts={carts}>
             <Link to="/order">
             <button>Review Order</button>
             </Link>
            </Cart>
            </div>
        </div>
    );
};

export default Shop;