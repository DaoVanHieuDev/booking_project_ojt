// eslint-disable-next-line no-unused-vars
import React from "react";

const Featured = () => {
  return (
    <div className="flex  w-full  gap-4 flex-col sm:flex-row">
      <div className=" w-84 rounded-2xl relative ">
        <div className=" rounded-2xl  ">
          <img
            className="w-full  object-cover rounded-lg  h-80  "
            src="https://cf.bstatic.com/xdata/images/city/600x600/688893.jpg?k=d32ef7ff94e5d02b90908214fb2476185b62339549a1bd7544612bdac51fda31&o="
          />
        </div>
        <div className="absolute top-20 left-9">
          <h2 className="text-xl text-white font-sans font-bold">
            TP.HỒ CHÍ MINH
          </h2>
        </div>
      </div>
      <div className=" w-84   rounded-2xl relative">
        <div className=" rounded-2xl  ">
          <img
            className="w-full  object-cover rounded-lg h-80"
            src="https://cf.bstatic.com/xdata/images/city/600x600/688853.jpg?k=f6427c8fccdf777e4bbc75fcd245e7c66204280181bea23350388c76c57348d1&o="
          />
        </div>
        <div className="absolute top-20 left-9">
          <h2 className="text-xl text-white font-sans font-bold">HÀ NỘI</h2>
        </div>
      </div>
      <div className=" w-84  rounded-2xl relative ">
        <div className=" rounded-2xl  ">
          <img
            className="w-full  object-cover rounded-lg h-80"
            src="https://cf.bstatic.com/xdata/images/city/600x600/688844.jpg?k=02892d4252c5e4272ca29db5faf12104004f81d13ff9db724371de0c526e1e15&o="
          />
        </div>
        <div className="absolute top-20 left-9">
          <h2 className="text-xl text-white font-sans font-bold">ĐÀ NẴNG</h2>
        </div>
      </div>
      <div className=" w-84   rounded-2xl relative ">
        <div className=" rounded-2xl  ">
          <img
            className="w-full  object-cover rounded-lg h-80"
            src="https://cf.bstatic.com/xdata/images/city/600x600/688831.jpg?k=7b999c7babe3487598fc4dd89365db2c4778827eac8cb2a47d48505c97959a78&o="
          />
        </div>
        <div className="absolute top-20 left-9">
          <h2 className="text-xl text-white font-sans font-bold">ĐÀ LẠT</h2>
        </div>
      </div>
    </div>
  );
};

export default Featured;
