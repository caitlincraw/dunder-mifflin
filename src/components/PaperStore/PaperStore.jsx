import React from 'react';
import Filter from './Filter';
import Products from './Products';
import axios from 'axios';
import Cart from './Cart';
import data from './data.json';

class PaperStore extends React.Component {

    constructor(){
        super();
        this.state = {
            products: [],
            cartItems: localStorage.getItem("cartItems")? JSON.parse(localStorage.getItem("cartItems")): [],
            sort: ""
        };
    }

    componentDidMount() {
        // TBD want to add isLoaded to state and make sure do conditional rendering whether or not the items are loaded yet
        const getPaper = () => {
            axios({
                method: 'GET',
                withCredentials: true,
                url: "http://localhost:1725/products/all",
            }).then((res) => { 
                this.setState({
                    products: res.data,
                    cartItems: localStorage.getItem("cartItems")? JSON.parse(localStorage.getItem("cartItems")): [],
                    sort: ""
                })
                console.log(res.data);
            });
        };

        getPaper();
    }

    removeFromCart = (product) => {
        const cartItems = this.state.cartItems.slice();
        this.setState({ cartItems: cartItems.filter((x) => x._id !== product.id)
        });

        localStorage.setItem("cartItems", JSON.stringify(cartItems.filter((x) => x._id !== product.id)));
    }

    addToCart = (product) => {
        const cartItems = this.state.cartItems.slice();
        let alreadyInCart = false;

        cartItems.forEach(item => {
            if(item._id === product.id){
                item.count++;
                alreadyInCart = true;
            }
        });

        if(!alreadyInCart){
            cartItems.push({...product, count: 1});
        }
        this.setState({cartItems});

        localStorage.setItem("cartItems", JSON.stringify(cartItems));
    };

    sortProducts = (event) => {
        const sort = event.target.value;
        console.log(event.target.value);
        this.setState((state) => ({
            sort: sort,
            products: this.state.products.slice().sort((a, b) => (
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
                        count={this.state.products.length}
                        sort={this.state.sort}
                        sortProducts={this.sortProducts}
                    />
                    <Products 
                        products={this.state.products}
                        addToCart={this.addToCart}>
                    </Products>
                </div>

                <div className="store__sidebar">
                    <Cart 
                        cartItems={this.state.cartItems}
                        removeFromCart={this.removeFromCart}
                     />
                </div>

            </div>

        )
    }
}

export default (PaperStore)
