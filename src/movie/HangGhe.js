import React, { Component } from "react";
import { connect } from "react-redux";
import {datGheAction} from '../redux/action/movie'

class HangGhe extends Component {
  renderGhe = () => {
    return this.props.hangGhe.danhSachGhe.map((ghe, index) => {
      let cssDatGhe = "";
      let disable = false;
      if (ghe.daDat) {
        cssDatGhe = "gheDuocChon";
        disable = true;
      }
      let cssGheDangDat = "";
      let indexGheDangDat = this.props.dsGheDangDat.findIndex(
        (gheDangDat) => gheDangDat.soGhe === ghe.soGhe
      );
      if (indexGheDangDat !== -1) {
        cssGheDangDat = "gheDangChon";
      }
      return (
        <button
          disabled={disable}
          className={`ghe ${cssDatGhe} ${cssGheDangDat} `}
          key={index}
          onClick={() => this.props.datGhe(ghe)}
        >
          {ghe.soGhe}
        </button>
      );
    });
  };
  renderSoHang = () => {
    return this.props.hangGhe.danhSachGhe.map((hang, index) => {
      return <button className="rowNumber px-3">{hang.soGhe}</button>;
    });
  };
  renderHangGhe = () => {
    if (this.props.soHangGhe === 0) {
      return (
        <div>
          {this.props.hangGhe.hang} {this.renderSoHang()}
        </div>
      );
    } else {
      return (
        <div>
          {this.props.hangGhe.hang} {this.renderGhe()}
        </div>
      );
    }
  };

  render() {
    return (
      <div
        className="text-light text-left mt-1"
        style={{ fontSize: "15px", marginLeft: "155px" }}
      >
        {this.renderHangGhe()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    dsGheDangDat: state.datVeReducer.dsGheDangDat,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    datGhe: (ghe) => {
      dispatch(datGheAction(ghe));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HangGhe);
