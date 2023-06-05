import React from "react";
import { Route, Routes } from "react-router-dom";
import AdminBlogList from "./list";

const AdminBlogRouter = () => {
	return (
		<Routes path={"/"}>
			<Route index element={<AdminBlogList />} />
		</Routes>
	);
};

export default AdminBlogRouter;
