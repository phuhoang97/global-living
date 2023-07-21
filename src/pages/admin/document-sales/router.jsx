import React from "react";
import { Route, Routes } from "react-router-dom";
import ListTabs from "./list/ListTabs";
import ListTabsInstance from "./list/ListTabsInstance";

const AdminDocumentSalesRouter = () => {
	return (
		<Routes path={"/"}>
			<Route index element={<ListTabsInstance />} />
			<Route path="*" element={<ListTabsInstance />} />
		</Routes>
	);
};

export default AdminDocumentSalesRouter;
