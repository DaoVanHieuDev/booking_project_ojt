// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect, Children } from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import { Footer } from "../components/Footer";
import { useTranslation } from "react-i18next";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

// import axiosConfig from "../axios";
const List = () => {
  const { t } = useTranslation();
  const { id } = useParams(); // Lấy id từ URL
  const [hotelData, setHotelData] = useState(null);
  const [roomsData, setRoomsData] = useState(null);
  useEffect(() => {
    const fetchDataHotel = async () => {
      try {
        await axios
          .get(`http://localhost:8000/hotels/${id.trim()}`)
          .then((res) => setHotelData(res.data))
          .catch((err) => console.log(err));
      } catch (error) {}
    };
    fetchDataHotel();
  }, [id]);

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        await axios
          .get(`http://localhost:8000/rooms?hotelId=${id}`)
          .then((res) => setRoomsData(res.data))
          .catch((err) => console.log(err));
      } catch (error) {
        console.log(error, "lỗi rồi ba ơi");
      }
    };
    fetchRooms();
  }, [id]);
  return (
    <div>
      <Navbar />
      {/* <Header type="list" />   */}

      <div className=" content_hotel container w-full mx-auto items-center mt-5">
        <div className="middel_hotel">
          {hotelData && (
            <div className="header_content pt-2">
              <div className="flex justify-between ">
                <div className="flex justify-between ">
                  <p className="font-bold text-2xl "> {hotelData.name}</p>
                  <div className="absolute mt-1 text-xl right-3/4">
                    <i className="fa-regular fa-star"></i> {hotelData.rating}
                  </div>
                </div>
                <div className="flex gap-3">
                  <i className="fa-regular fa-heart text-3xl cursor-pointer "></i>
                  <p className="bg-blue-900 text-white font-semibold text-lg p-2 rounded cursor-pointer">
                    Đặt ngay
                  </p>
                </div>
              </div>
              <div className="gap-2 flex relative">
                <i className="fa-solid fa-location-dot absolute mt-2 "></i>
                <p className="text-lg ml-4"> {hotelData.address}</p>
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
                      src={hotelData.photos[0]}
                      alt=""
                    />
                    <img
                      style={{
                        height: "220px",
                        borderBottomLeftRadius: "15px",
                        width: "100%",
                      }}
                      src={hotelData.photos[1]}
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
                      src={hotelData.photos[2]}
                      alt=""
                    />
                    <img
                      style={{
                        height: "220px",
                        width: "100%",
                      }}
                      src={hotelData.photos[3]}
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
                      src={hotelData.photos[4]}
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <p className="text-2xl font-semibold">
                    Các tiện nghi của khách sạn
                  </p>

                  <ul className="width-full flex gap-3">
                    <li className="text-lg  font-semibold">
                      <i class="fa-brands fa-optin-monster"></i>
                      {hotelData.amenities[0]} {hotelData.amenities[1]}{" "}
                      {hotelData.amenities[2]} {hotelData.amenities[3]}{" "}
                      {hotelData.amenities[4]}
                      {hotelData.amenities[5]}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          )}
          <div className="table_hotel">
            <p className="font-bold text-2xl">Phòng trống</p>

            <table class="table">
              <caption>List of users</caption>
              <thead>
                <tr>
                  <th scope="col">Dreams</th>
                  <th scope="col">Số Phòng</th>
                  <th scope="col">Kiểu phòng</th>
                  <th scope="col">Những tiện ích </th>
                  <th scope="col">Thông tin</th>
                  <th scope="col">Đặt phòng</th>
                </tr>
              </thead>
              <tbody>
                {roomsData &&
                  roomsData.map((e, i) => (
                    <tr>
                      <th scope="row">#{i + 1} </th>
                      <td>{e.roomNumber}</td>
                      <td>
                        <i class="fa-solid fa-filter"></i> {e.type}
                      </td>
                      <td>{e.description}</td>
                      <td>
                        <div>
                          <i class="fa-solid fa-maximize"></i>
                          {e.size}
                        </div>
                        <div>
                          <i class="fa-solid fa-bed"></i> {e.beds}
                        </div>
                        <div>
                          <i class="fa-solid fa-user"></i> {e.people}
                        </div>
                        <div>
                          <i class="fa-solid fa-child"></i>
                          {e.children}
                        </div>
                      </td>
                      <td className="w-64">
                        <p>
                          <i class="fa-solid fa-money-bill"></i> Giá phòng :
                          {e.price}
                        </p>
                        {/* <Link to={{`/payment/${e.id}`}}> */}
                        <p className="bg-blue-900  text-white font-semibold text-lg p-2 rounded cursor-pointer mt-3">
                          Đặt phòng
                        </p>
                        {/* </Link> */}
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
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
