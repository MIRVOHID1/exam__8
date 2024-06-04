import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from "./header/Header";
import './Home.css';
import Modal from './modal/Modal';
import { addToCart, updateCartItem } from '../../redux/cartSlice';

const Home = () => {
    const [products, setProducts] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const cart = useSelector(state => state.cartData.cart);
    const dispatch = useDispatch();

    useEffect(() => {
        fetch('https://665cbf3d3e4ac90a04da8716.mockapi.io/adminka/v1/products')
            .then(response => response.json())
            .then(data => setProducts(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    const openModal = (product) => {
        setSelectedProduct(product);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedProduct(null);
    };

    const handleAddToCart = (product) => {
        if (!cart.some(item => item.id === product.id)) {
            dispatch(addToCart(product));
        }
        closeModal();
    };

    const handleUpdateCartItem = (product) => {
        dispatch(updateCartItem(product));
    };

    return (
        <>
            <Header />
            <div className="home">
                <div className="home__container">
                    <div className="cards">
                        {products.map(product => (
                            <div className="home__card" key={product.id} onClick={() => openModal(product)}>
                                <img className="home__card__image" src={product.productImage} alt={product.productName} />
                                <div className="home__card__texts">
                                    <h4 className="home__card__title">{product.productName}</h4>
                                    <p className="home__card__des">{product.productDes}</p>
                                    <div className="home__card__bottom">
                                        <p className="home__card__price">{product.productPrice} so'm</p>
                                        <button className="home__card__btn" onClick={(e) => { e.stopPropagation(); openModal(product); }}>Qo'shish</button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {isModalOpen && (
                <Modal 
                    product={selectedProduct} 
                    onClose={closeModal} 
                    onAddToCart={handleAddToCart} 
                    cart={cart}
                    onUpdateCartItem={handleUpdateCartItem}
                />
            )}
        </>
    );
}

export default Home;
