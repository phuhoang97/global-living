import {
	MenuFoldOutlined,
	MenuUnfoldOutlined,
	SearchOutlined,
} from "@ant-design/icons";
import { Button, Col, Input, Layout, Row, theme } from "antd";
import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { LayoutContext } from "../../../contexts";
import HeaderAccount from "./components/Account";

const { Header } = Layout;

const MainHeader = () => {
	const { collapsed, setCollapsed } = useContext(LayoutContext);
	const {
		token: { colorBgContainer, colorPrimaryBg, colorPrimary },
	} = theme.useToken();
	const navigate = useNavigate();
	const [searchParams] = useSearchParams();
	const [value, setValue] = useState(searchParams.get("search") || "");

	useEffect(() => {
		const delayDebounceFn = setTimeout(() => {
			if (value === "") {
				searchParams.delete("search");
			} else {
				searchParams.set("search", value);
			}
			navigate(`?${searchParams.toString()}`);
		}, 500);
		return () => clearTimeout(delayDebounceFn);
	}, [value, searchParams.get("search")]);

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
				<div
					className="px-5 flex items-center cursor-pointer"
					onClick={() => navigate("/")}
				>
					<img
						src="/images/favicon.png"
						alt="Logo"
						className="w-[50px]"
					/>
					<div className="flex flex-col items-start justify-center ml-1">
						<p className="m-0 uppercase tracking-[1px] font-medium leading-[20px]">
							GLOBAL
						</p>
						<p className="m-0 uppercase tracking-[1px] font-medium leading-[20px]">
							LIVING
						</p>
					</div>
				</div>
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
				<div className="flex items-center justify-between">
					<Input
						value={value}
						placeholder="Tìm kiếm"
						allowClear={true}
						prefix={<SearchOutlined className={"text-[17px]"} />}
						onChange={({ target }) => setValue(target.value)}
						className="px-2 py-2.5 w-[400px]"
					/>
					<HeaderAccount />
				</div>
			</div>
		</Header>
	);
};

export default MainHeader;
