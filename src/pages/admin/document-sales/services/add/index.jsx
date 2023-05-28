import { Button, Form, Input, Select, Upload } from "antd";
import React, { useState } from "react";
import { postDocumentSale } from "../../../../../apis/document-sales/api";
import { getLink } from "../../../../../helper/getLink";
import { UploadOutlined } from "@ant-design/icons";

const AminAddDocumentSales = ({ closeDrawer, setReloadData }) => {
	const [form] = Form.useForm();
	const [selected, setSelected] = useState({});

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
		try {
			// const url = await getLink(selected);
			values = {
				...values,
				image: selected,
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

			<Button htmlType="submit">Thêm mới</Button>
		</Form>
	);
};

export default AminAddDocumentSales;
