import React, { Component } from "react";
import { connect } from "react-redux";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      values: {
        id: "",
        name: "",
        phone: "",
        email: "",
      },
    };
  }

  handleSubmit = (evt) => {
    //ngan chan hanh vi reload form
    evt.preventDefault();

    //them user tu object values
    if (this.props.sv.id) {
      this.props.onUpdateSV(this.props.sv.id, this.state.values);
    } else {
      const sv = { ...this.state.values };

      //dispatch action CREATE_USER
      this.props.onCreateSV(sv);
    }
  };

  handleChange = (evt) => {
    const { value, name } = evt.target;
    //lay value cua input va set state
    this.setState((state) => ({
      values: {
        ...state.values,
        [name]: value,
      },
    }));
  };

  componentDidUpdate(prevProps, prevState) {
    //vi ham componentDidUpdate luon luon dc chay sau khi props hoac state thay doi
    // ta se kiem tra neu props user thay doi se set state lai cho object values
    if (prevProps.sv.id !== this.props.sv.id) {
      this.setState({ values: { ...this.props.sv } });
    }
  }

  render() {
    const { values } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <div className="d-flex flex-wrap">
          <div className="mb-3 col-6 pe-3">
            <label htmlFor="id" className="form-label">
              Mã SV
            </label>
            <input
              type="text"
              className="form-control"
              id="id"
              name="id"
              onChange={this.handleChange}
              value={values.id}
            />
          </div>
          <div className="mb-3 col-6 pe-3">
            <label htmlFor="name" className="form-label">
              Họ và Tên
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={values.name}
              onChange={this.handleChange}
            />
          </div>
          <div className="mb-3 col-6 pe-3">
            <label htmlFor="phone" className="form-label">
              Số điện thoại
            </label>
            <input
              type="text"
              className="form-control"
              id="phone"
              name="phone"
              value={values.phone}
              onChange={this.handleChange}
            />
          </div>
          <div className="mb-3 col-6 pe-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={values.email}
              onChange={this.handleChange}
            />
          </div>
        </div>
        <button type="submit" className="btn btn-success">
          Thêm sinh viên
        </button>
      </form>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    sv: state.sinhvien.selectedSV,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onCreateSV: (sv) => {
      const action = { type: "CREATE_SV", sv };
      dispatch(action);
    },

    onUpdateSV: (maSV, sv) => {
      const action = { type: "UPDATE_SV", maSV, sv };
      dispatch(action);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
