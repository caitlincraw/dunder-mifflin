import React from 'react';
import Filter from './Filter';
import Products from './Products';
import Cart from './Cart';
import './PaperStore.css';
import { fetchProducts, addProduct, removeProduct, sortProducts } from '../../redux/actions/productActions';
import { connect } from "react-redux";
import { Redirect } from 'react-router-dom';

class PaperStore extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            loggedIn: true,
            cartItems: localStorage.getItem("cartItems")? JSON.parse(localStorage.getItem("cartItems")): [],
            sort: "",
        };
        this.addProductToCart = this.addProductToCart.bind(this);
        this.removeProductFromCart = this.removeProductFromCart.bind(this);
        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
        this.sortItemsInStore = this.sortItemsInStore.bind(this);
    }

    componentDidMount() {
        this.props.fetchProducts();
    }

    handleOpenModal () {
        this.setState({ showModal: true });
    }
      
    handleCloseModal () {
        this.setState({ showModal: false });
    }

    // removeFromCart = (product) => {
    //     const cartItems = this.state.cartItems.slice();
    //     this.setState({ cartItems: cartItems.filter((x) => x.id !== product.id)
    //     });

    //     localStorage.setItem("cartItems", JSON.stringify(cartItems.filter((x) => x.id !== product.id)));
    // }

    // addToCart = (product) => {
    //     const cartItems = this.state.cartItems.slice();
    //     let alreadyInCart = false;

    //     cartItems.forEach(item => {
    //         if(item.id === product.id){
    //             item.count++;
    //             alreadyInCart = true;
    //         }
    //     });

    // //     if(!alreadyInCart){
    //         cartItems.push({...product, count: 1});
    //     }
    //     this.setState({cartItems});

    //     localStorage.setItem("cartItems", JSON.stringify(cartItems));
    // };

    addProductToCart = product => {
        if (this.props.auth.isLoggedIn) {
            this.setState((state) => ({
                loggedIn: true,
            }))

            this.props.addProduct(product)
            
        } else {
            // alert("You are not logged in.");
            this.setState((state) => ({
                loggedIn: false,
            }))
        }
    }

    removeProductFromCart = product => {
        this.props.removeProduct(product)
    }

    sortItemsInStore = (e) => {
        this.props.sortProducts(e.target.value)
    }

    render() {

    return (
            <div className="store">

                <div className="store__main">
                    <Filter 
                        count={this.props.products.length}
                        sort={this.state.sort}
                        sortProducts={this.sortItemsInStore}
                    />
                    {this.props.products && this.props.products.length > 0 && (
                        <Products
                            productos={this.props.products}
                            addToCart={this.addProductToCart}
                        />
                    )}
                </div>

                <div className="store__sidebar">
                    {this.props.cartItems && this.props.cartItems.length > 0 && this.state.loggedIn && (
                        <Cart 
                            removeFromCart={this.removeProductFromCart}
                        />
                    )}
                    {!this.state.loggedIn && <Redirect to="/login" push={true} />}
                </div>

            </div>

        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth,
        products: state.products,
        cartItems: state.cart
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchProducts: () => dispatch(fetchProducts()),
        addProduct: (product) => dispatch(addProduct(product)),
        removeProduct: (product) => dispatch(removeProduct(product)),
        sortProducts: (sortOrder) => dispatch(sortProducts(sortOrder))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PaperStore);