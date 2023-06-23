import { Form, Input, Modal, Spin, Tabs, message } from "antd";
import React, { useCallback, useEffect, useState } from "react";
import {
	deleteCategory,
	getAllCategories,
	getDetailCategory,
	postCategory,
	sortCategory,
	updateCategory,
} from "../../../../apis/category/api";
import { EditOutlined, ExclamationCircleOutlined } from "@ant-design/icons";
import {
	deleteCategoryDetail,
	getDetailCategoryDetail,
	postCategoryDetail,
	sortCategoryDetail,
	updateCategoryDetail,
} from "../../../../apis/category/detail";
import AdminDocumentSalesTable from "./Table";
import jwtDecode from "jwt-decode";
import { useSearchParams } from "react-router-dom";
import { DndContext, PointerSensor, useSensor } from "@dnd-kit/core";
import {
	SortableContext,
	horizontalListSortingStrategy,
} from "@dnd-kit/sortable";
import DraggableTabNode from "../../../../common/tabs/DraggableTabNode";

const ListTabsInstance = () => {
	const token = localStorage.getItem("token");
	const decode = jwtDecode(token);
	const hasPermission = decode?.role === 1 || decode?.role === 2;
	const [form] = Form.useForm();
	const [formDetail] = Form.useForm();
	const [reloadData, setReloadData] = useState(false);
	const [menuDocumentSales, setMenuDocumentSales] = useState([]);
	const [categoryChildren, setCategoryChildren] = useState([]);
	const [open, setOpen] = useState(false);
	const [openDetail, setOpenDetail] = useState(false);
	const [loading, setLoading] = useState(false);
	const [idCategory, setIdCategory] = useState(0);
	const [idDetailCategory, setIdDetailCategory] = useState(0);
	const [modal, contextHolder] = Modal.useModal();
	const [searchParams] = useSearchParams();
	const search = searchParams.get("search") || " ";
	const [className, setClassName] = useState("");
	const [classNameChild, setClassNameChild] = useState("");

	const sensor = useSensor(PointerSensor, {
		activationConstraint: {
			distance: 10,
		},
	});

	const sensorChild = useSensor(PointerSensor, {
		activationConstraint: {
			distance: 10,
		},
	});

	const onDragEnd = ({ active, over }) => {
		if (active?.id !== over?.id) {
			const activeIndex = menuDocumentSales?.findIndex(
				(i) => i?.key === active?.id
			);
			const overIndex = menuDocumentSales?.findIndex(
				(i) => i?.key === over?.id
			);

			const activeTab = menuDocumentSales?.filter(
				(item) => item?.id === active?.id
			)[0];
			const overTab = menuDocumentSales?.filter(
				(item) => item?.id === over?.id
			)[0];

			setLoading(true);

			sortCategory(active?.id, {
				category: activeTab?.labelSearch,
				sortNumber: overIndex,
			})
				.then(() => {
					setReloadData(true);
					setLoading(false);
				})
				.catch(() => {
					message.error("Lỗi!");
					setLoading(false);
				});

			sortCategory(over?.id, {
				category: overTab?.labelSearch,
				sortNumber: activeIndex,
			})
				.then(() => {
					setLoading(false);
				})
				.catch(() => {
					message.error("Lỗi!");
					setLoading(false);
				});
		}
	};

	const onDragEndChild = ({ active, over }) => {
		if (active?.id !== over?.id) {
			const allChildren = [];

			menuDocumentSales?.map((item) => {
				allChildren.push(
					...item?.children?.map((child) => ({
						...child,
						key: child?.id,
					}))
				);
			});

			const activeIndexChild = allChildren?.findIndex(
				(i) => i?.key === active?.id
			);
			const overIndexChild = allChildren?.findIndex(
				(i) => i?.key === over?.id
			);

			const activeTabChild = allChildren?.filter(
				(item) => item?.id === active?.id
			)[0];
			const overTabChild = allChildren?.filter(
				(item) => item?.id === over?.id
			)[0];

			if (activeIndexChild !== -1 && overIndexChild !== -1) {
				setLoading(true);

				sortCategoryDetail(active?.id, {
					detail: activeTabChild?.detail,
					sortNumber: overIndexChild,
				})
					.then(() => {
						setReloadData(true);
						setLoading(false);
					})
					.catch(() => {
						message.error("Lỗi!");
						setLoading(false);
					});

				sortCategoryDetail(over?.id, {
					detail: overTabChild?.detail,
					sortNumber: activeIndexChild,
				})
					.then(() => {
						setLoading(false);
					})
					.catch(() => {
						message.error("Lỗi!");
						setLoading(false);
					});
			}
		}
	};

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
				const data = response?.categories?.filter((item) =>
					item?.category?.includes(search)
				);
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
					?.map((child) => allDocsChild.push(...child?.documents));

				if (allChildren?.length > 0) {
					setCategoryChildren(allChildren);
				}

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
								defaultActiveKey="all"
								renderTabBar={(tabBarProps, DefaultTabBar) => (
									<DndContext
										sensors={[sensorChild]}
										onDragEnd={onDragEndChild}
									>
										<SortableContext
											items={allChildren?.map(
												(i) => i?.key
											)}
											strategy={
												horizontalListSortingStrategy
											}
										>
											<DefaultTabBar {...tabBarProps}>
												{(node) => {
													if (node?.key === "all") {
														return (
															<div
																{...node.props}
																key={node.key}
																onActiveBarTransform={
																	setClassNameChild
																}
																style={{
																	padding: 0,
																}}
															>
																{node}
															</div>
														);
													} else {
														return (
															<DraggableTabNode
																{...node.props}
																key={node.key}
																onActiveBarTransform={
																	setClassNameChild
																}
															>
																{node}
															</DraggableTabNode>
														);
													}
												}}
											</DefaultTabBar>
										</SortableContext>
									</DndContext>
								)}
							/>
						),
					},
					...data?.map((item) => {
						const allDocs = [];
						item?.children
							?.sort((a, b) => a?.sortNumber - b?.sortNumber)
							?.map((child) => allDocs.push(...child?.documents));

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
									className={classNameChild}
									defaultActiveKey="all"
									renderTabBar={(
										tabBarProps,
										DefaultTabBar
									) => (
										<DndContext
											sensors={[sensorChild]}
											onDragEnd={onDragEndChild}
										>
											<SortableContext
												items={allChildren?.map(
													(i) => i?.key
												)}
												strategy={
													horizontalListSortingStrategy
												}
											>
												<DefaultTabBar {...tabBarProps}>
													{(node) => {
														if (
															node?.key === "all"
														) {
															return (
																<div
																	{...node.props}
																	key={
																		node.key
																	}
																	onActiveBarTransform={
																		setClassNameChild
																	}
																	style={{
																		padding: 0,
																	}}
																>
																	{node}
																</div>
															);
														} else {
															return (
																<DraggableTabNode
																	{...node.props}
																	key={
																		node.key
																	}
																	onActiveBarTransform={
																		setClassNameChild
																	}
																>
																	{node}
																</DraggableTabNode>
															);
														}
													}}
												</DefaultTabBar>
											</SortableContext>
										</DndContext>
									)}
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
				className={className}
				defaultActiveKey="all"
				renderTabBar={(tabBarProps, DefaultTabBar) => (
					<DndContext sensors={[sensor]} onDragEnd={onDragEnd}>
						<SortableContext
							items={menuDocumentSales?.map((i) => i?.key)}
							strategy={horizontalListSortingStrategy}
						>
							<DefaultTabBar {...tabBarProps}>
								{(node) => {
									if (node?.key === "all") {
										return (
											<div
												{...node.props}
												key={node.key}
												onActiveBarTransform={
													setClassName
												}
												style={{
													padding: 0,
												}}
											>
												{node}
											</div>
										);
									} else {
										return (
											<DraggableTabNode
												{...node.props}
												key={node.key}
												onActiveBarTransform={
													setClassName
												}
											>
												{node}
											</DraggableTabNode>
										);
									}
								}}
							</DefaultTabBar>
						</SortableContext>
					</DndContext>
				)}
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

export default ListTabsInstance;
