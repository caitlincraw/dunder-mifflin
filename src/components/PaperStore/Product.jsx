import React, { Component } from 'react';
import formatCurrency from './util';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import Modal from 'react-modal';
const { REACT_APP_ORIGIN } = process.env;

const Product = ({ addToCart, isModal, toggleModal, productos }) => {

    const products = productos.map(product => (
        <li key={product.id}>
            <div className="product">
                <a href={"#" + product.id} onClick={() => toggleModal(product)}>
                <img src={`${REACT_APP_ORIGIN}/images/${product.image}`} alt={product.title}></img>
                <p>{product.title}</p>
                </a>
                <div className="product-price">
                    <div>
                        {formatCurrency(product.price)}
                    </div>
                    <button onClick={() => addToCart(product.id)} className="button-primary">
                        Add To Cart
                    </button>
                </div>
            </div>
        </li>
    ))

    return(
        <div>
            <Fade bottom cascade={true}>
                <ul className="products">
                    { products }
                </ul>  
            </Fade>

            {isModal && (
                <Modal isOpen={true} onRequestClose={toggleModal}>
                    <Zoom>
                        <button onClick={toggleModal} className="close-modal">
                            x
                        </button>
                        <div className="product-details">
                            <img src={`http://localhost:3000/images/${product.image}`} alt={product.title}></img>
                            <div className="product-details-description">
                                <p><strong>{product.title}</strong></p>
                                <p>{product.description}</p>
                                <div className="product-price">
                                    <div>{formatCurrency(product.price)}</div>
                                    <button className="button-primary" onClick={() => {
                                        addToCart(product.id);
                                        toggleModal();
                                    }}>
                                        Add To Cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    </Zoom>
                </Modal>
            )}

        </div>
    )

}
