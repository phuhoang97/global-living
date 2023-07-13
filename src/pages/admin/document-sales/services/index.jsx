import { Button, Form, Input, Select, Spin, Upload, message } from "antd";
import React, { useEffect, useState } from "react";
import {
	getAllDocumentSales,
	getDetailDocumentSales,
	postDocumentSale,
	updateDocumentSale,
} from "../../../../apis/document-sales/api";
import { getLink } from "../../../../helper/getLink";
import { UploadOutlined } from "@ant-design/icons";
import { getAllCategories } from "../../../../apis/category/api";
import { getAllCategoriesDetailByCategoryId } from "../../../../apis/category/detail";

const AminAddDocumentSales = ({ closeDrawer, setReloadData, id }) => {
	const [form] = Form.useForm();
	const [loading, setLoading] = useState(false);
	const [selected, setSelected] = useState("");
	const [categories, setCategories] = useState([]);
	const [detailCategories, setDetailCategories] = useState([]);
	const [documents, setDocuments] = useState([]);
	const overObject = Form.useWatch("overObject", form);

	const mapDocuments = (documents) => {
		return documents?.map((document) => ({
			...document,
			label: document?.title,
			value: document?.id,
		}));
	};

	const mapDetailCategories = (categories) => {
		return categories?.map((category) => ({
			label: category?.detail,
			value: category?.id,
		}));
	};

	const mapCategories = (categories) => {
		return categories?.map((category) => {
			return {
				label: category?.category,
				value: category?.id,
			};
		});
	};

	useEffect(() => {
		setLoading(true);
		getAllCategories()
			.then((response) => {
				setLoading(false);
				setCategories(mapCategories(response?.categories));
			})
			.catch(() => {
				setLoading(false);
			});

		getAllDocumentSales()
			.then((response) => {
				setDocuments(mapDocuments(response?.data));
			})
			.catch(() => {});
	}, []);

	useEffect(() => {
		if (id) {
			getDetailDocumentSales(id)
				.then((response) => {
					form.setFieldsValue(response?.data[0]);
					setSelected(response?.data[0]?.image);
					onSelectCategory(response?.data[0]?.category_id);
				})
				.catch(() => {});
		}
	}, [id]);

	const onSelectCategory = (id) => {
		setLoading(true);
		getAllCategoriesDetailByCategoryId({ category_id: id })
			.then((response) => {
				setDetailCategories(mapDetailCategories(response?.data));
				setLoading(false);
			})
			.catch(() => {
				setLoading(false);
			});
	};

	const props = {
		beforeUpload: (file) => {
			setLoading(true);
			getLink(file)
				.then((response) => {
					setLoading(false);
					setSelected(response);
				})
				.catch(() => {
					setLoading(false);
				});
		},
		maxCount: 1,
	};

	const onFinish = (values) => {
		delete values?.overObject;

		const overIndex = documents?.filter(
			(item) => item?.value === overObject
		)[0];
		const activeIndex = documents?.filter((item) => item?.value === id)[0];

		values = {
			...values,
			image: selected,
			// sortNumber: !id ? null : overIndex?.sortNumber,
		};

		const valuesOverIndex = {
			title: overIndex?.title,
			category_id: overIndex?.category_id,
			detailcategory_id: overIndex?.detailcategory_id,
			image: overIndex?.image,
			link: overIndex?.link,
			sortNumber: activeIndex?.sortNumber,
		};

		if (!id) {
			postDocumentSale(values)
				.then(() => {
					if (closeDrawer) {
						closeDrawer();
					}

					if (setReloadData) {
						setReloadData(true);
					}

					message.success("Thêm mới tài liệu thành công!");
					form.resetFields();
				})
				.catch(() => {
					message.error("Thêm mới tài liệu thất bại!");
				});
		} else {
			updateDocumentSale(id, values)
				.then(() => {
					if (closeDrawer) {
						closeDrawer();
					}

					if (setReloadData) {
						setReloadData(true);
					}

					message.success("Cập nhật tài liệu thành công!");
					form.resetFields();
				})
				.catch(() => {
					message.error("Cập nhật tài liệu thất bại!");
				});

			// if (overObject) {
			// 	updateDocumentSale(
			// 		overIndex?.id || overIndex?.value,
			// 		valuesOverIndex
			// 	)
			// 		.then(() => {})
			// 		.catch(() => {});
			// }
		}
	};

	return (
		<Spin spinning={loading}>
			<Form form={form} layout="vertical" onFinish={onFinish}>
				<Form.Item
					name={"title"}
					label={"Tiêu đề"}
					rules={[{ required: true, message: "Chưa nhập tiêu đề" }]}
				>
					<Input placeholder="Nhập tiêu đề" />
				</Form.Item>

				<Form.Item
					name={"category_id"}
					label={"Category"}
					rules={[{ required: true, message: "Chưa chọn category" }]}
				>
					<Select
						options={categories}
						placeholder="Chọn category"
						onSelect={onSelectCategory}
					/>
				</Form.Item>

				<Form.Item
					name={"detailcategory_id"}
					label={"Detail category"}
					rules={[
						{
							required: true,
							message: "Chưa chọn detail category",
						},
					]}
				>
					<Select
						options={detailCategories}
						placeholder="Chọn detail category"
					/>
				</Form.Item>

				{/* {id ? (
					<Form.Item
						name={"overObject"}
						label={"Vị trí tài liệu cần sắp xếp"}
					>
						<Select
							showSearch
							options={documents}
							optionFilterProp="children"
							placeholder="Chọn vị trí tài liệu cần sắp xếp"
							filterOption={(input, option) =>
								(option?.label ?? "")
									?.toLowerCase()
									?.includes(input?.toLowerCase())
							}
						/>
					</Form.Item>
				) : null} */}

				<Form.Item name={"sortNumber"} label={"Thứ tự"}>
					<Input placeholder="Nhập thứ tự" />
				</Form.Item>

				<Form.Item
					name={"image"}
					label={"Ảnh"}
					rules={[{ required: true, message: "Chưa chọn ảnh" }]}
				>
					<Upload {...props}>
						<Button icon={<UploadOutlined />}>
							Click để tải lên
						</Button>
					</Upload>
					{/* <Input
					placeholder="Nhập image"
					type="file"
					onChange={handleSelectImg}
				/> */}
				</Form.Item>

				<Form.Item
					name={"link"}
					label={"Đường dẫn"}
					rules={[{ required: true, message: "Chưa nhập đường dẫn" }]}
				>
					<Input placeholder="Nhập đường dẫn" />
				</Form.Item>

				<Button htmlType="submit">
					{!id ? "Thêm mới" : "Cập nhật"}
				</Button>
			</Form>
		</Spin>
	);
};

export default AminAddDocumentSales;
