import React, { Component } from "react";
import ProductList from "./ProductList";
import data from "./data.json";
import Modal from "./Modal";

export default class ShoesShop extends Component {
  state = {
    productDetail: null,
  };

  setStateModal = (product) => {
    console.log(product);

    this.setState({
      productDetail: product,
    });
  };

  render() {
    return (
      <div className="container">
        <h1 className="text-center">Shoes Shop</h1>
        <ProductList products={data} setStateModal={this.setStateModal} />
        <hr />
        <Modal content={this.state.productDetail} />
      </div>
    );
  }
}
