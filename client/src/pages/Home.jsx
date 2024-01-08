// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Featured from "../components/Featured";
import FeatureedProperties from "../components/FeatureedProperties";
import { Footer } from "../components/Footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";
import { Link } from "react-router-dom";
import Adu from "../components/common/Adu";
import Rooms from "./Rooms";

const Home = () => {
  const [selectedDateRange, setSelectedDateRange] = useState([]);
  const [formFor, setFormFor] = useState([]);
  const [submittedForm, setSubmittedForm] = useState(null);
  const [inputValue, setInputValue] = useState("");
  const [contact, setContact] = useState("");

  const [options, setOptions] = useState({
    adult: 0,
    children: 0,
    room: 1,
  });

  const handleRangePickerChange = (dates) => {
    setSelectedDateRange(dates);
  };

  const handleSendFor = async () => {
    const formData = {
      attract: inputValue,
      options: [options.adult, options.children, options.room],
      date: [
        selectedDateRange[0]?.format("YYYY--MM--DD"),
        selectedDateRange[1]?.format("YYYY--MM--DD"),
      ],
    };
    setSubmittedForm(formData);
    setFormFor(formData);

    try {
      const hotelsResponse = await axios.get("http://localhost:8000/hotels");
      const ordersResponse = await axios.get("http://localhost:8000/orders");

      const hotels = hotelsResponse.data;
      const orders = ordersResponse.data;

      const matchedHotels = hotels.filter(
        (hotel) => hotel.attract === formData.attract
      );

      const detailedHotelInfo = matchedHotels.map((hotel) => {
        const matchedOrders = orders.filter(
          (order) =>
            order.hotel_id === hotel.id &&
            formData.date[0] <= order.checkOutDate &&
            formData.date[1] >= order.checkInDate &&
            order.people >= formData.options[0] &&
            order.children <= formData.options[1]
        );
        return {
          hotel,
          bookings:
            matchedOrders.length > 0 ? matchedOrders : "Không có đơn đặt lịch",
        };
      });
      setContact(detailedHotelInfo);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  console.log(contact);

  return (
    <>
      <Navbar />
      <Header
        handleRangePickerChange={handleRangePickerChange}
        handleSendFor={handleSendFor}
        formFor={formFor}
        selectedDateRange={selectedDateRange}
        options={options}
        setOptions={setOptions}
        setInputValue={setInputValue}
        inputValue={inputValue}
      />

      <div className="container mx-auto mt-12 flex flex-col gap-4 items-center justify-center rounded-t-xl	">
        {contact ? (
          <div className="flex w-full flex-left gap-8  border border-sky-600">
            {contact.map((e, i) => (
              <div
                key={i}
                className="w-96  rounded-lg border border-slate-900 "
              >
                <Link to={`/hotels/${e.hotel.id}`}>
                  <div className="p-3 relative">
                    <img
                      style={{ borderRadius: "10px" }}
                      src={e.hotel.photos[0]}
                      alt=""
                    />
                    <div className="bg-white rounded-full absolute top-6 right-8 w-9 h-9 text-center cursor-pointer">
                      <i className="fa-regular fa-heart text-2xl "></i>
                    </div>
                  </div>
                  <div className="p-3">
                    <div className=" flex justify-between w-full ">
                      <div className="flex gap-3">
                        <div className="text-2xl font-semibold">
                          {e.hotel.name}
                        </div>
                        <div>
                          <i className="fa-solid fa-star"></i> {e.hotel.rating}{" "}
                        </div>
                      </div>
                      <div>
                        <i className="fa-solid fa-location-dot"></i>{" "}
                        {e.hotel.attract}{" "}
                      </div>
                    </div>
                    <div className="mt-2">
                      <i className="fa-solid fa-house"></i> {e.hotel.address}{" "}
                    </div>
                    <div className="flex justify-between mt-2">
                      <div>
                        <i className="fa-solid fa-brush mr-3"></i>
                        {e.hotel.amenities[0]},{e.hotel.amenities[1]},
                        {e.hotel.amenities[2]}
                      </div>
                      <div className="text-white bg-blue-700 h-10 p-2 rounded-lg text-lg font-semibold  cursor-pointer">
                        Xem chỗ trống{" "}
                        <i className="fa-solid fa-chevron-right"></i>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        ) : (
          <>
            <div className=" w-full">
              <img
                className="w-full"
                src="https://ik.imagekit.io/tvlk/image/imageResource/2024/01/01/1704095975557-55fc401feac1cacdce038b4f0cd54dbe.png?tr=q-75,w-1280"
                alt=""
              />
            </div>
            <div className="text-3xl w-full">
              <img
                className="w-full"
                src="https://ik.imagekit.io/tvlk/image/imageResource/2023/12/20/1703036383694-89e163c8c59b70d884359bba236fe840.jpeg?tr=q-75,w-1280"
                alt=""
              />
            </div>
          </>
        )}
        <Featured />
        <div className="text-3xl w-full">
          <h1 className="text-3xl font-bold "> Dreams</h1>
          <Rooms />
        </div>
        <div className="text-3xl w-full">
          <h1 className="text-3xl font-bold "> Love Home</h1>
        </div>
        <FeatureedProperties />
      </div>
      <Footer />
    </>
  );
};

export default Home;
