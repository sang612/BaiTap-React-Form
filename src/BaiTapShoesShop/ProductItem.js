import React, { Component } from "react";

export default class ProductItem extends Component {
  render() {
    const { product, setStateModal } = this.props;
    return (
      <div className="card">
        <img src={product.image} alt={product.name} />
        <div className="card-body">
          <h3 className="card-title">{product.name}</h3>
          <p className="card-text">{product.price} $</p>
          <p className="card-text">{product.shortDescription}</p>
          <button className="btn btn-dark " data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => setStateModal(product)}>
            Add to carts <i className="fa-solid fa-cart-shopping"></i>
          </button>
        </div>
      </div>
    );
  }
}
