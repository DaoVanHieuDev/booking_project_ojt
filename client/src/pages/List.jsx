// eslint-disable-next-line no-unused-vars
import React from "react";
import Navbar from "../components/navbar/Navbar";
import Header from "../components/header/Header";
import { Footer } from "../components/Footer/Footer";
const List = () => {
  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className=" content_hotel container w-full mx-auto items-center">
        <div className="middel_hotel">
          <div className="header_content pt-2">
            <div className="flex justify-between">
              <div className="flex  gap-5">
                <p className="font-bold text-2xl "> Tên Khách Sạn</p>
                <div> sao </div>
              </div>
              <div className="flex gap-3">
                <i className="fa-regular fa-heart text-3xl "></i>
                <p className="bg-blue-900 text-white font-semibold text-lg p-2">
                  Đặt ngay
                </p>
              </div>
            </div>
            <div className="gap-2 flex">
              <i className="fa-solid fa-location-dot"></i> <p> địa chỉ</p>
            </div>
            <div className="w-full">
              <div className="flex gap-x-4 ">
                <div className="w-1/4 ">
                  <img
                    style={{
                      marginBottom: "20px",
                      borderTopLeftRadius: "15px",
                      height: "220px",
                      width: "100%",
                    }}
                    src="https://cf.bstatic.com/xdata/images/hotel/max500/449568033.jpg?k=69176ef188440f701ffc1c40364e8bd1b8f995b056bf076b07b47c6eb6c9dab7&o=&hp=1"
                    alt=""
                  />
                  <img
                    style={{
                      height: "220px",
                      borderBottomLeftRadius: "15px",
                      width: "100%",
                    }}
                    src="https://cf.bstatic.com/xdata/images/hotel/max500/449568033.jpg?k=69176ef188440f701ffc1c40364e8bd1b8f995b056bf076b07b47c6eb6c9dab7&o=&hp=1"
                    alt=""
                  />
                </div>
                <div className="w-1/4">
                  <img
                    style={{
                      marginBottom: "20px",
                      height: "220px",
                      width: "100%",
                    }}
                    src="https://cf.bstatic.com/xdata/images/hotel/max500/449568033.jpg?k=69176ef188440f701ffc1c40364e8bd1b8f995b056bf076b07b47c6eb6c9dab7&o=&hp=1"
                    alt=""
                  />{" "}
                  <img
                    style={{
                      height: "220px",
                      width: "100%",
                    }}
                    src="https://cf.bstatic.com/xdata/images/hotel/max500/449568033.jpg?k=69176ef188440f701ffc1c40364e8bd1b8f995b056bf076b07b47c6eb6c9dab7&o=&hp=1"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    style={{
                      marginBottom: "10px",
                      borderTopRightRadius: "15px",
                      borderBottomRightRadius: "15px",
                      height: "460px",
                      width: "700px",
                    }}
                    src="https://cf.bstatic.com/xdata/images/hotel/max500/449568033.jpg?k=69176ef188440f701ffc1c40364e8bd1b8f995b056bf076b07b47c6eb6c9dab7&o=&hp=1"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="table_hotel">
            <p className="font-bold text-2xl">
              Phòng trống
              <table>
                <head>
                  <tr>
                    <th> 1</th>
                    <th> 1</th>
                    <th> 1</th>
                    <th> 1</th>
                    <th> 1</th>
                  </tr>
                </head>
                <tbody>
                  <tr>
                    <td> 1</td>
                    <td> 1</td>
                    <td> 1</td>
                    <td> 1</td>
                  </tr>
                </tbody>
              </table>
            </p>
          </div>
          <div className="evaluate"></div>
          <div></div>
          <div></div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default List;
