import { Button, Form, Input, Select, Upload } from "antd";
import React, { useState } from "react";
import { postDocumentSale } from "../../../../../apis/document-sales/api";
import { getLink } from "../../../../../helper/getLink";
import { UploadOutlined } from "@ant-design/icons";

const AminAddDocumentSales = ({ closeDrawer, setReloadData }) => {
	const [form] = Form.useForm();
	const [selected, setSelected] = useState({});

	const props = {
		maxCount: 1,
		onChange(e) {
			handleSelectImg(e);
		},
	};

	const handleSelectImg = (e) => {
		setSelected(e.file);
	};

	const onFinish = async (values) => {
		try {
			const url = await getLink(selected);
			values = {
				...values,
				image: url,
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
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<Form form={form} layout="vertical" onFinish={onFinish}>
			<Form.Item
				name={"title"}
				label={"Title"}
				rules={[{ required: true, message: "Chưa nhập title" }]}
			>
				<Input placeholder="Nhập title" />
			</Form.Item>

			<Form.Item
				name={"category"}
				label={"Category"}
				rules={[{ required: true, message: "Chưa chọn category" }]}
			>
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

			<Form.Item
				name={"image"}
				label={"Image"}
				rules={[{ required: true, message: "Chưa chọn image" }]}
			>
				<Upload {...props}>
					<Button icon={<UploadOutlined />}>Click to Upload</Button>
				</Upload>
				{/* <Input
                placeholder="Nhập image"
                type="file"
                onChange={handleSelectImg}
                /> */}
			</Form.Item>

			<Form.Item
				name={"link"}
				label={"Link"}
				rules={[{ required: true, message: "Chưa nhập link" }]}
			>
				<Input placeholder="Nhập link" />
			</Form.Item>

			<Button htmlType="submit">Thêm mới</Button>
		</Form>
	);
};

export default AminAddDocumentSales;
