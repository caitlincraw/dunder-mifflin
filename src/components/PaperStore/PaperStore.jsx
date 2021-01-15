import React, { Component } from 'react';
import Filter from './Filter';
import Products from './Products';
import data from './data.json';


class PaperStore extends React.Component {

    constructor(){
        super();
        this.state = {
            products: data.products,
            cartItems: [],
            sort: ""
        };
    }

    addToCart = (product) => {
        const cartItems = this.state.cartItems.slice();
        let alreadyInCart = false;

        cartItems.forEach(item => {
            if(item._id === product._id){
                item.count++;
                alreadyInCart = true;
            }
        });

        if(!alreadyInCart){
            cartItems.push({...product, count: 1});
        }
    }

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
                    <Products products={this.state.products}></Products>
                </div>

                <div className="store__sidebar">
                    Cart Items
                </div>

            </div>

        )
    }
}

export default (PaperStore)
