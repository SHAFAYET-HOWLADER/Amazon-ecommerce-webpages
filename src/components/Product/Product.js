
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Product.css'
const Product = ({product, handler} ) => {
    const {img, name, price, seller, ratings} = product;
    return (
        <div className='products'>
            <img src={img} alt="" />
            <div className="products_details">
                <h3>Name : {name.slice(0, 10)}</h3>
                <p>Price : $ {price}</p>
                <small>Manufacturer : {seller}</small>
                <br></br>
                <small>Rating : {ratings}</small>
            <br />
            </div>
            <button onClick={()=>handler(product)}>Add to Cart
            &nbsp;
            <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;