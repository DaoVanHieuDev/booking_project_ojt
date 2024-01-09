import React, { useState, useEffect } from "react";
import axios from "axios";
import { axiosConfig } from "../axios";
import { useParams, useLocation } from "react-router-dom";
const Rooms = () => {
  const [rooms, setRooms] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [roomsPerPage] = useState(5);
  const [totalRooms, setTotalRooms] = useState(0);
  // const { page } = useParams();
  const location = useLocation();
  const getAllRooms = async () => {
    try {
      const res = await axiosConfig.get(`/rooms`);
      setRooms(res.data);
      setTotalRooms(res.data.length); // Set total rooms count
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getAllRooms();
    const searchParams = new URLSearchParams(location.search);
    const pageNumber = parseInt(searchParams.get("page")) || 1;
    setCurrentPage(pageNumber);
  }, [location.search]);

  const indexOfLastRoom = currentPage * roomsPerPage;
  const indexOfFirstRoom = indexOfLastRoom - roomsPerPage;
  const currentRooms = rooms.slice(indexOfFirstRoom, indexOfLastRoom);
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);

    const searchParams = new URLSearchParams(location.search);
    searchParams.set("page", pageNumber);
    window.history.pushState(
      { page: pageNumber },
      "",
      `${location.pathname}?${searchParams.toString()}`
    );
  };

  const totalPages = Math.ceil(totalRooms / roomsPerPage);

  return (
    <div className="mt-3">
      <div className="w-full container grid grid-cols-5 gap-3">
        {currentRooms.map((e, i) => (
          <div className="shadow-lg rounded-3 w-full">
            <div className="p-2">
              <img
                className="rounded-3"
                src="https://www.flc.vn/wp-content/uploads/2019/05/Anh-2-2.jpg "
                alt=""
              />
            </div>
            <div className="p-3 w-full text-base ">
              <div className="w-full flex gap-3 mb-2">
                <div>
                  <span>
                    <i className="fa-solid fa-user"></i>Người lớn :
                  </span>
                  {e.people}
                </div>
                <div>
                  <span>
                    <i className="fa-solid fa-children"></i> Trẻ em :
                  </span>
                  {e.children}
                </div>
              </div>
              <div className="flex gap-3 mb-2">
                <p className="font-medium"> Giá: {e.price} </p>
                <p>
                  <span className="text-sm font-medium"> Kiểu phòng:</span>
                  {e.type}
                </p>
              </div>
              <p className="bg-blue-900  w-2/5 text-white font-semibold p-1 text-center rounded-2 m ">
                Xem ngay
              </p>
            </div>
          </div>
        ))}
      </div>
      <nav aria-label="Page navigation example">
        <ul class="pagination">
          <li class="page-item">
            <button
              className="page-link"
              aria-label="Previous"
              onClick={(e) => paginate(currentPage - 1, e)}
              disabled={currentPage === 1}
            >
              <span aria-hidden="true">&laquo;</span>
            </button>
          </li>
          {[...Array(totalPages)].map((_, index) => (
            <li key={index} className="page-item">
              <button
                className={`page-link ${
                  currentPage === index + 1 ? "active" : ""
                }`}
                onClick={() => paginate(index + 1)}
              >
                {index + 1}
              </button>
            </li>
          ))}
          <li class="page-item">
            <button
              className="page-link"
              aria-label="Next"
              onClick={(e) => paginate(currentPage + 1, e)}
              disabled={currentPage === totalPages}
            >
              <span aria-hidden="true">&raquo;</span>
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Rooms;
