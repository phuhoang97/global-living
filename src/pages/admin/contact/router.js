import React from "react";
import { Route, Routes } from "react-router-dom";
import AdminListContact from "./list/List";

const AdminContactRouter = () => {
	return (
		<Routes path={"/"}>
			<Route index element={<AdminListContact />} />
		</Routes>
	);
};

export default AdminContactRouter;
