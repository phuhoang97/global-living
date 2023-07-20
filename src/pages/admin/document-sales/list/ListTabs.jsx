import {
	Form,
	Input,
	InputNumber,
	Modal,
	Select,
	Spin,
	Tabs,
	message,
} from "antd";
import React, { useEffect, useState } from "react";
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
import { useSearchParams } from "react-router-dom";

const ListTabs = () => {
	const token = localStorage.getItem("token");
	const decode = jwtDecode(token);
	const hasPermission = decode?.role === 1 || decode?.role === 2;
	const [form] = Form.useForm();
	const [formDetail] = Form.useForm();
	const [reloadData, setReloadData] = useState(false);
	const [menuDocumentSales, setMenuDocumentSales] = useState([]);
	const [categories, setCategories] = useState([]);
	const [categoryChildren, setCategoryChildren] = useState([]);
	const [open, setOpen] = useState(false);
	const [openDetail, setOpenDetail] = useState(false);
	const [loading, setLoading] = useState(false);
	const [detailCategory, setDetailCategory] = useState({});
	const [idCategory, setIdCategory] = useState(0);
	const [idDetailCategory, setIdDetailCategory] = useState(0);
	const [modal, contextHolder] = Modal.useModal();
	const [searchParams] = useSearchParams();
	const search = searchParams.get("search") || "";
	const sortObjectValue = Form.useWatch("sortObject", form);
	const sortObjectValueChildren = Form.useWatch(
		"sortObjectChildren",
		formDetail
	);

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
				setDetailCategory(response?.detail[0]);
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
				const data = response?.categories?.filter((item) =>
					item?.category?.includes(search)
				);

				setCategories(data);

				const allChildren = [];
				const allDocsChild = [];

				data?.sort((a, b) => a?.sortNumber - b?.sortNumber)
					?.filter((item) => item?.category?.includes(search))
					?.map((item) => {
						allChildren.push(
							...item?.children?.map((child) => ({
								...child,
								key: child?.id,
							}))
						);
					});

				allChildren
					?.sort((a, b) => a?.sortNumber - b?.sortNumber)
					?.map((child) =>
						allDocsChild.push(
							...child?.documents?.sort(
								(a, b) => a?.sortNumber - b?.sortNumber
							)
						)
					);

				setCategoryChildren(allChildren);

				setMenuDocumentSales([
					{
						label: "Tất cả",
						key: "all",
						labelSearch: "Tất cả",
						closable: false,
						children: (
							<Tabs
								items={[
									{
										label: "Tất cả",
										key: "all",
										labelSearch: "Tất cả",
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
									...allChildren
										?.sort(
											(a, b) =>
												a?.sortNumber - b?.sortNumber
										)
										?.map((child) => {
											return {
												id: child?.id,
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
												labelSearch: child?.detail,
												children: (
													<AdminDocumentSalesTable
														data={child?.documents?.sort(
															(a, b) =>
																a?.sortNumber -
																b?.sortNumber
														)}
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
						item?.children
							?.sort((a, b) => a?.sortNumber - b?.sortNumber)
							?.map((child) =>
								allDocs.push(
									...child?.documents?.sort(
										(a, b) => a?.sortNumber - b?.sortNumber
									)
								)
							);

						return {
							id: item?.id,
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
							labelSearch: item?.category,
							children: (
								<Tabs
									items={[
										{
											label: "Tất cả",
											key: "all",
											closable: false,
											labelSearch: "Tất cả",
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
											id: child?.id,
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
											labelSearch: child?.detail,
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
	}, [search]);

	useEffect(() => {
		if (reloadData) {
			getDataMenu();
		}

		return () => setReloadData(false);
	}, [reloadData]);

	const onFinish = (values) => {
		delete values?.sortObjectValue;

		const activeTabIndex = categories?.filter(
			(item) => item?.id === idCategory
		)[0]?.sortNumber;
		const overTab = categories?.filter(
			(item) => item?.id === sortObjectValue
		)[0];

		if (!sortObjectValue) {
			delete values?.sortObject;

			values = {
				...values,
				sortNumber: !idCategory ? values?.sortNumber : activeTabIndex,
			};
		} else {
			values = {
				...values,
				sortNumber: !idCategory
					? values?.sortNumber
					: overTab?.sortNumber,
			};
		}

		const valuesOverTab = {
			category: overTab?.category,
			sortNumber: activeTabIndex,
		};

		setLoading(true);

		if (!idCategory) {
			postCategory(values)
				.then(() => {
					setReloadData(true);
					setOpen(false);
					setLoading(false);
					setIdCategory(0);
					form.resetFields();
					message.success("Thêm mới category thành công!");
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
					setIdCategory(0);
					setLoading(false);
				})
				.catch(() => {
					setLoading(false);
					message.error("Cập nhật category thất bại!");
				});

			if (sortObjectValue) {
				updateCategory(sortObjectValue, valuesOverTab)
					.then(() => {})
					.catch(() => {});
			}
		}
	};

	const onFinishDetail = (values) => {
		delete values?.sortObjectValueChildren;

		const activeTabIndex = categoryChildren?.filter(
			(item) => item?.id === idDetailCategory
		)[0]?.sortNumber;
		const overTab = categoryChildren?.filter(
			(item) => item?.id === sortObjectValueChildren
		)[0];

		let valuesOverTab = null;
		let valuesPost = null;

		if (!sortObjectValueChildren) {
			valuesPost = {
				detail: values?.detail,
				category_id: idCategory,
				sortNumber: idDetailCategory
					? activeTabIndex
					: values?.sortNumber,
			};
		} else {
			valuesPost = {
				detail: values?.detail,
				category_id: idCategory,
				sortNumber: idDetailCategory
					? overTab?.sortNumber
					: values?.sortNumber,
			};
		}

		valuesOverTab = {
			detail: overTab?.detail,
			category_id: idCategory,
			sortNumber: activeTabIndex,
		};

		setLoading(true);
		if (!idDetailCategory) {
			postCategoryDetail(valuesPost)
				.then(() => {
					message.success("Thêm mới detail category thành công!");
					setReloadData(true);
					setOpenDetail(false);
					setLoading(false);
					setIdDetailCategory(0);
					formDetail.resetFields();
				})
				.catch(() => {
					setLoading(false);
					message.error("Thêm mới detail category thất bại!");
				});
		} else {
			updateCategoryDetail(idDetailCategory, valuesPost)
				.then(() => {
					message.success("Cập nhật detail category thành công!");
					setReloadData(true);
					setOpenDetail(false);
					formDetail.resetFields();
					setIdDetailCategory(0);
					setLoading(false);
				})
				.catch(() => {
					setLoading(false);
					message.error("Cập nhật detail category thất bại!");
				});

			if (sortObjectValueChildren) {
				updateCategoryDetail(sortObjectValueChildren, valuesOverTab)
					.then(() => {
						setLoading(false);
					})
					.catch(() => {
						setLoading(false);
					});
			}
		}
	};

	console.log("jtadd", detailCategory);

	return (
		<Spin spinning={loading}>
			<Tabs
				items={menuDocumentSales}
				type={hasPermission ? "editable-card" : "card"}
				onEdit={onEdit}
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

						{!idCategory ? (
							<Form.Item
								name="sortNumber"
								label="Số thứ tự"
								rules={[
									{
										required: true,
										message: "Chưa nhập số thứ tự",
									},
								]}
							>
								<InputNumber
									placeholder="Nhập số thứ tự"
									className="w-full"
								/>
							</Form.Item>
						) : (
							<Form.Item
								name="sortObject"
								label="Danh mục cần đổi số thứ tự"
							>
								<Select
									options={menuDocumentSales
										?.filter(
											(item) =>
												item?.key !== "all" &&
												item?.id !== idCategory
										)
										?.map((item) => {
											return {
												label: item?.labelSearch,
												value: item?.key,
											};
										})}
									placeholder="Chọn danh mục cần đổi thứ tự"
									className="w-full"
								/>
							</Form.Item>
						)}
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
					setDetailCategory({});
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

						{!idDetailCategory ? (
							<Form.Item
								name="sortNumber"
								label="Số thứ tự"
								rules={[
									{
										required: true,
										message: "Chưa nhập số thứ tự",
									},
								]}
							>
								<InputNumber
									placeholder="Nhập số thứ tự"
									className="w-full"
								/>
							</Form.Item>
						) : (
							<Form.Item
								name="sortObjectChildren"
								label="Danh mục cần đổi thứ tự"
							>
								<Select
									options={categoryChildren
										?.filter(
											(item) =>
												item?.key !== "all" &&
												item?.id !== idDetailCategory &&
												item?.category_id ===
													detailCategory?.category_id
										)
										?.map((item) => {
											return {
												label: item?.detail,
												value: item?.key || item?.id,
											};
										})}
									placeholder="Chọn danh mục cần đổi thứ tự"
									className="w-full"
								/>
							</Form.Item>
						)}
					</Form>
				</Spin>
			</Modal>

			{contextHolder}
		</Spin>
	);
};

export default ListTabs;
