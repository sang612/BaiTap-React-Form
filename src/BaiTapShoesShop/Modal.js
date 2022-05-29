import React, { Component } from "react";

export default class Modal extends Component {
  render() {
    const { content } = this.props;
    if (!content) {
      console.log(123);
      return null;
    }

    return (
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                {content.name}
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <div className="row">
                <div className="col-4 d-flex align-items-center">
                  <img
                    src={content.image}
                    alt="{content.name}"
                    height="auto"
                    width="100%"
                  />
                </div>
                <div className="col-8 text-left">
                  <p> <b>Name</b> : {content.name}</p>
                  <p> <b>Id</b> : {content.id}</p>
                  <p> <b>Price</b> : {content.price}$</p>
                  <p> <b>Description</b> : {content.description}</p>
                  <p> <b>Quantity left</b> : {content.quantity}</p>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
