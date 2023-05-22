import {
	MenuFoldOutlined,
	MenuUnfoldOutlined,
	SearchOutlined,
} from "@ant-design/icons";
import { Button, Col, Input, Layout, Row, theme } from "antd";
import React from "react";
import { useContext } from "react";
import { LayoutContext } from "../../../contexts";

const { Header } = Layout;

const MainHeader = () => {
	const { collapsed, setCollapsed } = useContext(LayoutContext);
	const {
		token: { colorBgContainer, colorPrimaryBg, colorPrimary },
	} = theme.useToken();

	return (
		<Header
			style={{
				padding: 0,
				background: colorBgContainer,
				display: "flex",
				alignItems: "center",
				height: "80px",
			}}
		>
			<div className="flex items-center justify-between w-[270px]">
				<div className="px-5">Logo</div>
				<Button
					type="text"
					icon={
						collapsed ? (
							<MenuUnfoldOutlined />
						) : (
							<MenuFoldOutlined />
						)
					}
					onClick={() => setCollapsed(!collapsed)}
					style={{
						background: colorPrimaryBg,
						color: colorPrimary,
					}}
				/>
			</div>
			<div className="px-4 w-[calc(100%-270px)]">
				<Row gutter={12}>
					<Col span={6}>
						<Input
							prefix={<SearchOutlined />}
							placeholder="Search"
							className="px-2 py-3"
						/>
					</Col>
				</Row>
			</div>
		</Header>
	);
};

export default MainHeader;
