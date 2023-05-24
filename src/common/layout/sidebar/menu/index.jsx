import {
	FolderOutlined,
	SolutionOutlined,
	StockOutlined,
} from "@ant-design/icons";
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
			[getItem("Analytics", "analytics", <StockOutlined />)],
			"group"
		),
		getItem(null, null, null, null, "divider"),
		getItem("Contact", "contact", <SolutionOutlined />),
		getItem("Document Sales", "document-sales", <FolderOutlined />),
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
