import React from "react";
import { Route, Routes } from "react-router-dom";
import AdminCMSList from "./common/list";

const AdminCMSRouter = () => {
	return (
		<Routes path={"/"}>
			<Route path="video/*" element={<AdminCMSList />} />
			<Route path="comment/*" element={<AdminCMSList />} />
		</Routes>
	);
};

export default AdminCMSRouter;
