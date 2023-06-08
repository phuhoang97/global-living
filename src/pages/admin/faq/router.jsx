import React from "react";
import { Route, Routes } from "react-router-dom";
import AdminFAQCategoryList from "./category/list";
import AdminFAQQuestionList from "./question/list";

const AdminFAQRouter = () => {
	return (
		<Routes path={"/"}>
			<Route index element={<AdminFAQCategoryList />} />
			<Route path="category" element={<AdminFAQCategoryList />} />
			<Route path="question" element={<AdminFAQQuestionList />} />
		</Routes>
	);
};

export default AdminFAQRouter;
