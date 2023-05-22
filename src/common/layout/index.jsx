import { Layout } from "antd";
import React, { useState } from "react";
import { useMemo } from "react";
import { LayoutContext } from "../../contexts";
import MainContent from "./content";
import MainHeader from "./header";
import MainSidebar from "./sidebar";

const MainLayout = () => {
	const [collapsed, setCollapsed] = useState(false);

	const contextValues = useMemo(() => {
		return {
			collapsed,
			setCollapsed,
		};
	}, [collapsed]);

	return (
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
	);
};

export default MainLayout;
