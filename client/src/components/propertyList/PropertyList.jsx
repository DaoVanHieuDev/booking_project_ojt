// eslint-disable-next-line no-unused-vars
import React from "react";
import "../../assets/css/test.css";

import { useState } from "react";
const PropertyList = () => {
  const [showItems, setShowItems] = useState(6);
  const [startIndex, setStartIndex] = useState(0);

  const showNextItems = () => {
    if (startIndex + showItems < products.length) {
      setStartIndex(startIndex + showItems);
    } else {
      // Show remaining items if less than showItems left
      setStartIndex(arr.length - 1);
      setShowItems(arr.length - startIndex);
    }
  };

  const showPreviousItems = () => {
    if (startIndex - showItems >= 0) {
      setStartIndex(startIndex - showItems);
    } else {
      setStartIndex(0);
    }
  };
  const arr = ["d", "d", "d", "d", "d", "d", "g"];
  return (
    <div className="w-full flex justify-between gap-4 flex-col sm:flex-row">
      {/* <div className=" ">
        <div className="overflow-hidden rounded-lg cursor-pointer">
          <img
            className="w-full h-64 ojbject-cover"
            src="https://th.bing.com/th/id/OIP.v7RKLXI0oEjeOCNk3B-hkwHaEK?rs=1&pid=ImgDetMain"
          />
        </div>
        <div>
          <h1 className="text-3xl font-bold">Properties</h1>
          <h2 className="text-xl text-gray-500"> 123 properties</h2>
        </div>
      </div>
      <div className=" ">
        <div className="overflow-hidden rounded-lg cursor-pointer">
          <img
            className="w-full h-64 ojbject-cover"
            src="https://th.bing.com/th/id/OIP.v7RKLXI0oEjeOCNk3B-hkwHaEK?rs=1&pid=ImgDetMain"
          />
        </div>
        <div>
          <h1 className="text-3xl font-bold">Properties</h1>
          <h2 className="text-xl text-gray-500"> 123 properties</h2>
        </div>
      </div>
      <div className=" ">
        <div className="overflow-hidden rounded-lg cursor-pointer">
          <img
            className="w-full h-64 ojbject-cover"
            src="https://th.bing.com/th/id/OIP.v7RKLXI0oEjeOCNk3B-hkwHaEK?rs=1&pid=ImgDetMain"
          />
        </div>
        <div>
          <h1 className="text-3xl font-bold">Properties</h1>
          <h2 className="text-xl text-gray-500"> 123 properties</h2>
        </div>
      </div>
      <div className=" ">
        <div className="overflow-hidden rounded-lg cursor-pointer">
          <img
            className="w-full h-64 ojbject-cover"
            src="https://th.bing.com/th/id/OIP.v7RKLXI0oEjeOCNk3B-hkwHaEK?rs=1&pid=ImgDetMain"
          />
        </div>
        <div>
          <h1 className="text-3xl font-bold">Properties</h1>
          <h2 className="text-xl text-gray-500"> 123 properties</h2>
        </div>
      </div> */}
      <div className="product-container">
        <div className="products">
          <div
            className="product-wrapper"
            style={{
              transform: `translateX(-${startIndex * (100 / showItems)}%)`,
            }}
          >
            {arr.slice(startIndex, startIndex + showItems).map((ar, index) => (
              <div className="product" key={index}>
                {ar}
              </div>
            ))}
          </div>
        </div>
        <div>
          {startIndex > 0 && (
            <button onClick={showPreviousItems}>Previous</button>
          )}
          {startIndex + showItems < arr.length && (
            <button onClick={showNextItems}>Next</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default PropertyList;
