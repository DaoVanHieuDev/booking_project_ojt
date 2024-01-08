import React, { useState, useEffect } from "react";
import axios from "axios";
import { axiosConfig } from "../axios";
import { useParams, useLocation } from "react-router-dom";
const Rooms = () => {
  const [rooms, setRooms] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [roomsPerPage] = useState(5);
  const [totalRooms, setTotalRooms] = useState(0);
  const { page } = useParams();
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
    <div>
      <div className="w-full container grid grid-cols-5">
        {currentRooms.map((e, i) => (
          <div key={i}>
            <div>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv2lJGV2BEj6P1kiDFicrMnQWTpZ2AUwfGw_nOvuk9Ww&s"
                alt=""
              />
            </div>
            <div>
              <div>
                <p> {e.name}</p>
                <p>{e.price} price</p>
                <p> {e.hotelId}</p>
              </div>
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
