
import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'
const Shop = () => {
    const [products, setProducts] = useState([]);
    const [carts, setCarts] = useState([]);
    useEffect(()=>{
        fetch("products.json")
        .then(res => res.json())
        .then(data =>setProducts(data))
    },[])
        function handler(product){
          const newCart = [...carts, product];
          setCarts(newCart);
        }
    return (
        <div className='shop_container'>
            <div className="shop_product">
                {
                    products.map(product=><Product handler={handler} key={product.id} product={product}></Product>)
                }
            </div>
            <div className="shop_side_bar">
           <Cart carts={carts}></Cart>
            </div>
        </div>
    );
};

export default Shop;