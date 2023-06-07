import { message, Spin } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Register() {
	const options = [
		{ value: "", text: "Đại lý" },
		{ value: "AZGLOBAL", text: "AZGLOBAL" },
		{ value: "EURO HOLDINGS", text: "EURO HOLDINGS" },
		{ value: "NHÀ ĐẤT THỦ ĐÔ", text: "NHÀ ĐẤT THỦ ĐÔ" },
		{ value: "FOUR HOMES", text: "FOUR HOMES" },
		{ value: "ĐẤT GỐC", text: "ĐẤT GỐC" },
		{ value: "NEW CITY", text: "NEW CITY" },
		{ value: "SAIGON CENTER REAL", text: "SAIGON CENTER REAL" },
		{ value: "khac", text: "KHÁC" },
	];
	const [selected, setSelected] = useState("");
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [area, setArea] = useState("");
	const [dataArea, setDataArea] = useState([]);
	const [password, setPassword] = useState("");
	const [loading, setLoading] = useState(false);

	const handleChangeName = (e) => {
		setName(e.target.value);
	};

	const handleChangeEmail = (e) => {
		setEmail(e.target.value);
	};

	const handleChangePhone = (e) => {
		setPhone(e.target.value);
	};

	const handleChangeAgentName = (e) => {
		e.preventDefault();
		setSelected(e.target.value);

		if (
			e.target.value === "AZGLOBAL" ||
			e.target.value === "EURO HOLDINGS" ||
			e.target.value === "NHÀ ĐẤT THỦ ĐÔ"
		) {
			setArea("Hà Nội");
		} else if (e.target.value === "FOUR HOMES") {
			setArea("Quảng Ninh, Hải Phòng");
		} else if (
			e.target.value === "ĐẤT GỐC" ||
			e.target.value === "NEW CITY"
		) {
			setArea("Nha Trang");
		} else if (e.target.value === "SAIGON CENTER REAL") {
			setArea("Thành Phố Hồ Chí Minh");
		} else {
			axios.get(`https://provinces.open-api.vn/api/`).then((response) => {
				setDataArea(response?.data);
			});
		}
	};

	const handleChangeArea = (e) => {
		setArea(e.target.value);
	};

	const handleChangePassword = (e) => {
		setPassword(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setLoading(true);
		if (
			selected === "" ||
			name === "" ||
			email === "" ||
			phone === "" ||
			area === "" ||
			password === ""
		) {
			message.error("Bạn cần nhập đầy đủ thông tin khi đăng kí");
			setLoading(false);
		} else {
			const data = {
				full_name: name,
				email: email,
				phone: phone,
				area: area,
				password: password,
				agent_name: selected,
			};

			async function postJSON(data) {
				try {
					const response = await fetch(
						"https://global-living-backend.vercel.app/api/v1/users",
						{
							method: "POST",
							headers: {
								"Content-Type": "application/json",
							},
							body: JSON.stringify(data),
						}
					);
					const result = await response.json();
					await message.success(result.message);
					if (result.message === "Đăng ký thành công") {
						window.location.href = "/";
					}
					setLoading(false);
				} catch (error) {
					setLoading(false);
					console.error("Error:", error);
				}
			}
			postJSON(data);
		}
	};

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<Spin spinning={loading}>
			<div className="register">
				<img src="/images/img/logo.png" alt="logo" />
				<h1>
					BẤT ĐỘNG SẢN ĐỊNH CƯ QUỐC TẾ <br /> GIẢI PHÁP ĐẦU TƯ KHÔNG
					BIÊN GIỚI
				</h1>

				<form onSubmit={handleSubmit}>
					<p>Đăng ký CTV / Sale</p>

					<input
						type="text"
						placeholder="Họ và tên"
						className="input-field"
						onChange={handleChangeName}
						value={name}
					/>
					<input
						type="email"
						placeholder="Email"
						onChange={handleChangeEmail}
						className="input-field"
						value={email}
					/>
					<input
						type="text"
						placeholder="Số điện thoại"
						onChange={handleChangePhone}
						className="input-field"
						value={phone}
					/>

					<select
						value={selected}
						onChange={handleChangeAgentName}
						className="form-option"
					>
						{options.map((e) => {
							return (
								<option
									key={e.value}
									value={e.value}
									hidden={e.value === ""}
								>
									{e.text}
								</option>
							);
						})}
					</select>

					{selected === "khac" ? (
						<select
							className="form-option"
							value={area}
							onChange={handleChangeArea}
						>
							{[{ codename: "", name: "" }, ...dataArea]?.map(
								(e) => {
									return (
										<option
											key={e?.codename}
											value={e?.codename}
											hidden={e?.codename === ""}
										>
											{e?.name}
										</option>
									);
								}
							)}
						</select>
					) : (
						<input
							type="text"
							placeholder="Khu vực"
							onChange={handleChangeArea}
							className="input-field"
							value={area}
						/>
					)}

					<input
						type="password"
						placeholder="Mật khẩu"
						onChange={handleChangePassword}
						className="input-field"
						value={password}
					/>

					<input
						type="submit"
						value="Đăng ký"
						style={{ color: "black" }}
					/>
				</form>

				{/* <div className='navigate'>
        <p>Đã có tài khoản?</p>
        <Link href={"/login"}>{`Đăng nhập ngay >>`}</Link>
      </div> */}
			</div>
		</Spin>
	);
}
