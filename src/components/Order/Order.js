import React from 'react';
import { Link } from 'react-router-dom';
import useCarts from '../../hooks/useCarts';
import useProducts from '../../hooks/useProducts';
import { removeData } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
const Order = () => {
const [products, setProducts] = useProducts();
const [carts, setCarts] = useCarts(products);
const handleRemove  = (product)=>{
         const rest = carts.filter(pd=>pd.id !== product.id)
         setCarts(rest)
         removeData(product.id)
}
    return (
     <div className="shop_container">
         <div className="review_item_container">
            {
                carts.map(cart=><ReviewItem 
                    key={cart.id}
                     cart={cart}
                     handleRemove={handleRemove}
                    ></ReviewItem>)
            }
         </div>
         <div className="shop_side_bar">
            <Cart carts={carts}>
                <Link to="/shipment">
                   <button>
                       <h3>Proceed Shipment</h3>
                   </button>
                </Link>
            </Cart>
         </div>
     </div>
    );
};
export default Order;