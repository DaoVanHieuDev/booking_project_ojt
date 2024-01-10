import React, { useState, useEffect } from "react";
import { axiosConfig } from "../axios";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const FeatureedProperties = () => {
  // const { id } = useParams();

  const [hotels, setHotels] = useState([]);
  const getAllHotelsDetail = async () => {
    try {
      const res = await axiosConfig.get(`/hotels`);
      setHotels(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getAllHotelsDetail();
  }, []);



  return (
    <div className="flex justify-between w-full gap-4 flex-col sm:flex-row grid grid-cols-4 ">
      {hotels &&
        hotels.map((e, i) => (
          <Link
            to={`/hotels/${e.id}`}
            className="flex flex-col gap-2 shadow-lg border rounded-xl cursor-pointer"
          >
            <div className="p-3">
              <img
                className="w-full rounded-lg h-64 object-cover"
                src={e.photos[0]}
              />
            </div>
            <div className="p-3">
              <div className="flex justify-between">
                <span className="text-xl font-semibold"> {e.name}</span>
                <p className="bg-blue-500 rounded-lg text-white px-2 py-1 mr-2">
                  {e.rating}
                </p>
              </div>
              <div>
                {" "}
                <i class="fa-solid fa-location-dot"></i>{" "}
                <span className="font-semibold text-sm"> {e.address}</span>{" "}
              </div>

              <div className="flex justify-between">
                <p> Dreams m </p>
                <span> commet about </span>
              </div>
            </div>
          </Link>
        ))}
      {/* <div className="flex flex-col gap-2 shadow-lg border rounded-xl cursor-pointer">
        <div className="p-3">
          <img
            className="w-full rounded-lg h-64 object-cover"
            src="https://th.bing.com/th/id/OIP.-W7ijYs4m8p6HMrOvo0m0wHaE7?rs=1&pid=ImgDetMain"
          />
        </div>
        <div className="p-3">
          <div className="flex justify-between">
            <span className="text-xl font-semibold"> Tên Khách Sạn</span>
            <p className="bg-blue-500 rounded-lg text-white px-2 py-1 mr-2">
              8.9
            </p>
          </div>
          <span> Địa chỉ</span>
          <div className="flex justify-between">
            <p> Chỉ với 120</p>
            <span> commet about </span>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2 shadow-lg border rounded-xl cursor-pointer">
        <div className="p-3">
          <img
            className="w-full rounded-lg h-64 object-cover"
            src="https://th.bing.com/th/id/OIP.-W7ijYs4m8p6HMrOvo0m0wHaE7?rs=1&pid=ImgDetMain"
          />
        </div>
        <div className="p-3">
          <div className="flex justify-between">
            <span className="text-xl font-semibold"> Tên Khách Sạn</span>
            <p className="bg-blue-500 rounded-lg text-white px-2 py-1 mr-2">
              8.9
            </p>
          </div>
          <span> Địa chỉ</span>
          <div className="flex justify-between">
            <p> Chỉ với 120</p>
            <span> commet about </span>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2 shadow-lg border rounded-xl cursor-pointer">
        <div className="p-3">
          <img
            className="w-full rounded-lg h-64 object-cover"
            src="https://th.bing.com/th/id/OIP.-W7ijYs4m8p6HMrOvo0m0wHaE7?rs=1&pid=ImgDetMain"
          />
        </div>
        <div className="p-3">
          <div className="flex justify-between">
            <span className="text-xl font-semibold"> Tên Khách Sạn</span>
            <p className="bg-blue-500 rounded-lg text-white px-2 py-1 mr-2">
              8.9
            </p>
          </div>
          <span> Địa chỉ</span>
          <div className="flex justify-between">
            <p> Chỉ với 120</p>
            <span> commet about </span>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default FeatureedProperties;
