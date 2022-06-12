import React, { Component } from "react";
import { connect } from "react-redux";

class Info extends Component {
  handleClick = () => {
    this.props.createRandom();
    this.props.checkResult();
  };

  render() {
    const { userSelected, win, total, result } = this.props;

    return (
      <div>
        <p>
          BẠN CHỌN: <span style={{ color: "#eb0f0f" }}>{userSelected} </span>
        </p>

        {result.length > 0 && (
          <p>
            Kết Quả: <span style={{ color: "#eaff00" }}>{result} </span>
          </p>
        )}

        <p>
          Số bàn thắng: <span style={{ color: "#0feb1a" }}>{win}</span>
        </p>
        <p>
          Tổng số bàn chơi: <span style={{ color: "#0f4feb" }}>{total}</span>
        </p>
        <button
          className="btn btn-success"
          onClick={() => {
            this.handleClick();
          }}
        >
          Play game
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    xucxacList: state.xucxac.xucxacList,
    userSelected: state.xucxac.selected,
    win: state.xucxac.win,
    total: state.xucxac.total,
    result: state.xucxac.result,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createRandom: () => {
      const action = { type: "CREATE_RANDOM" };
      dispatch(action);
    },

    checkResult: () => {
      const action = { type: "CHECK_RESULT" };
      dispatch(action);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Info);
