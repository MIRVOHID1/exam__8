import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import './Cart.css';
import { updateCartItem } from '../../redux/cartSlice';
import ConfirmationModal from './ConfirmationModal';

const Cart = () => {
    const cart = useSelector(state => state.cartData.cart);
    const dispatch = useDispatch();

    const [showModal, setShowModal] = useState(false);
    const [itemToRemove, setItemToRemove] = useState(null);

    const handleIncrease = (item) => {
        dispatch(updateCartItem({ id: item.id, quantity: item.quantity + 1 }));
    };

    const handleDecrease = (item) => {
        if (item.quantity > 1) {
            dispatch(updateCartItem({ id: item.id, quantity: item.quantity - 1 }));
        } else {
            setItemToRemove(item);
            setShowModal(true);
        }
    };

    const handleConfirmRemove = () => {
        dispatch(updateCartItem({ id: itemToRemove.id, quantity: 0 }));
        setShowModal(false);
        setItemToRemove(null);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setItemToRemove(null);
    };

    const totalSum = cart.reduce((sum, item) => sum + item.productPrice * item.quantity, 0);

    // Umumiy summani NavBar ga jo'natish
    const sendTotalSumToNavBar = () => {
        // Bu funksiya NavBar ga umumiy summani jo'natadi
        // Masalan:
        console.log('Umumiy summa:', totalSum);
    };

    return (
        <div className="cart__container">
            <h1>Savatcha</h1>
            <div className='cart'>
                <div className="cart__left">
                    {cart.map(item => (
                        <div className="cart__item" key={item.id}>
                            <div className='cart__item__details'>
                                <img className="cart__item__image" src={item.productImage} alt={item.productName} />
                                <h3>{item.productName}</h3>
                            </div>
                            <div className="cart__item__details">
                                <div className="cart__item__quantity">
                                    <button onClick={() => handleDecrease(item)}>-</button>
                                    <span>{item.quantity}</span>
                                    <button onClick={() => handleIncrease(item)}>+</button>
                                </div>
                                <p>{item.productPrice} $</p>
                            </div>
                        </div>
                    ))}
                    <Link style={{textDecoration: 'none', textAlign: 'center', alignItems: 'center', color: '#000'}} to={'/'}><h1>Qo'shish</h1></Link>
                </div>
                <div className="cart__right">
                    <h1>Umumiy</h1>
                    <div>
                        <div className='cart__right__details'>
                            <p>Maxsulotlar:</p>
                            <p>{totalSum} $</p>
                        </div>
                        <div className='cart__right__details'>
                            <p>Yetkazib berish:</p>
                            <p>0 $</p>
                        </div>
                    </div>
                    <div>
                        <div className='cart__right__details'>
                            <p>To'lash uchun:</p>
                            <p>{totalSum} $</p>
                        </div>
                        <button className='cart__right__button' onClick={sendTotalSumToNavBar}>To'lov sahifasiga o'tish</button>
                    </div>
                </div>
            </div>
            <ConfirmationModal
                show={showModal}
                onClose={handleCloseModal}
                onConfirm={handleConfirmRemove}
            />
        </div>
    );
};

export default Cart;
