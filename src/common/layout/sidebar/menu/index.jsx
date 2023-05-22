import { LoginOutlined, StockOutlined, TableOutlined } from "@ant-design/icons";
import { Menu } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";

function getItem(label, key, icon, children, type) {
	return {
		key,
		icon,
		children,
		label,
		type,
	};
}

const MenuSidebar = () => {
	const navigate = useNavigate();

	const items = [
		getItem(
			"Dashboard",
			"dashboard",
			null,
			[
				getItem("Default", "default", <LoginOutlined />),
				getItem("Analytics", "analytics", <StockOutlined />),
			],
			"group"
		),
		getItem("Table", "table", <TableOutlined />),
	];

	const onClick = ({ key }) => {
		navigate(`${key}`);
	};

	return (
		<Menu
			theme="light"
			mode="inline"
			style={{ border: "none" }}
			defaultSelectedKeys={["default"]}
			items={items}
			onClick={onClick}
		/>
	);
};

export default MenuSidebar;
