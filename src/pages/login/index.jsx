import { message, notification, Spin } from "antd";
import React, { useEffect } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { login } from "../../apis/login/api";
import { pageTitle } from "../../helper";

const LoginPage = () => {
	const navigate = useNavigate();
	const token = localStorage.getItem("token");
	const { register, handleSubmit, reset } = useForm();
	const [loading, setLoading] = useState(false);
	const [api, contextHolder] = notification.useNotification();

	const openNotificationWithIcon = (type, message) => {
		api[type]({
			message: message,
		});
	};

	pageTitle("Login");

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	useEffect(() => {
		if (token) {
			navigate("/");
		}
	}, [token]);

	const onFinish = (values) => {
		setLoading(true);
		login(values)
			.then((response) => {
				console.log("jtadd", response);
				localStorage.setItem("token", response?.token);
				setLoading(false);
				message.success("Đăng nhập thành công!");
				navigate("/admin");
				reset();
			})
			.catch(() => {
				setLoading(false);
				openNotificationWithIcon(
					"error",
					"Sai tên tài khoản hoặc mật khẩu!"
				);
			});
	};

	return (
		<Spin spinning={loading}>
			<section className="login__container">
				{contextHolder}
				<div className="login__inner flex items-center justify-between gap-10">
					<div className="login__detail flex flex-col justify-between h-full">
						<img
							src="/images/logo.png"
							alt="Logo"
							className="login__logo"
						/>
						<h1>
							<p>Đầu tư bất động sản</p>
							<p>Nhận thẻ cư trú Hungary</p>
						</h1>
						<div></div>
					</div>
					<div className="login__form w-[40%] shadow-xl bg-white rounded-[30px] p-7">
						<h3>Log In</h3>
						<form action="" onSubmit={handleSubmit(onFinish)}>
							<label htmlFor="" className="text-black">
								Email Address
							</label>
							<input
								type="email"
								placeholder="Email Address"
								{...register("email")}
								required
							/>
							<label htmlFor="" className="text-black">
								Password
							</label>
							<input
								type="password"
								placeholder="Password"
								{...register("password")}
								required
							/>
							<input type="submit" value="Log in" />
						</form>
					</div>
				</div>
			</section>
		</Spin>
	);
};

export default LoginPage;
