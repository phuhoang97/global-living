import {
	FolderOutlined,
	SolutionOutlined,
	StockOutlined,
	UserOutlined,
} from "@ant-design/icons";
import { Form, Input, Menu, Modal, message } from "antd";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getAllCategories, postCategory } from "../../../../apis/category/api";

function getItem(label, key, icon, children, type) {
	return {
		key,
		icon,
		children,
		label,
		type,
	};
}

const rootMenuKeys = ["/admin/document-sales", "/admin/users"];

const MenuSidebar = () => {
	const [form] = Form.useForm();
	const navigate = useNavigate();
	const { pathname } = useLocation();
	const [open, setOpen] = useState(false);
	const [reloadData, setReloadData] = useState(false);
	const [menuDocumentSales, setMenuDocumentSales] = useState([]);

	const getDataMenu = () => {
		getAllCategories()
			.then((response) => {
				setMenuDocumentSales([
					// getItem(
					// 	"Tư liệu truyền thông",
					// 	"/admin/document-sales/web_design"
					// ),
					// getItem(
					// 	"Tài liệu bán hàng",
					// 	"/admin/document-sales/ui_ux_design"
					// ),
					// getItem(
					// 	"Thông tin chương trình",
					// 	"/admin/document-sales/mobile_apps"
					// ),
					// getItem("Thiết kế", "/admin/document-sales/logo_design"),
					...response?.categories?.map((item) => ({
						label: item?.name,
						key: `/admin/document-sales/${item?.id}`,
					})),
					{
						label: "Tạo category mới",
						key: `create-category`,
						className: "font-bold",
					},
				]);
			})
			.catch(() => {});
	};

	useEffect(() => {
		getDataMenu();
	}, []);

	useEffect(() => {
		if (reloadData) {
			getDataMenu();
		}

		return () => setReloadData(false);
	}, [reloadData]);

	const items = [
		getItem(
			"Dashboard",
			"dashboard",
			null,
			[getItem("Analytics", "/admin/analytics", <StockOutlined />)],
			"group"
		),
		getItem(null, null, null, null, "divider"),
		getItem("Contact", "/admin/contact", <SolutionOutlined />, [
			getItem("Căn hộ 1 phòng ngủ", "/admin/contact/1bed"),
			getItem("Căn hộ 2 phòng ngủ", "/admin/contact/2bed"),
			getItem("Căn hộ 3 phòng ngủ", "/admin/contact/3bed"),
			getItem("Căn hộ 4 phòng ngủ", "/admin/contact/4bed"),
			getItem("Căn hộ Studio", "/admin/contact/studio"),
		]),
		getItem(
			"Document Sales",
			"/admin/document-sales",
			<FolderOutlined />,
			menuDocumentSales
		),
		getItem("Người dùng", "/admin/users", <UserOutlined />, [
			getItem("Khu vực miền Bắc", "/admin/users/northside"),
			getItem("Khu vực miền Trung", "/admin/users/midside"),
			getItem("Khu vực miền Nam", "/admin/users/southside"),
		]),
	];

	const onClick = ({ key }) => {
		if (key !== "create-category") {
			navigate(`${key}`);
		} else {
			setOpen(true);
		}
	};

	const onFinish = (values) => {
		postCategory(values)
			.then(() => {
				message.success("Thêm mới category thành công!");
				setReloadData(true);
				setOpen(false);
				form.resetFields();
			})
			.catch(() => {});
	};

	return (
		<>
			<Menu
				theme="light"
				mode="inline"
				style={{
					border: "none",
					height: "100%",
					overflow: "hidden auto",
				}}
				// defaultOpenKeys={rootMenuKeys}
				defaultSelectedKeys={[pathname]}
				items={items}
				onClick={onClick}
			/>

			<Modal
				open={open}
				title="Tạo mới category"
				destroyOnClose
				onCancel={() => setOpen(false)}
				onOk={() => form.submit()}
			>
				<Form form={form} onFinish={onFinish} layout="vertical">
					<Form.Item
						name="category"
						label="Category"
						rules={[
							{
								required: true,
								message: "Chưa nhập category",
							},
						]}
					>
						<Input placeholder="Nhập category" />
					</Form.Item>
				</Form>
			</Modal>
		</>
	);
};

export default MenuSidebar;
