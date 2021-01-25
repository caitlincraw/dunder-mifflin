import React, { Component } from 'react';
import formatCurrency from './util';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import Modal from 'react-modal';
const { REACT_APP_ORIGIN } = process.env;

export default class Products extends Component {

    constructor(props) {
        super(props);
        this.state = {
            product: null,
        };
    }

    openModal = (product) => {
        this.setState({ product });
    };

    closeModal = () => {
        this.setState({ product: null });
    };

    render() {
        
        const { product } = this.state;
        const { productos } = this.props;
        console.log("Y", productos);

        return(
            <div>
                <Fade bottom cascade={true}>
                    <ul className="products">
                        {productos.map(product => (
                            <li key={product.id}>
                                <div className="product">
                                    <a href={"#" + product.id} onClick={() => this.openModal(product)}>
                                    <img src={`${REACT_APP_ORIGIN}/images/${product.image}`} alt={product.title}></img>
                                    <p>{product.title}</p>
                                    </a>
                                    <div className="product-price">
                                        <div>
                                            {formatCurrency(product.price)}
                                        </div>
                                        <button onClick={() => this.props.addToCart(product)} className="button-primary">
                                            Add To Cart
                                        </button>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>  
                </Fade>

                {product && <Modal isOpen={true} onRequestClose={this.closeModal}>
                    <Zoom>
                        <button onClick={this.closeModal} className="close-modal">
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
                                        this.props.addToCart(product.id);
                                        this.closeModal();
                                    }}>
                                        Add To Cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    </Zoom>
                </Modal>}

            </div>
        )

    }

}