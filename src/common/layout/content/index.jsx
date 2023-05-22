import { Layout, theme } from "antd";
import React from "react";
import { Outlet } from "react-router-dom";

const { Content } = Layout;

const MainContent = () => {
	const {
		token: { colorBgContainer },
	} = theme.useToken();

	return (
		<Content
			style={{
				margin: "24px 16px",
				padding: 24,
				minHeight: 280,
				background: colorBgContainer,
				borderRadius: 10,
				overflow: "hidden auto",
			}}
		>
			<Outlet />
		</Content>
	);
};

export default MainContent;
