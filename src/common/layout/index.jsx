import { ConfigProvider, Layout } from "antd";
import React, { useEffect, useState } from "react";
import { useMemo } from "react";
import { LayoutContext } from "../../contexts";
import MainContent from "./content";
import MainHeader from "./header";
import MainSidebar from "./sidebar";
import { useNavigate } from "react-router-dom";

const MainLayout = () => {
	const navigate = useNavigate();
	const token = localStorage.getItem("token");
	const [collapsed, setCollapsed] = useState(false);

	useEffect(() => {
		if (!token) {
			navigate("/login");
		}
	}, []);

	const contextValues = useMemo(() => {
		return {
			collapsed,
			setCollapsed,
		};
	}, [collapsed]);

	return (
		<ConfigProvider
			theme={{
				token: {
					fontSize: 16,
					colorPrimary: "#7c3ab7",
				},
				components: {
					Spin: {
						colorPrimary: "#fcb617",
					},
				},
			}}
		>
			<LayoutContext.Provider value={contextValues}>
				<Layout
					style={{
						maxHeight: "100vh",
						height: "100vh",
						maxWidth: "100vw",
						width: "100vw",
						overflow: "hidden",
					}}
				>
					<MainHeader />
					<Layout>
						<MainSidebar />
						<MainContent />
					</Layout>
				</Layout>
			</LayoutContext.Provider>
		</ConfigProvider>
	);
};

export default MainLayout;
