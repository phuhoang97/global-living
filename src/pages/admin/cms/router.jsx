import React from "react";
import { Route, Routes } from "react-router-dom";
import AdminCMSList from "./common/list";

const AdminCMSRouter = () => {
	return (
		<Routes path={"/"}>
			<Route path="banner/*" element={<AdminCMSList />} />
			<Route path="realState/*" element={<AdminCMSList />} />
			<Route path="brandPosition/*" element={<AdminCMSList />} />
			<Route path="invest/*" element={<AdminCMSList />} />
			<Route path="vision/*" element={<AdminCMSList />} />
			<Route path="mission/*" element={<AdminCMSList />} />
			<Route path="video/*" element={<AdminCMSList />} />
			<Route path="comment/*" element={<AdminCMSList />} />
			<Route path="location/*" element={<AdminCMSList />} />
		</Routes>
	);
};

export default AdminCMSRouter;
