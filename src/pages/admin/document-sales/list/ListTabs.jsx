import { Form, Input, Modal, Spin, Tabs, message } from "antd";
import React, { useEffect, useRef, useState } from "react";
import {
	deleteCategory,
	getAllCategories,
	getDetailCategory,
	postCategory,
	updateCategory,
} from "../../../../apis/category/api";
import { EditOutlined, ExclamationCircleOutlined } from "@ant-design/icons";
import {
	deleteCategoryDetail,
	getDetailCategoryDetail,
	postCategoryDetail,
	updateCategoryDetail,
} from "../../../../apis/category/detail";
import AdminDocumentSalesTable from "./Table";
import jwtDecode from "jwt-decode";

const ListTabs = () => {
	const token = localStorage.getItem("token");
	const decode = jwtDecode(token);
	const hasPermission = decode?.role === 1 || decode?.role === 2;
	const [form] = Form.useForm();
	const [formDetail] = Form.useForm();
	const [reloadData, setReloadData] = useState(false);
	const [menuDocumentSales, setMenuDocumentSales] = useState([]);
	const [open, setOpen] = useState(false);
	const [openDetail, setOpenDetail] = useState(false);
	const [loading, setLoading] = useState(false);
	const [idCategory, setIdCategory] = useState(0);
	const [idDetailCategory, setIdDetailCategory] = useState(0);
	const [modal, contextHolder] = Modal.useModal();

	const confirm = (targetKey) => {
		modal.confirm({
			title: "Xác nhận xóa category?",
			icon: <ExclamationCircleOutlined />,
			okText: "Đồng ý",
			cancelText: "Hủy",
			onOk: () =>
				deleteCategory(targetKey)
					.then(() => {
						let lastIndex = -1;
						menuDocumentSales.forEach((item, i) => {
							if (item.key === targetKey) {
								lastIndex = i - 1;
							}
						});
						const newPanes = menuDocumentSales.filter(
							(item) => item.key !== targetKey
						);
						setMenuDocumentSales(newPanes);

						message.success("Xóa category thành công!");
					})
					.catch(() => {
						message.success("Xóa category thất bại!");
					}),
		});
	};

	const confirmDetail = (targetKey) => {
		modal.confirm({
			title: "Xác nhận xóa detail category?",
			icon: <ExclamationCircleOutlined />,
			okText: "Đồng ý",
			cancelText: "Hủy",
			onOk: () =>
				deleteCategoryDetail(targetKey)
					.then(() => {
						setReloadData(true);

						message.success("Xóa detail category thành công!");
					})
					.catch(() => {
						message.success("Xóa detail category thất bại!");
					}),
		});
	};

	const add = () => {
		setOpen(true);
	};

	const remove = (targetKey) => {
		confirm(targetKey);
	};

	const onEdit = (targetKey, action) => {
		if (action === "add") {
			add();
		} else {
			remove(targetKey);
		}
	};

	const addDetail = (parentId) => {
		setOpenDetail(true);
		setIdCategory(parentId);
	};

	const removeDetail = (targetKey) => {
		confirmDetail(targetKey);
	};

	const onEditDetail = (targetKey, action, parentId) => {
		if (action === "add") {
			addDetail(parentId);
		} else {
			removeDetail(targetKey);
		}
	};

	const handleEditCategory = (id) => {
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
	};

	const handleEditDetailCategory = (id) => {
		setOpenDetail(true);
		setIdDetailCategory(id);
		setLoading(true);
		getDetailCategoryDetail(id)
			.then((response) => {
				setLoading(false);
				formDetail.setFieldsValue({
					detail: response?.detail[0]?.detail,
				});
			})
			.catch(() => {
				setLoading(false);
			});
	};

	const getDataMenu = () => {
		setLoading(true);
		getAllCategories()
			.then((response) => {
				const data = response?.categories;
				const allChildren = [];
				const allDocsChild = [];

				data?.map((item) => allChildren.push(...item?.children));

				allChildren?.map((child) =>
					allDocsChild.push(...child?.documents)
				);

				setMenuDocumentSales([
					{
						label: "Tất cả",
						key: "all",
						closable: false,
						children: (
							<Tabs
								items={[
									{
										label: "Tất cả",
										key: "all",
										closable: false,
										children: (
											<AdminDocumentSalesTable
												data={allDocsChild}
												setReloadData={setReloadData}
												setLoading={setLoading}
												loading={loading}
											/>
										),
									},
									...allChildren?.map((child) => {
										return {
											label: (
												<>
													{child?.detail}
													{hasPermission ? (
														<EditOutlined
															className="ml-3 text-gray-400"
															onClick={() =>
																handleEditDetailCategory(
																	child?.id
																)
															}
														/>
													) : null}
												</>
											),
											key: child?.id,
											children: (
												<AdminDocumentSalesTable
													data={child?.documents}
													setReloadData={
														setReloadData
													}
													setLoading={setLoading}
													loading={loading}
												/>
											),
										};
									}),
								]}
								type={hasPermission ? "editable-card" : "card"}
							/>
						),
					},
					...data?.map((item) => {
						const allDocs = [];
						item?.children?.map((child) =>
							allDocs.push(...child?.documents)
						);

						return {
							label: (
								<>
									{item?.category}
									{hasPermission ? (
										<EditOutlined
											className="ml-3 text-gray-400"
											onClick={() =>
												handleEditCategory(item?.id)
											}
										/>
									) : null}
								</>
							),
							key: item?.id,
							children: (
								<Tabs
									items={[
										{
											label: "Tất cả",
											key: "all",
											closable: false,
											children: (
												<AdminDocumentSalesTable
													data={allDocs}
													setReloadData={
														setReloadData
													}
													setLoading={setLoading}
													loading={loading}
												/>
											),
										},
										...item?.children?.map((child) => ({
											label: (
												<>
													{child?.detail}
													{hasPermission ? (
														<EditOutlined
															className="ml-3 text-gray-400"
															onClick={() =>
																handleEditDetailCategory(
																	child?.id
																)
															}
														/>
													) : null}
												</>
											),
											key: child?.id,
											children: (
												<AdminDocumentSalesTable
													data={child?.documents}
													setReloadData={
														setReloadData
													}
													setLoading={setLoading}
													loading={loading}
												/>
											),
										})),
									]}
									type={
										hasPermission ? "editable-card" : "card"
									}
									onEdit={(targetKey, action) =>
										onEditDetail(
											targetKey,
											action,
											item?.id
										)
									}
								/>
							),
						};
					}),
				]);

				setLoading(false);
			})
			.catch(() => {
				setLoading(false);
			});
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

	const onFinishDetail = (values) => {
		const valuesPost = {
			...values,
			category_id: idCategory,
		};

		setLoading(true);
		if (!idDetailCategory) {
			postCategoryDetail(valuesPost)
				.then(() => {
					message.success("Thêm mới detail category thành công!");
					setReloadData(true);
					setOpenDetail(false);
					setLoading(false);
					formDetail.resetFields();
				})
				.catch(() => {
					setLoading(false);
					message.error("Thêm mới detail category thất bại!");
				});
		} else {
			updateCategoryDetail(idDetailCategory, values)
				.then(() => {
					message.success("Cập nhật detail category thành công!");
					setReloadData(true);
					setOpenDetail(false);
					formDetail.resetFields();
					setLoading(false);
				})
				.catch(() => {
					setLoading(false);
					message.error("Cập nhật detail category thất bại!");
				});
		}
	};

	return (
		<Spin spinning={loading}>
			<Tabs
				items={menuDocumentSales}
				type={hasPermission ? "editable-card" : "card"}
				onEdit={onEdit}
				defaultActiveKey="all"
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

			<Modal
				open={openDetail}
				title={
					idDetailCategory
						? "Cập nhật detail category"
						: "Tạo mới detail category"
				}
				destroyOnClose
				onCancel={() => {
					setOpenDetail(false);
					formDetail.resetFields();
					setIdDetailCategory(0);
					setIdCategory(0);
				}}
				onOk={() => formDetail.submit()}
			>
				<Spin spinning={loading}>
					<Form
						form={formDetail}
						onFinish={onFinishDetail}
						layout="vertical"
					>
						<Form.Item
							name="detail"
							label="Detail category"
							rules={[
								{
									required: true,
									message: "Chưa nhập detail category",
								},
							]}
						>
							<Input placeholder="Nhập detail category" />
						</Form.Item>
					</Form>
				</Spin>
			</Modal>

			{contextHolder}
		</Spin>
	);
};

export default ListTabs;
