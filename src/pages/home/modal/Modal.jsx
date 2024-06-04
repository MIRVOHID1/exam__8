import React, { useState, useEffect } from 'react';
import { IoCloseSharp } from "react-icons/io5";
import './Modal.css';

const Modal = ({ product, onClose, onAddToCart, cart, onUpdateCartItem }) => {
    const [quantity, setQuantity] = useState(1);
    const isInCart = cart.some(item => item.id === product.id);
    const cartItem = cart.find(item => item.id === product.id);

    useEffect(() => {
        setQuantity(cartItem ? cartItem.quantity : 1);
    }, [product, cartItem]);

    const handleIncrease = () => setQuantity(prev => prev + 1);
    const handleDecrease = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));

    useEffect(() => {
        if (isInCart) {
            onUpdateCartItem({ id: product.id, quantity });
        }
    }, [quantity, isInCart, onUpdateCartItem, product.id]);

    const totalPrice = product.productPrice * quantity;

    const handleAddToCart = () => {
        const productWithQuantity = {
            ...product,
            quantity,
        };
        if (!isInCart) {
            onAddToCart(productWithQuantity);
        }
    };

    return (
        <div className="modal__overlay">
            <div className="modal">
                <button className="modal__close" onClick={onClose}><IoCloseSharp /></button>
                <div className="modal__content">
                    <img className="modal__image" src={product.productImage} alt={product.productName} />
                    <div className="modal__info">
                        <h2 className="modal__title">{product.productName}</h2>
                        <p className="modal__description">{product.productDes}</p>
                        <div className="modal__footer">
                            <div className="modal__quantity">
                                <button className="modal__quantity__button" onClick={handleDecrease}>-</button>
                                <span className="modal__quantity__value">{quantity}</span>
                                <button className="modal__quantity__button" onClick={handleIncrease}>+</button>
                            </div>
                            <button 
                                className={`modal__button ${isInCart ? 'disabled' : ''}`} 
                                onClick={handleAddToCart} 
                                disabled={isInCart}
                            >
                                {isInCart ? `${totalPrice} $` : ` ${totalPrice} $`}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;
