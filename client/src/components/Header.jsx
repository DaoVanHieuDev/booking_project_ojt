/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-no-undef */
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faPlane,
  faCar,
  faLandmarkFlag,
  faTaxi,
  faCalendarDays,
  faPerson,
} from "@fortawesome/free-solid-svg-icons";
import { DateRange } from "react-date-range";
import { format } from "date-fns";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import "../assets/css/Header.css";
import DateTime from "./common/DateTime";
import { DatePicker, Space } from "antd";
import axios from "axios";
import { axiosConfig } from "../axios";
const { RangePicker } = DatePicker;

const Header = ({
  formFor,
  handleRangePickerChange,
  handleSendFor,
  selectedDateRange,
  options,
  setOptions,
  inputValue,
  setInputValue,
}) => {
  const [openDate, setOpenDate] = useState(false);
  const [openOptions, setOpenOptions] = useState(false);

  const handleOptions = (name, operation) => {
    setOptions((prev) => ({
      ...prev,
      [name]: operation === "i" ? prev[name] + 1 : prev[name] - 1,
    }));
  };

  // Chuyển chữ cái đầu mỗi từ thành chữ in hoa
  const handleInputChange = (event) => {
    const inputValueRaw = event.target.value;
    const formattedValue = inputValueRaw
      .toLowerCase()
      .replace(/(^|\s)\S/g, (firstLetter) => firstLetter.toUpperCase());

    setInputValue(formattedValue);
  };

  useEffect(() => {
    // Thực hiện hành động mong muốn khi formFor thay đổi
  }, [formFor]); // Đặt formFor là dependency để useEffect theo dõi sự thay đổi của nó

  const { t } = useTranslation();
  return (
    <div className="bg-blue-900 text-white p-10  ">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-4 md:justify-start md:pt-3 animate-fadeInFromLeft">
          <div className="flex font-bold gap-3 items-center border-2 border-white rounded-full p-2 md:p-3 cursor-pointer hover:bg-white hover:text-blue-900">
            <FontAwesomeIcon icon={faBed} />
            <span className="hidden md:inline">{t("common.button.stay")}</span>
          </div>
          <div className="flex font-bold gap-3 items-center border-2 border-white rounded-full p-2 md:p-3 cursor-pointer hover:bg-white hover:text-blue-900">
            <FontAwesomeIcon icon={faPlane} />
            <span className="hidden md:inline">
              {t("common.button.flights")}
            </span>
          </div>
          <div className="flex font-bold gap-3 items-center border-2 border-white rounded-full p-2 md:p-3 cursor-pointer hover:bg-white hover:text-blue-900">
            <FontAwesomeIcon icon={faCar} />
            <span className="hidden md:inline">{t("common.button.car")}</span>
          </div>
          <div className="flex font-bold gap-3 items-center border-2 border-white rounded-full p-2 md:p-3 cursor-pointer hover:bg-white hover:text-blue-900">
            <FontAwesomeIcon icon={faLandmarkFlag} />
            <span className="hidden md:inline">
              {t("common.button.attract")}
            </span>
          </div>
          <div className="flex font-bold gap-3 items-center border-2 border-white rounded-full p-2 md:p-3 cursor-pointer hover:bg-white hover:text-blue-900">
            <FontAwesomeIcon icon={faTaxi} />
            <span className="hidden md:inline">{t("common.button.taxi")}</span>
          </div>
        </div>
        <h1 className="text-3xl font-sans font-bold mt-5 blinking-text">
          {t("common.button.lifeT")}
        </h1>
        <p className="mt-3 ">{t("common.button.claimR")}</p>

        <div className=" sm:absolute flex sm:top-[14.4rem] sm:h-10 sm:w-2/3 mt-8 border-8 sm:p-6 border-yellow-500 bg-white rounded-lg mt-4  items-center sm:justify-between px-3 sm:flex-row flex-col text-sm sm:text-lg ">
          <div className="text-gray-400">
            <FontAwesomeIcon icon={faBed} className="cursor-pointer mx-2 " />
            <input
              type="text"
              placeholder={t("common.button.wherein")}
              className="cursor-pointer outline-none border-transparent"
              value={inputValue}
              onChange={handleInputChange}
            />
          </div>
          <div className="text-gray-400" onClick={() => setOpenDate(!openDate)}>
            <FontAwesomeIcon
              icon={faCalendarDays}
              className="cursor-pointer mx-2 "
            />
            <Space direction="vertical" size={12}>
              <RangePicker
                onChange={handleRangePickerChange}
                selected={selectedDateRange}
              />
            </Space>
          </div>
          <div className="text-gray-400 cursor-pointer">
            <FontAwesomeIcon icon={faPerson} className="cursor-pointer mx-2 " />
            <span className="" onClick={() => setOpenOptions(!openOptions)}>
              {options.adult} {t("common.button.adult")} - {options.children}
              {t("common.button.children")} -{options.room}
              {t("common.button.room")}
            </span>
            {openOptions && (
              <div className="sm:absolute z-10 bg-slate-50 sm:top-12 sm:left-2/3 shadow-md p-8 rounded-lg h-fit w-80 text-center ">
                <div className="my-2 flex justify-between">
                  <span className="text-sm sm:text-lg font-semibold text-gray-700">
                    {t("common.button.adult")}
                  </span>
                  <div className="flex items-center">
                    <button
                      className="bg-blue-900 text-white font-bold px-3 py-1 hover:scale-105 rounded-full "
                      onClick={() => handleOptions("adult", "d")}
                      disabled={options.adult <= 1}
                    >
                      -
                    </button>
                    <span className="mx-3 text-black">{options.adult}</span>
                    <button
                      className="bg-blue-900 text-white font-bold px-3 py-1 hover:scale-105 rounded-full"
                      onClick={() => handleOptions("adult", "i")}
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="my-2 flex justify-between">
                  <span className="text-sm sm:text-lg font-semibold text-gray-700">
                    {t("common.button.children")}
                  </span>
                  <div className="flex items-center">
                    <button
                      className="bg-blue-900 text-white font-bold px-3 py-1 hover:scale-105 rounded-full"
                      onClick={() => handleOptions("children", "d")}
                      disabled={options.children <= 0}
                    >
                      -
                    </button>
                    <span className="mx-3 text-black">{options.children}</span>
                    <button
                      className="bg-blue-900 text-white font-bold px-3 py-1 hover:scale-105 rounded-full"
                      onClick={() => handleOptions("children", "i")}
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="my-2 flex justify-between">
                  <span className="text-sm sm:text-lg font-semibold text-gray-700 border-black">
                    {t("common.button.room")}
                  </span>
                  <div className="flex items-center border-black">
                    <button
                      className="border-black bg-blue-900  text-white font-bold px-3 py-1 hover:scale-105 rounded-full "
                      onClick={() => handleOptions("room", "d")}
                      disabled={options.room <= 1}
                    >
                      -
                    </button>
                    <span className="mx-3 text-black">{options.room}</span>
                    <button
                      className=" bg-blue-900  text-white  font-bold px-3 py-1 hover:scale-105 rounded-full"
                      onClick={() => handleOptions("room", "i")}
                    >
                      +
                    </button>
                  </div>
                </div>
                <div
                  className="bg-blue-900 text-white rounded-3 py-1"
                  onClick={() => setOpenOptions(!openOptions)}
                >
                  Xong
                </div>
              </div>
            )}
          </div>
          <div>
            <button
              className="bg-blue-900 text-white font-bold py-2 hover:scale-105 px-4 rounded-full  sm:mt-0"
              onClick={handleSendFor}
            >
              {t("common.button.search")}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
