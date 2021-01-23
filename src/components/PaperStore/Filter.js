import React, { Component } from 'react';

export default class Filter extends Component {
    render() {
        return(
            <div className="filter">
                <div className="filter-result">
                    <b>Dunder Mifflin Store |  {this.props.count} Products</b>
                </div>
                <div className="filter-sort">
                    Order{" "}
                    <select value={this.props.sort} onChange={this.props.sortProducts}>
                        <option>Latest</option>
                        <option value="lowest">Lowest</option>
                        <option value="highest">Highest</option>
                    </select>
                </div>
            </div>
        )
    }
}