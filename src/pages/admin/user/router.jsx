import React from "react";
import { Route, Routes } from "react-router-dom";
import AdminListUsers from "./list";

const AdminUsersRouter = () => {
	return (
		<Routes path={"/"}>
			<Route index element={<AdminListUsers />} />
		</Routes>
	);
};

export default AdminUsersRouter;
