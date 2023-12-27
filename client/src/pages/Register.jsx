import React from "react";
import { useState } from "react";
import "./Register.css";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset();
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
            <label htmlFor=""> Tên đăng nhập</label> <br />
            <input
              className={errors.username ? "input-error" : "input_register"}
              type="text"
              placeholder="Nhập tên đăng nhập của bạn"
              {...register("username", {
                required: true,
                minLength: 8,
                maxLength: 12,
              })}
            />
            {errors.username && errors.username.type === "required" && (
              <b className="errors">Tên đăng nhập là bắt buộc</b>
            )}{" "}
            {errors.username && (
              <b className="errors">
                {errors.username.type === "minLength" &&
                  "Tên đăng nhập phải có ít nhất 8 ký tự"}
                {errors.username.type === "maxLength" &&
                  "Tên đăng nhập tối đa 12 ký tự"}
              </b>
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
              type="password"
              className={errors.password ? "input-error" : "input_register"}
              placeholder="Nhập địa password của bạn"
              {...register("password", {
                required: true,
                minLength: 8,
                maxLength: 12,
              })}
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

            <div style={{ display: "flex", gap: "30px" }}>
              <button>face </button>
              <button> google</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
0;
