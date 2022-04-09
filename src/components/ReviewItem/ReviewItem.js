import React from 'react';
import './ReviewItem.css'
import { FaRegTrashAlt } from 'react-icons/fa';
const ReviewItem = (props) => {
    const {handleRemove, cart} = props;
    const {name, price, shipping, img, quantity} = cart;
    return (
        <div className='review_item'>
            <div className="review_img">
              <img src={img} alt="" />
            </div>
            <div className="review_text">
            <h3>Name : {
               name.slice(0,15)
            }</h3>
            <h4>Price : $ {price}</h4>
            <h4> Shipping : {shipping}</h4>
            <h4>Quantity :  {quantity}</h4>
            </div>
            <div  onClick={()=>handleRemove(cart)} className="review_icon">
                <FaRegTrashAlt className='dlbtn'></FaRegTrashAlt>
            </div>
        </div>
    );
};

export default ReviewItem;