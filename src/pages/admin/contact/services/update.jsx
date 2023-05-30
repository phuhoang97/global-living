import { Button, Form, Input, InputNumber, Select, message } from "antd";
import React, { useEffect } from "react";
import { getDetailContact, updateContact } from "../../../../apis/contact/api";

const AdminUpdateContact = ({ closeDrawer, setReloadData, id }) => {
	const [form] = Form.useForm();

	useEffect(() => {
		if (id) {
			getDetailContact(id)
				.then((response) => {
					form.setFieldsValue(response?.user[0]);
				})
				.catch(() => {});
		}
	}, [id]);

	const onFinish = (values) => {
		updateContact(id, values).then((response) => {
			if (closeDrawer) {
				closeDrawer();
			}

			if (setReloadData) {
				setReloadData(true);
			}

			message.success("Cập nhật contact thành công!");
		});
	};

	return (
		<Form form={form} onFinish={onFinish} layout="vertical">
			<Form.Item
				name="full_name"
				label="Họ và tên"
				rules={[
					{
						required: true,
						message: "Chưa nhập họ và tên",
					},
				]}
			>
				<Input placeholder="Nhập họ và tên" />
			</Form.Item>
			<Form.Item
				name="email"
				label="Email"
				rules={[
					{
						required: true,
						message: "Chưa nhập email",
					},
				]}
			>
				<Input placeholder="Nhập email" type="email" />
			</Form.Item>
			<Form.Item
				name="phone"
				label="Số điện thoại"
				rules={[
					{
						required: true,
						message: "Chưa nhập số điện thoại",
					},
				]}
			>
				<InputNumber
					className="w-full"
					placeholder="Nhập số điện thoại"
				/>
			</Form.Item>
			<Form.Item
				name="product"
				label="Sản phẩm quan tâm"
				rules={[
					{
						required: true,
						message: "Chưa chọn sản phẩm",
					},
				]}
			>
				<Select
					placeholder="Chọn sản phẩm"
					options={[
						{
							label: "Căn hộ 1 phòng ngủ",
							value: "1bed",
						},
						{
							label: "Căn hộ 2 phòng ngủ",
							value: "2bed",
						},
						{
							label: "Căn hộ 3 phòng ngủ",
							value: "3bed",
						},
						{
							label: "Căn hộ 4 phòng ngủ",
							value: "4bed",
						},
						{
							label: "Căn hộ Studio",
							value: "studio",
						},
					]}
				/>
			</Form.Item>
			<Button htmlType="submit">Cập nhật</Button>
		</Form>
	);
};

export default AdminUpdateContact;
