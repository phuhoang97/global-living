import { Button } from "antd";
import React from "react";

const PermissionButton = ({ isShow, onClick, title }) => {
	return (
		isShow && (
			<div className="p-2">
				<Button onClick={onClick}>{title || "Thêm mới"}</Button>
			</div>
		)
	);
};

export default PermissionButton;
