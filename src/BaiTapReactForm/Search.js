import React, { Component } from "react";
import { connect } from "react-redux/es/exports";

class Search extends Component {
  render() {
    const { onChangeSearch } = this.props;

    return (
      <div className="col-4 mt-4">
        <label htmlFor="search" className="form-label">
          Tìm kiếm:
        </label>
        <input
          className="form-control"
          type="text"
          name="search"
          id="search"
          placeholder="Nhập keyword..."
          onChange={(evt) => onChangeSearch(evt.target.value)}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onChangeSearch: (name) => {
      const action = { type: "SEARCH_SV", name };
      dispatch(action);
    },
  };
};

export default connect(null, mapDispatchToProps)(Search);
