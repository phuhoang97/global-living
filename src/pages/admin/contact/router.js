import React from "react";
import { Route, Routes } from "react-router-dom";
import AdminListContact from "./list/List";

const AdminContactRouter = () => {
	return (
		<Routes path={"/"}>
			<Route index element={<AdminListContact />} />
			<Route path="1bed" element={<AdminListContact />} />
			<Route path="2bed" element={<AdminListContact />} />
			<Route path="3bed" element={<AdminListContact />} />
			<Route path="4bed" element={<AdminListContact />} />
			<Route path="studio" element={<AdminListContact />} />
		</Routes>
	);
};

export default AdminContactRouter;
