import React, { Component } from "react";
import { connect } from "react-redux";

import { huyGheAction } from "../redux/action/movie";
class DatGhe extends Component {
  render() {
    return (
      <div>
        <div>
          <button className="gheDuocChon mt-3"></button>{" "}
          <span className="text-light" style={{ fontSize: "30px" }}>
            Ghế đã đặt
          </span>
          <br />
          <button className="gheDangChon mt-3"></button>{" "}
          <span className="text-light" style={{ fontSize: "30px" }}>
            Ghế đang chọn đặt
          </span>
          <br />
          <button className="ghe mt-3" style={{ marginLeft: "0" }}></button>
          <span
            className="text-light"
            style={{ fontSize: "30px", marginLeft: "5px" }}
          >
            Ghế chưa đặt
          </span>
        </div>

        <div>
          <table className="table mt-5 text-light">
            <thead>
              <tr style={{ fontSize: "30px" }}>
                <th> Số ghế </th>
                <th> Giá </th>
                <th> Hủy </th>
              </tr>
            </thead>
            <tbody className="text-warning">
              {this.props.dsGheDangDat.map((gheDangDat, index) => {
                return (
                  <tr key={index}>
                    <td>{gheDangDat.soGhe}</td>
                    <td>{gheDangDat.gia}</td>
                    <td>
                      <button
                        className="btn btn-danger"
                        onClick={() =>
                          this.props.dispatch(huyGheAction(gheDangDat.soGhe))
                        }
                      >
                        Hủy
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
            <tfoot>
              <td></td>
              <td>Tổng tiền</td>
              <td>
                {this.props.dsGheDangDat.reduce((tongTien, gheDangDat) => {
                  return (tongTien += gheDangDat.gia);
                }, 0)}
              </td>
            </tfoot>
          </table>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    dsGheDangDat: state.datVeReducer.dsGheDangDat,
  };
};

export default connect(mapStateToProps, null)(DatGhe);
