import React, { Component } from "react";
import ProductItem from "./ProductItem";

export default class ProductList extends Component {
  render() {
    const { products, setStateModal } = this.props;
    return (
      <div className="row">
        {products.map((product) => {
          return (
            <div key={product.id} className="col-sm-4">
              <ProductItem product={product} setStateModal={setStateModal} />
            </div>
          );
        })}
      </div>
    );
  }
}
