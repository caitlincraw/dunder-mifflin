import React, { Component } from 'react';
import Products from './Products';
import data from './data.json';


class PaperStore extends React.Component {

    constructor(){
        super();
        this.state = {
            products: data.products,
        };
    }

    render() {
    return (
            <div className="store">

                <div className="store__main">
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
