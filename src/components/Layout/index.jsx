import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import CustomCursor from "../CustomCursor";
import Footer from "../Footer";
import Header from "../Header";
import { ConfigProvider } from "antd";

export default function Layout({ headerVariant }) {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<>
			<ConfigProvider
				theme={{
					token: {
						fontSize: 16,
						colorPrimary: "#fcb617",
					},
					components: {
						Tabs: {
							colorText: "#fff",
						},
						Radio: {
							colorPrimaryBg: "#fcb617",
						},
					},
				}}
			>
				<Header variant={headerVariant} />
				<Outlet />
				<CustomCursor />
				<Footer />
			</ConfigProvider>
		</>
	);
}
