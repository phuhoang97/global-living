import { Button, Form, Input, Select, Upload, message } from "antd";
import React, { useEffect, useState } from "react";
import {
	getDetailDocumentSales,
	postDocumentSale,
	updateDocumentSale,
} from "../../../../apis/document-sales/api";
import { getLink } from "../../../../helper/getLink";
import { UploadOutlined } from "@ant-design/icons";
import { getAllCategories } from "../../../../apis/category/api";

const AminAddDocumentSales = ({ closeDrawer, setReloadData, id }) => {
	const [form] = Form.useForm();
	const [selected, setSelected] = useState({});
	const [categories, setCategories] = useState([]);

	const mapCategories = (categories) => {
		return categories?.map((category) => ({
			label: category?.name,
			value: category?.id,
		}));
	};

	useEffect(() => {
		getAllCategories().then((response) => {
			setCategories(mapCategories(response?.categories));
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
					message.success("Thêm mới tài liệu thất bại!");
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
					message.success("Cập nhật tài liệu thất bại!");
				});
		}
	};

	return (
		<Form form={form} layout="vertical" onFinish={onFinish}>
			<Form.Item
				name={"title"}
				label={"Tiêu đề"}
				rules={[{ required: true, message: "Chưa nhập tiêu đề" }]}
			>
				<Input placeholder="Nhập tiêu đề" />
			</Form.Item>

			<Form.Item
				name={"category"}
				label={"Mục"}
				rules={[{ required: true, message: "Chưa chọn mục" }]}
			>
				<Select
					options={[
						// {
						// 	label: "Tư liệu truyền thông",
						// 	value: "web_design",
						// },
						// {
						// 	label: "Tài liệu bán hàng",
						// 	value: "ui_ux_design",
						// },
						// {
						// 	label: "Thông tin chương trình",
						// 	value: "mobile_apps",
						// },
						// {
						// 	label: "Thiết kế",
						// 	value: "logo_design",
						// },
						...categories,
					]}
					placeholder="Chọn mục"
				/>
			</Form.Item>

			<Form.Item
				name={"image"}
				label={"Ảnh"}
				rules={[{ required: true, message: "Chưa chọn ảnh" }]}
			>
				<Upload {...props}>
					<Button icon={<UploadOutlined />}>Click để tải lên</Button>
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

			<Button htmlType="submit">{!id ? "Thêm mới" : "Cập nhật"}</Button>
		</Form>
	);
};

export default AminAddDocumentSales;
