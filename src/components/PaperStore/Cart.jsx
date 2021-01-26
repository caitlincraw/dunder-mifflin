import React, { Component } from 'react';
import formatCurrency from './util';
import Fade from 'react-reveal/Fade';
import { connect } from "react-redux";
import Modal from 'react-modal';
import Zoom from 'react-reveal/Zoom';
import michael from '../images/michael_scott.jpg';
const { REACT_APP_ORIGIN } = process.env;

const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'
    }
  };

class Cart extends Component {
    constructor(props){
        super(props);
        this.state = { 
            showCheckout: false,
			isModalOpen: false,
		};

		// bind functions
		this.closeModal = this.closeModal.bind(this);
		this.openModal = this.openModal.bind(this);
	}

    // open modal (set isModalOpen, false)
	openModal() {
		this.setState({
			isModalOpen: true
		});
	}

    // close modal (set isModalOpen, true)
	closeModal() {
		this.setState({
			isModalOpen: false
		});
    }
    
    // checkoutOnClick() {
    //     this.setState({isModalOpen: true})
    //     // clear cart here

    // }

    render() {

        const { cartItems } = this.props;

        return (
            <div>
                
                {cartItems && (
                    <div className="cart cart-header">
                        {`You have ${cartItems.length} ${cartItems.length > 1 ? 'items' : 'item'} in the cart`}
                    </div>
                )}
                
                <div>
                    <div className="cart">
                        <Fade left cascade>
                            <ul className="cart-items">
                                {cartItems.map(item =>(
                                    <li key={item.id}>
                                        <div>
                                            <img src={`${REACT_APP_ORIGIN}/images/${item.image}`} alt={item.title}></img>
                                        </div>
                                        <div>
                                            <div>{item.title}</div>
                                            <div className="right">
                                                {formatCurrency(item.price)} 
                                                <button className="button" onClick={() => this.props.removeFromCart(item.id)}>
                                                    Remove
                                                </button> 
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </Fade>
                    </div>

                    {cartItems.length !== 0 && (
                        <div>
                            <div className="cart">
                                <div className="total">
                                    {cartItems && (<div>
                                        Total: {" "}
                                        {formatCurrency(
                                            cartItems.reduce((a, c) => a + c.price, 0)
                                        )}
                                    </div>)}
                                    <button 
                                        onClick={() => {this.setState({isModalOpen: true})}}
                                        className="button-primary">
                                            Checkout
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}

                </div>

                <Modal 
                    isOpen={this.state.isModalOpen} 
                    onRequestClose={this.closeModal}
                    style={customStyles}
                >
                    <Zoom>
                        <button onClick={this.closeModal} className="close-modal">
                            x
                        </button>
                        <h3>Thanks for trying to buy paper, but this is not a real website!</h3>
                        <img className="michael" src={ michael } alt="picture of Michael Scott in front of a white board" />
                    </Zoom>
                </Modal>

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.products,
        cartItems: state.cart
    };
};

export default connect(mapStateToProps, null)(Cart);