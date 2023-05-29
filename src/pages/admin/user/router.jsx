import React from "react";
import { Route, Routes } from "react-router-dom";
import AdminListUsers from "./list";

const AdminUsersRouter = () => {
	return (
		<Routes path={"/"}>
			<Route index element={<AdminListUsers />} />
			<Route path="northside" element={<AdminListUsers />} />
			<Route path="midside" element={<AdminListUsers />} />
			<Route path="southside" element={<AdminListUsers />} />
		</Routes>
	);
};

export default AdminUsersRouter;
