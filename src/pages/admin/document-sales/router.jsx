import React from "react";
import { Route, Routes } from "react-router-dom";
import AdminListDocumentSales from "./list";

const AdminDocumentSalesRouter = () => {
	return (
		<Routes path={"/"}>
			<Route index element={<AdminListDocumentSales />} />
			<Route path="web_design" element={<AdminListDocumentSales />} />
			<Route path="ui_ux_design" element={<AdminListDocumentSales />} />
			<Route path="mobile_apps" element={<AdminListDocumentSales />} />
			<Route path="logo_design" element={<AdminListDocumentSales />} />
			<Route path="*" element={<AdminListDocumentSales />} />
		</Routes>
	);
};

export default AdminDocumentSalesRouter;
