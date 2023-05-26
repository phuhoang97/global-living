import {
	FolderOutlined,
	SolutionOutlined,
	StockOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function getItem(label, key, icon, children, type) {
	return {
		key,
		icon,
		children,
		label,
		type,
	};
}

const rootMenuKeys = ["/admin/document-sales"];

const MenuSidebar = () => {
	const navigate = useNavigate();
	const { pathname } = useLocation();

	const items = [
		getItem(
			"Dashboard",
			"dashboard",
			null,
			[getItem("Analytics", "/admin/analytics", <StockOutlined />)],
			"group"
		),
		getItem(null, null, null, null, "divider"),
		getItem("Contact", "/admin/contact", <SolutionOutlined />),
		getItem("Document Sales", "/admin/document-sales", <FolderOutlined />, [
			getItem("Tư liệu truyền thông", "/admin/document-sales/web_design"),
			getItem("Tài liệu bán hàng", "/admin/document-sales/ui_ux_design"),
			getItem(
				"Thông tin chương trình",
				"/admin/document-sales/mobile_apps"
			),
			getItem("Thiết kế", "/admin/document-sales/logo_design"),
		]),
	];

	const onClick = ({ key }) => {
		navigate(`${key}`);
	};

	return (
		<Menu
			theme="light"
			mode="inline"
			style={{ border: "none" }}
			defaultOpenKeys={rootMenuKeys}
			defaultSelectedKeys={[pathname]}
			items={items}
			onClick={onClick}
		/>
	);
};

export default MenuSidebar;
