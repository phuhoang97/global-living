import { Avatar, Dropdown } from "antd";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

const HeaderAccount = () => {
	const navigate = useNavigate();

	const items = [
		{
			label: <Link to="/">Trang chủ</Link>,
			key: "home",
		},
		{
			type: "divider",
		},
		{
			label: "Đăng xuất",
			key: "logout",
			danger: true,
		},
	];

	const onClick = ({ key }) => {
		if (key === "home") {
			navigate("/");
		} else if (key === "logout") {
			localStorage.removeItem("token");
			navigate("/login");
		}
	};

	return (
		<Dropdown
			menu={{
				items,
				onClick,
			}}
			trigger={["click"]}
			className={"cursor-pointer"}
			forceRender
			destroyPopupOnHide
		>
			<Avatar size={50} className={"cursor-pointer"}>
				A
			</Avatar>
		</Dropdown>
	);
};

export default HeaderAccount;
