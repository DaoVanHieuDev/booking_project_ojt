import React from "react";
import Header from "../components/header/Header";
import { Footer } from "../components/Footer/Footer";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/navbar/Navbar";
import { useTranslation } from "react-i18next";

const PaymentDetail = () => {
  const { id } = useParams(); // Lấy id từ URL

  return (
    <>
      <Navbar />
      <div className="w-full container  flex mt-5 p-3 gap-20">
        <div className="w-8/12 block">
          <div>
            <div>
              <div className="flex">
                <p> Khách sạn </p>
                <p> sao đánh giá</p>
              </div>
              <span> </span>
            </div>
          </div>
          <div>
            <div> </div>
          </div>
          <div>
            <div> </div>
          </div>
        </div>
        <div className="">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit
          impedit, laborum illo, similique voluptatibus ab culpa iure nostrum
          quas autem architecto dignissimos quam, atque aut maiores? Voluptates
          voluptatem reiciendis harum.
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PaymentDetail;
