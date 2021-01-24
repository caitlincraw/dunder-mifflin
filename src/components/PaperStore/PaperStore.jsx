import React from 'react';
import Filter from './Filter';
import Products from './Products';
import Cart from './Cart';
import './PaperStore.css';
import { fetchProducts, addProduct, removeProduct } from '../../redux/actions/productActions';
import { connect } from "react-redux";

class PaperStore extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            cartItems: localStorage.getItem("cartItems")? JSON.parse(localStorage.getItem("cartItems")): [],
            sort: "",
        };
        this.addProductToCart = this.addProductToCart.bind(this);
        this.removeProductFromCart = this.removeProductFromCart.bind(this);
    }

    componentDidMount() {
        this.props.fetchProducts();
    }

    createOrder = (order) => {
        alert("Need to save order for " + order.name);
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
    //         if(item._id === product.id){
    //             item.count++;
    //             alreadyInCart = true;
    //         }
    //     });

    //     if(!alreadyInCart){
    //         cartItems.push({...product, count: 1});
    //     }
    //     this.setState({cartItems});

    //     localStorage.setItem("cartItems", JSON.stringify(cartItems));
    // };

    addProductToCart = product => {
        this.props.addProduct(product)
    }

    removeProductFromCart = product => {
        this.props.removeProduct(product)
    }

    sortProducts = (event) => {
        const sort = event.target.value;
        this.setState((state) => ({
            sort: sort,
            products: this.props.products.slice().sort((a, b) => (
                sort === "lowest"?
                ((a.price > b.price)? 1:-1):
                sort === "highest"?
                ((a.price < b.price)? 1:-1):
                ((a._id > b._id)? 1:-1)
            ))
        }))
    }

    render() {
    return (
            <div className="store">

                <div className="store__main">
                    <Filter 
                        count={this.props.products.length}
                        sort={this.state.sort}
                        sortProducts={this.sortProducts}
                    />
                    {this.props.products && this.props.products.length > 0 && (
                        <Products
                            productos={this.props.products}
                            addToCart={this.addProductToCart}
                        />
                    )}
                </div>

                <div className="store__sidebar">
                    {this.props.cartItems && this.props.cartItems.length > 0 && (
                        <Cart 
                            removeFromCart={this.props.removeProductFromCart}
                            createOrder={this.createOrder}
                        />
                    )}
                </div>

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

const mapDispatchToProps = (dispatch) => {
    return {
        fetchProducts: () => dispatch(fetchProducts()),
        addProduct: (product) => dispatch(addProduct(product)),
        removeProduct: (product) => dispatch(removeProduct(product)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PaperStore);