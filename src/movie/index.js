import React, { Component } from "react";
import "../App.css";
import DatGhe from "./DatGhe";
import danhSachGhe from "./data/danhSachGhe.json";
import HangGhe from "./HangGhe";

export default class BookingMovie extends Component {
  renderHangGhe = () => {
    return danhSachGhe.map((hangGhe, index) => {
      return (
        <div key={{ index }} >
          <HangGhe hangGhe={hangGhe} soHangGhe={index}/>
        </div>
      );
    });
  };
  render() {
    return (
      <div
        style={{
          position: "fixed",
          width: "100%",
          height: "100%",
          backgroundImage: "url(./img/bgmovie.jpg)",
          backgroundSize: "100%",
        }}
      >
        <div
          style={{
            position: "fixed",
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0,0,0,0.8)",
          }}
        >
          <div className="container-fluid">
            <div className="row  mt-2">
              <div className="col-8 text-center">
                <h1 className="text-light ">Đặt vé xem phim</h1>
                <div style={{ fontSize: "30px" }} className="text-light mt-2">
                  Màn hình
                </div>

                <div
                  className="mt-2"
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                  }}
                >
                  <div className="screen"></div>
                </div>
                {this.renderHangGhe()}
              </div>

              <div className="col-4 ">
                <h1 className="text-light text-center">
                  Danh sách ghế bạn chọn
                </h1>
                <DatGhe />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
