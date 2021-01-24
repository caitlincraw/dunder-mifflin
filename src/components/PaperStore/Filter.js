import React, { Component } from 'react';
import { connect } from 'react-redux';
import { sortProducts } from '../../redux/actions/productActions';

export default class Filter extends Component {
    render() {
        return(
            <div className="filter">
                <div className="filter-result">
                    <b>Dunder Mifflin Store |  {this.props.count} Products</b>
                </div>
{/* //                 <div className="filter-sort">
//                     Order{" "}
//                     <select value={this.props.sort} onChange={(e) => this.props.sortProducts(this.props.products, e.target.value)}>
//                         <option>Latest</option>
//                         <option value="lowest">Lowest</option>
//                         <option value="highest">Highest</option>
//                     </select>
//                 </div> */}
//             </div>