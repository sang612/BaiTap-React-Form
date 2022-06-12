import React, { Component } from "react";
import { connect } from "react-redux";

class TaiXiu extends Component {
  handleSelect = (selected) => {
    this.props.getUserSelected(selected);
  };

  render() {
    const { xucxacList } = this.props;

    return (
      <div className="d-flex flex-rows justify-content-between">
        <div>
          <button
            className="nut"
            onClick={() => {
              this.handleSelect("tai");
            }}
          >
            <h2>TÀI</h2>
          </button>
        </div>
        <div>
          {xucxacList.length > 0 && (
            <div>
              <img
                src={require("../assets/img/video_19_game_xuc_xac/" +
                  xucxacList[0] +
                  ".png")}
                alt=""
                width="50px"
                height="auto"
              />
              <img
                src={require("../assets/img/video_19_game_xuc_xac/" +
                  xucxacList[1] +
                  ".png")}
                alt=""
                width="50px"
                height="auto"
              />
              <img
                src={require("../assets/img/video_19_game_xuc_xac/" +
                  xucxacList[2] +
                  ".png")}
                alt=""
                width="50px"
                height="auto"
              />
            </div>
          )}
        </div>
        <div>
          <button
            className="nut"
            onClick={() => {
              this.handleSelect("xiu");
            }}
          >
            <h2>XỈU</h2>
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    xucxacList: state.xucxac.xucxacList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getUserSelected: (selected) => {
      const action = { type: "USER_SELECTED", selected };
      dispatch(action);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TaiXiu);
