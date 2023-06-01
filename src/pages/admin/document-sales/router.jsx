import React from "react";
import { Route, Routes } from "react-router-dom";
import ListTabs from "./list/ListTabs";

const AdminDocumentSalesRouter = () => {
	return (
		<Routes path={"/"}>
			<Route index element={<ListTabs />} />
			<Route path="*" element={<ListTabs />} />
		</Routes>
	);
};

export default AdminDocumentSalesRouter;
