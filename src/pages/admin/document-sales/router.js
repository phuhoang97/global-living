import React from "react";
import { Route, Routes } from "react-router-dom";
import AdminListDocumentSales from "./list";

const AdminDocumentSalesRouter = () => {
	return (
		<Routes path={"/"}>
			<Route index element={<AdminListDocumentSales />} />
		</Routes>
	);
};

export default AdminDocumentSalesRouter;
