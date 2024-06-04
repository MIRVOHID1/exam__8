import React from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from "react-router-dom";
import './Cart.css';
import { useSelector } from 'react-redux';

const Cart = () => {
    const totalSum = useSelector(state => state.cartData.cart.reduce((sum, item) => sum + item.productPrice * item.quantity, 0));

    return (
        <Link className="cart__button" to={'/cart'}>
            <ShoppingCartIcon className="cart__icon"/>
            <span className="cart__total price">{totalSum} $</span>
        </Link>
    );
}

export default Cart;
