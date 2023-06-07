import {
	DeleteOutlined,
	EditOutlined,
	ExclamationCircleOutlined,
	FileTextOutlined,
	FolderOutlined,
	MoreOutlined,
	PlusCircleOutlined,
	SolutionOutlined,
	StockOutlined,
	UserOutlined,
} from "@ant-design/icons";
import { Form, Input, Menu, Modal, message, Dropdown, Spin } from "antd";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
	deleteCategory,
	getAllCategories,
	getDetailCategory,
	postCategory,
	updateCategory,
} from "../../../../apis/category/api";

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
	const [loading, setLoading] = useState(false);
	const [idCategory, setIdCategory] = useState(0);
	const [reloadData, setReloadData] = useState(false);
	const [menuDocumentSales, setMenuDocumentSales] = useState([]);
	const [modal, contextHolder] = Modal.useModal();

	const confirm = (id) => {
		modal.confirm({
			title: "Xác nhận xóa category?",
			icon: <ExclamationCircleOutlined />,
			okText: "Đồng ý",
			cancelText: "Hủy",
			onOk: () =>
				deleteCategory(id).then(() => {
					message.success("Xóa category thành công!");
					setReloadData(true);
				}),
		});
	};

	const itemsMenuCategory = [
		{
			label: (
				<div>
					<DeleteOutlined className="mr-2" />
					Xóa
				</div>
			),
			key: "delete",
		},
		{
			label: (
				<div>
					<EditOutlined className="mr-2" />
					Sửa
				</div>
			),
			key: "update",
		},
	];

	const onClickMenuCategory = ({ key }, id) => {
		if (key === "delete") {
			confirm(id);
		} else if (key === "update") {
			setOpen(true);
			setIdCategory(id);
			setLoading(true);
			getDetailCategory(id)
				.then((response) => {
					setLoading(false);
					form.setFieldsValue({
						category: response?.category[0]?.category,
					});
				})
				.catch(() => {
					setLoading(false);
				});
		}
	};

	const mapDetailCategory = (data) => {
		if (!data || data?.length <= 0) return [];
		return data?.map((item) => ({
			label: item?.detail,
			key: item?.id,
		}));
	};

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
						label: (
							<div className="flex items-center justify-between">
								{item?.category}
								<Dropdown
									menu={{
										items: itemsMenuCategory,
										onClick: (e) =>
											onClickMenuCategory(e, item?.id),
									}}
									trigger={["click"]}
								>
									<MoreOutlined />
								</Dropdown>
							</div>
						),
						key: `/admin/document-sales/${item?.id}`,
						children: [
							...mapDetailCategory(item?.children),
							{
								label: <PlusCircleOutlined />,
								key: `create-detail-category-${item?.id}`,
								className: "font-bold text-center !pl-0",
							},
						],
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

	// useEffect(() => {
	// 	getDataMenu();
	// }, []);

	// useEffect(() => {
	// 	if (reloadData) {
	// 		getDataMenu();
	// 	}

	// 	return () => setReloadData(false);
	// }, [reloadData]);

	const items = [
		// getItem(
		// 	"Dashboard",
		// 	"dashboard",
		// 	null,
		// 	[getItem("Analytics", "/admin/analytics", <StockOutlined />)],
		// 	"group"
		// ),
		getItem(
			"Dashboard",
			"dashboard",
			null,
			[
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
					<FolderOutlined />
					// menuDocumentSales
				),
				getItem("Người dùng", "/admin/users", <UserOutlined />, [
					getItem("Khu vực miền Bắc", "/admin/users/northside"),
					getItem("Khu vực miền Trung", "/admin/users/midside"),
					getItem("Khu vực miền Nam", "/admin/users/southside"),
				]),
			],
			"group"
		),
		getItem(
			"CMS",
			"cms",
			null,
			[
				getItem("Bài viết", "/admin/blog", <FileTextOutlined />),
				getItem("Banner", "/admin/cms/banner", <FileTextOutlined />),
				getItem(
					"Tổng quan",
					"/admin/cms/realState",
					<FileTextOutlined />
				),
				getItem(
					"Định vị thương hiệu",
					"/admin/cms/brandPosition",
					<FileTextOutlined />
				),
				getItem("Đầu tư", "/admin/cms/invest", <FileTextOutlined />),
				getItem("Tầm nhìn", "/admin/cms/vision", <FileTextOutlined />),
				getItem("Sứ mệnh", "/admin/cms/mission", <FileTextOutlined />),
				getItem("Video", "/admin/cms/video", <FileTextOutlined />),
				getItem("Comment", "/admin/cms/comment", <FileTextOutlined />),
			],
			"group"
		),
	];

	const onClick = ({ key }) => {
		if (key !== "create-category") {
			navigate(`${key}`);
		} else {
			setOpen(true);
		}
	};

	const onFinish = (values) => {
		setLoading(true);
		if (!idCategory) {
			postCategory(values)
				.then(() => {
					message.success("Thêm mới category thành công!");
					setReloadData(true);
					setOpen(false);
					setLoading(false);
					form.resetFields();
				})
				.catch(() => {
					setLoading(false);
					message.error("Thêm mới category thất bại!");
				});
		} else {
			updateCategory(idCategory, values)
				.then(() => {
					message.success("Cập nhật category thành công!");
					setReloadData(true);
					setOpen(false);
					form.resetFields();
					setLoading(false);
				})
				.catch(() => {
					setLoading(false);
					message.error("Cập nhật category thất bại!");
				});
		}
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
				title={idCategory ? "Cập nhật category" : "Tạo mới category"}
				destroyOnClose
				onCancel={() => {
					setOpen(false);
					form.resetFields();
					setIdCategory(0);
				}}
				onOk={() => form.submit()}
			>
				<Spin spinning={loading}>
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
				</Spin>
			</Modal>

			{contextHolder}
		</>
	);
};

export default MenuSidebar;
