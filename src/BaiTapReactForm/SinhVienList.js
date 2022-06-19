import React, { Component } from "react";
import { connect } from "react-redux";

class SinhVienList extends Component {
  render() {
    const { svList, onSelectSV, onRemoveSV, searchList } = this.props;

    if (searchList === -1) {
      return (
        <table className="table mt-1">
          <thead className="bg-dark text-light">
            <tr>
              <th>Mã SV</th>
              <th>Họ tên</th>
              <th>Số điện thoại</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            <h2 key={1}>NOT FOUND</h2>
          </tbody>
        </table>
      );
    }

    return (
      <table className="table mt-1">
        <thead className="bg-dark text-light">
          <tr>
            <th>Mã SV</th>
            <th>Họ tên</th>
            <th>Số điện thoại</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {searchList.length > 0
            ? searchList.map((sv) => {
                return (
                  <tr key={sv.id}>
                    <td>{sv.id}</td>
                    <td>{sv.name}</td>
                    <td>{sv.phone}</td>
                    <td>{sv.email}</td>
                    <td>
                      <button
                        className="btn btn-primary mr-2"
                        onClick={() => onSelectSV(sv)}
                      >
                        Update
                      </button>
                      <button
                        className="btn btn-danger"
                        onClick={() => onRemoveSV(sv.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })
            : svList.map((sv) => {
                return (
                  <tr key={sv.id}>
                    <td>{sv.id}</td>
                    <td>{sv.name}</td>
                    <td>{sv.phone}</td>
                    <td>{sv.email}</td>
                    <td>
                      <button
                        className="btn btn-primary mr-2"
                        onClick={() => onSelectSV(sv)}
                      >
                        Update
                      </button>
                      <button
                        className="btn btn-danger"
                        onClick={() => onRemoveSV(sv.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    svList: state.sinhvien.svList,
    searchList: state.sinhvien.searchList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onRemoveSV: (id) => {
      const action = { type: "REMOVE_SV", id };
      dispatch(action);
    },

    onSelectSV: (sv) => {
      const action = { type: "SELECT_SV", sv };
      dispatch(action);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SinhVienList);
