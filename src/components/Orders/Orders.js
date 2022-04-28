import React from 'react';
import { useNavigate } from 'react-router-dom';
import useCart from '../../Hooks/useCart';
import useProducts from '../../Hooks/useProducts';
import { removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import RevewItem from '../RevewItem/RevewItem';
import './Orders.css'


const Orders = () => {
    const [products, setProducts] = useProducts()
    const [cart, setCart] = useCart()
    const navigate = useNavigate()
    const handleRemoveProduct = (product) => {
        const rest = cart.filter(pd => pd._id !== product._id)
        setCart(rest)
        removeFromDb(product._id)
    }
    return (
        <div className='shop-container'>
            <div className='review-item-container'>
                {
                    cart.map(product => <RevewItem
                        key={product._id}
                        product={product}
                        handleRemoveProduct={handleRemoveProduct}
                    ></RevewItem>)
                }

            </div>
            <div className='cart-container'>
                <Cart cart={cart}>
                    <button onClick={() => navigate('/shipment')}>Shipping Checkout</button>
                </Cart>
            </div>

        </div>
    );
};

export default Orders;