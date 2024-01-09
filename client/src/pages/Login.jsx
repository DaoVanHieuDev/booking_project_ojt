import React from "react";
import "../assets/css/Login.css";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import LoginGoogle from "../components/common/Login_google";
import LogoutGoogle from "../components/common/Logout_google";
import { useEffect } from "react";
import { gapi } from "gapi-script";
import { axiosConfig } from "../axios";
import { toast } from "react-toastify";
import axios from "axios";
const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    console.log(data, "data");
    await axiosConfig
      .post("/login", data)
      .then((res) => {
        console.log(res.data.user, "dt");

        if (res.data.user.role === "user") {
          if (res.data.user.locked === false) {
            toast.success("Đăng nhập thành công 👌");
            localStorage.setItem("user", JSON.stringify(res.data.user));
            localStorage.setItem("token", JSON.stringify(res.data.accessToken));
            navigate("/");
          } else if (res.data.user.locked === true) {
            console.log("tài khoản của bạn đã bị khóa");
            toast.success("Tài khoản đã bị khóa ");
          }
        } else if (res.data.user.role === "admin") {
          navigate("/admin");
          toast.success("Đăng nhập Admin thành công 👌");
        } else {
          toast.error("Tài khoản hoặc mật khẩu không chính xác");
        }
      })

      .catch((error) => toast.error("Sai tài khoản hoặc mật khẩu"));
  };

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

      <div className="contentLogin">
        <div className="middleLogin">
          <p
            style={{
              fontWeight: "600",
              fontSize: "23px",
              paddingBottom: "30px",
            }}
          >
            Đăng nhập với Booking
          </p>

          <form className="formLogin" onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor=""> Địa chỉ Email</label> <br />
            <input
              type="text"
              placeholder="Nhập địa chỉ email của bạn "
              name="email"
              {...register("email", {
                required: true,
                pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              })}
              className={errors.email ? "input-error" : "input_login"}
            />
            {errors.email && errors.email.type === "required" && (
              <b className="errors">Email là bắt buộc</b>
            )}
            {errors.email && errors.email.type === "pattern" && (
              <b className="errors">Email không hợp lệ</b>
            )}
            <br />
            <label htmlFor=""> Mật khẩu</label>
            <br />
            <input
              type="text"
              placeholder="Nhập địa password của bạn "
              name="password"
              {...register("password", {
                required: true,
                minLength: 8,
                maxLength: 12,
              })}
              className={errors.password ? "input-error" : "input_login"}
            />
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
            <button type="submit"> Đăng nhập</button>
          </form>

          <div style={{ textAlign: "center" }}>
            <span>
              Chưa có tài khoản?
              <Link to="/register">
                <i
                  style={{
                    color: "#1143e8",
                    fontWeight: "500",
                    cursor: "pointer",
                  }}
                >
                  Đăng kí
                </i>{" "}
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

              <div className="p-5 w-full">
                <LogoutGoogle />
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
