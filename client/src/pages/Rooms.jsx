import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import { Footer } from "../components/Footer";
import DateTime from "../components/common/DateTime";
// import axios from "axios";
import { axiosConfig } from "../axios";
const Rooms = () => {
  const { id } = useParams();
  const [room, setRoom] = useState(null);

  const getAllRoomDetail = async () => {
    try {
      const res = await axiosConfig.get(`/rooms/${id}`);
      setRoom(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getAllRoomDetail();
  }, []);
  return (
    <>
      <Navbar />
      <div className="container w-full flex gap-5 mt-3 mb-3">
        <div className="w-2/5 border border-900 p-3">
          <div className="">
            <div className="font-semibold text-lg mb-3 ">
              Vui lòng chọn ngày nhận phòng và trả phòng:
              <DateTime   />
            </div>

            <div>
              <p className="font-semibold mb-2" >
                Ngày nhận phòng:
                {/* {selectedDateRange[0]?.format("YYYY--MM--DD")} */}
              </p>
            </div>
            <div>
              <p className="font-semibold mb-2">
                Ngày trả phòng:
                {/* {selectedDateRange[1]?.format("YYYY--MM--DD")} */}
              </p>
            </div>
            {room &&      <div className="flex gap-3 mb-2 "> <p className="font-semibold"> Kiểu phòng : </p>  <p>{room.type}  </p> </div>  }
      

            <div className="font-semibold mb-5">
              Tổng tiền: giá 1 ngày nhân với số ngày
            </div>
            <div className=" w-full relative    "> 
              
              <p className="right-0  absolute  cursor-pointer w-2/4 bg-blue-900 text-white p-2 text-center text-lg font-semibold  rounded-3"> Đặt Phòng</p> 
            </div>
          </div>
        </div>
        <div className="w-3/4 p-3 border border-900">
          {room && (
            <div>
              <p className="font-semibold text-lg">Các thông tin liên quan :</p>
              <div className="flex justify-between mt-2">
                <p className="font-semibold text-lg"> Ảnh liên quan :</p>

                <div className="grid grid-cols-2 grid-rows-2 gap-2 p-3 w-2/3 ml- ">
                  {room.photo.map((element, i) => (
                    <img
                      src={element}
                      key={i}
                      alt=""
                      className="h-full w-full"
                    />
                  ))}
                </div>
              </div>
              <div className="flex gap-2 justify-between mb-3">
                <p className="font-semibold"> Ghi chú : </p>
                <p className="text-lg w-2/3 text-left ">
                  {room.description}{" "}
                </p>
              </div>
              <div className="flex gap-2 justify-between">
                <p className="font-semibold"> Thông tin thêm : </p>
                <ul className="flex w-2/3">
                  <li className="text-lg w-2/3 text-left ">
                    <i class="fa-solid fa-up-right-and-down-left-from-center"></i>
                    Rộng {room.size}
                  </li>
                  <li className="text-lg w-2/3 text-left ">
                    <i class="fa-solid fa-bed"></i>
                    {room.beds} giường
                  </li>
                  <li className="text-lg w-2/3 text-left">
                    <i class="fa-solid fa-user"></i>
                    {room.people} người lớn
                  </li>
                  <li className="text-lg w-2/3 text-left">
                    <i class="fa-solid fa-child"></i>
                    {room.children}trẻ em
                  </li>
                  <li className="text-lg w-2/3 text-left">
                    <i class="fa-solid fa-door-open"></i>
                    Phòng {room.roomNumber}
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Rooms;
