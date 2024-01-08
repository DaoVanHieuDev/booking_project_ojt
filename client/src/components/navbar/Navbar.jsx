import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [accessLogin, setAccessLogin] = useState("");
  const handleChange = (event) => {
    const selectedLanguage = event.target.value; // Lấy giá trị của option đã chọn
    setCurrentLanguage(selectedLanguage); // Cập nhật state với ngôn ngữ đã chọn
    i18n.changeLanguage(selectedLanguage); // Thay đổi ngôn ngữ trong thư viện i18n
  };

  const { t, i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState("vi");

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    // Lấy giá trị username từ Local Storage
    const storedUsername = JSON.parse(localStorage.getItem("user"));
    // Kiểm tra xem username có tồn tại không
    if (storedUsername) {
      setAccessLogin(storedUsername);
    }
  }, []);

  return (
    <div className="bg-blue-900 pt-3">
      <div className="container mx-auto flex justify-between items-center px-4">
        <Link to="/">
          <span className="text-2xl font-bold text-white animate-fadeInFromLeft">
            Dreams<small className="text-sm text-white">.com</small>
          </span>
        </Link>

        {/* Desktop buttons */}
        <div className="hidden md:flex space-x-4 pb-3">
          <select
            className="form-select"
            aria-label="Default select example"
            value={currentLanguage}
            onChange={handleChange}
          >
            <option value="vi">Tiếng Việt</option>
            <option value="en">Tiếng Anh</option>
          </select>
          {accessLogin ? (
            <Link to="">
              <button className=" bg-white w-28 text-blue-900 hover:scale-110 font-bold py-1 px-2 rounded-full border-white border-2 shadow-md">
                {accessLogin.username}
              </button>
            </Link>
          ) : (
            <>
              <Link to="/login">
                <button className="bg-white w-28 text-blue-900 hover:scale-110 font-bold py-1 px-2 rounded-full border-white border-2 shadow-2xl">
                  {t("common.button.login")}
                </button>
              </Link>
              <Link to="/register">
                <button className=" bg-white w-28 text-blue-900 hover:scale-110 font-bold py-1 px-2 rounded-full border-white border-2 shadow-md">
                  {t("common.button.register")}
                </button>
              </Link>{" "}
            </>
          )}
        </div>

        {/* Mobile toggle button */}
        <button
          className="text-white p-2 focus:outline-none md:hidden"
          onClick={toggleMobileMenu}
        >
          {isMobileMenuOpen ? <span>&times;</span> : <span>&#9776;</span>}
        </button>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-16 right-4 bg-white p-4 rounded shadow-md ">
            <Link to="/login">
              <button className="btn btn-primary bg-blue-900 text-white hover:scale-110 font-bold py-1 px-2 rounded border-white border-solid mx-4">
                {t("common.button.login")}
              </button>
            </Link>
            <Link to="/register">
              <button className="btn btn-primary bg-blue-900 text-white hover:scale-110 font-bold py-1 px-2 rounded border-white border-solid">
                {t("common.button.register")}
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
