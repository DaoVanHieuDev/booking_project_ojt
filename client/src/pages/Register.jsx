import React from "react";
import { useState, useEffect } from "react";
import "../assets/css/Register.css";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import LoginGoogle from "../components/common/Login_google";
import { gapi } from "gapi-script";
import { toast } from "react-toastify";

import axios from "axios";
// import jwt from "jsonwebtoken";
import { useNavigate } from "react-router-dom";
const Register = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
    reset,
  } = useForm();
  const navigate = useNavigate();

  // useEffect(() => {
  //   function start() {
  //     gapi.client.init({
  //       clientId: clientId,
  //       scope: "",
  //     });
  //   }
  //   gapi.load("client:auth2", start);
  // });
  // const clientId =
  //   "462014511839-4i2bkt7oaihra19j8v6opaff6nf1ss6m.apps.googleusercontent.com";

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormRegister((prevState) => ({
  //     ...prevState,
  //     [name]: value, // Cập nhật giá trị của ô input vào state formRegister
  //   }));
  // };

  const checkExistingEmail = async (email) => {
    try {
      const response = await axios.get("http://localhost:8000/users");
      const users = response.data;
      return users.some((user) => user.email === email);
    } catch (error) {
      console.error("Error fetching user data:", error);
      return null;
    }
  };

  const onSubmit = async (data) => {
    const { email } = data;
    const isExistingEmail = await checkExistingEmail(email);
    if (isExistingEmail) {
      setError("email", {
        type: "manual",
        message: "Email đã tồn tại",
      });
      return;
    }
    const extendedData = {
      ...data,
      phone: "",
      status: true,
      locked: false,
      role: "user",
    };

    await axios.post("http://localhost:8000/users", extendedData);
    toast.success("Đăng kí tài khoản thành công");
    navigate("/login");
    reset();
  };

  console.log("errors", errors);
  return (
    <div className="loginCt">
      <div className="bg-blue-900 p-4 ">
        <div className="container mx-auto flex justify-between items-center px-8">
          <Link to="/">
            <span
              className="text-2xl font-bold text-white animate-fadeInFromLeft"
              style={{ cursor: "pointer" }}
            >
              Booking<small className="text-sm text-white">.com</small>
            </span>
          </Link>
        </div>
      </div>

      <div className="contentRegister">
        <div className="middleRegister">
          <p
            style={{
              fontWeight: "600",
              fontSize: "23px",
              paddingBottom: "30px",
            }}
          >
            Đăng kí với Booking
          </p>

          <form className="formRegister" onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor=""> Tên người dùng</label> <br />
            <input
              className={errors.username ? "input-error" : "input_register"}
              type="text"
              placeholder="Nhập tên đăng nhập của bạn"
              {...register("username", {
                required: true,
                minLength: 1,
                maxLength: 12,
              })}
            />
            <br />
            {errors.username && errors.username.type === "required" && (
              <b className="errors">Tên người dùng là bắt buộc</b>
            )}
            <br />
            <label htmlFor=""> Địa chỉ Email</label> <br />
            <input
              className={errors.email ? "input-error" : "input_register"}
              type="text"
              placeholder="Nhập địa chỉ email của bạn"
              {...register("email", {
                required: true,
                pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              })}
            />
            <br />
            {errors.email && errors.email.type === "required" && (
              <b className="errors"> Email là bắt buộc</b>
            )}
            {errors.email && errors.email.type === "manual" && (
              <b className="errors">{errors.email.message}</b>
            )}
            {errors.email && errors.email.type === "pattern" && (
              <b className="errors">Email không hợp lệ</b>
            )}
            <br />
            <label htmlFor=""> Mật khẩu</label>
            <br />
            <input
              type="password"
              className={errors.password ? "input-error" : "input_register"}
              placeholder="Nhập địa password của bạn"
              {...register("password", {
                required: true,
                minLength: 8,
                maxLength: 12,
              })}
            />
            <br />
            {errors.password && errors.password.type === "required" && (
              <b className="errors">Mật khẩu là bắt buộc</b>
            )}
            {errors.password && (
              <b className="errors">
                {errors.password.type === "minLength" &&
                  "Mật khẩu phải có ít nhất 8 ký tự"}
                {errors.password.type === "maxLength" &&
                  "Mật khẩu tối đa 12 ký tự"}
              </b>
            )}
            <br />
            <button type="submit"> Đăng kí</button>
          </form>

          <div style={{ textAlign: "center" }}>
            <span>
              Đã có tài khoản?
              <Link to="/login">
                <i style={{ color: "#3256ce", cursor: "pointer" }}>Đăng nhập</i>
              </Link>
            </span>
            <br />

            <span style={{ textAlign: "center", paddingBottom: "20px" }}>
              ------- hoặc sử dụng một số các lựa chọn này -------
            </span>

            {/* <div style={{ display: "flex", gap: "30px" }}>
              <div className="p-5 w-full ">
                <LoginGoogle />
              </div>
              <div className="p-5 w-full ">
                <LoginGoogle />
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
