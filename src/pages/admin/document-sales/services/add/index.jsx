import { UploadOutlined } from "@ant-design/icons";
import { Button, Form, Input, Select, Upload } from "antd";
import React from "react";
import { postDocumentSale } from "../../../../../apis/document-sales/api";

const AminAddDocumentSales = ({ closeDrawer, setReloadData }) => {
	const [form] = Form.useForm();

	const props = {
		name: "file",
		listType: "picture",
		maxCount: 1,
	};

	const onFinish = (values) => {
		values = {
			...values,
			// image: "",
		};

		postDocumentSale(values).then(() => {
			if (closeDrawer) {
				closeDrawer();
			}

			if (setReloadData) {
				setReloadData(true);
			}

			form.resetFields();
		});
	};

	return (
		<Form form={form} layout="vertical" onFinish={onFinish}>
			<Form.Item name={"title"} label={"Title"}>
				<Input placeholder="Nhập title" />
			</Form.Item>

			<Form.Item name={"category"} label={"Category"}>
				<Select
					options={[
						{
							label: "Tư liệu truyền thông",
							value: "web_design",
						},
						{
							label: "Tài liệu bán hàng",
							value: "ui_ux_design",
						},
						{
							label: "Thông tin chương trình",
							value: "mobile_apps",
						},
						{
							label: "Thiết kế",
							value: "logo_design",
						},
					]}
					placeholder="Chọn category"
				/>
			</Form.Item>

			<Form.Item name={"image"} label={"Image"}>
				{/* <Upload {...props}>
					<Button icon={<UploadOutlined />}>Click to Upload</Button>
                </Upload> */}
				<Input placeholder="Nhập image" />
			</Form.Item>

			<Form.Item name={"link"} label={"Link"}>
				<Input placeholder="Nhập link" />
			</Form.Item>

			<Button htmlType="submit">Thêm mới</Button>
		</Form>
	);
};

export default AminAddDocumentSales;
