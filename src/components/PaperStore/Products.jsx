import React, { Component } from 'react';
import formatCurrency from './util';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import Modal from 'react-modal';
import { connect } from 'react-redux';
import { fetchProducts } from '../../actions/productActions';

 class Products extends Component {

    constructor(props) {
        super(props);
        this.state = {
            product: null,
        };
    }

    componentDidMount() {
        this.props.fetchProducts();
    }

    openModal = (product) => {
        this.setState({ product });
    };

    closeModal = () => {
        this.setState({ product: null });
    };

    render() {
        
        const { product } = this.state;

        return(
            <div>
                <Fade bottom cascade={true}>

                    {!this.props.products ? (<div>Loading ...</div>) :
                        <ul className="products">
                            {this.props.products.map(product => (
                                <li key={product.id}>
                                    <div className="product">
                                        <a href={"#" + product.id} onClick={() => this.openModal(product)}>
                                            {/* this is hardcoded right now.. will definitely break when we deploy. need relative path */}
                                        <img     src={`http://localhost:3000/images/${product.image}`} alt={product.title}></img>
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
                    }
 
                </Fade>

                {product && <Modal isOpen={true} onRequestClose={this.closeModal}>
                    <Zoom>
                        <button onClick={this.closeModal} className="close-modal">
                            x
                        </button>
                        <div className="product-details">
                            <img src={product.image} alt={product.title}></img>
                            <div className="product-details-description">
                                <p><strong>{product.title}</strong></p>
                                <p>{product.description}</p>
                                <div className="product-price">
                                    <div>{formatCurrency(product.price)}</div>
                                    <button className="button-primary" onClick={() => {
                                        this.props.addToCart(product);
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

export default connect((state) => ({ products: state.products.items }), {fetchProducts})(Products);