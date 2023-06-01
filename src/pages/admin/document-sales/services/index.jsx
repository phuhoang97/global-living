import { Button, Form, Input, Select, Spin, Upload, message } from "antd";
import React, { useEffect, useState } from "react";
import {
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
	const [selected, setSelected] = useState({});
	const [categories, setCategories] = useState([]);
	const [detailCategories, setDetailCategories] = useState([]);

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
	}, []);

	useEffect(() => {
		if (id) {
			getDetailDocumentSales(id)
				.then((response) => {
					form.setFieldsValue(response?.data[0]);
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
			getLink(file)
				.then((response) => {
					setSelected(response);
				})
				.catch(() => {});
		},
		maxCount: 1,
	};

	const handleSelectImg = (e) => {
		// setSelected(e.target.files[0]);
		// console.log("jtadd", e.target.files[0]);
		setSelected(e.fileList[0]);
	};

	const onFinish = async (values) => {
		values = {
			...values,
			image: selected,
		};
		// const url = await getLink(selected);
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
