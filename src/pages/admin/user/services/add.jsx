import { Button, Form, Input, message, Select } from "antd";
import React from "react";
import { postUser } from "../../../../apis/users/api";

const AdminAddUser = ({ closeDrawer, setReloadData }) => {
	const [form] = Form.useForm();

	const onFinish = (values) => {
		postUser(values)
			.then(() => {
				message.success("Thêm người dùng thành công!");
				if (closeDrawer) {
					closeDrawer();
				}

				if (setReloadData) {
					setReloadData(true);
				}

				form.resetFields();
			})
			.catch(() => message.error("Thêm người dùng thất bại!"));
	};

	return (
		<Form form={form} onFinish={onFinish} layout="vertical">
			<Form.Item
				name={"full_name"}
				label={"Họ và tên"}
				rules={[
					{
						required: true,
						message: "Chưa nhập họ và tên",
					},
				]}
			>
				<Input placeholder="Nhập họ và tên" />
			</Form.Item>
			<Form.Item
				name={"email"}
				label={"Email"}
				rules={[
					{
						required: true,
						message: "Chưa nhập email",
					},
				]}
			>
				<Input placeholder="Nhập email" type="email" />
			</Form.Item>
			<Form.Item
				name={"password"}
				label={"Mật khẩu"}
				rules={[
					{
						required: true,
						message: "Chưa nhập mật khẩu",
					},
				]}
			>
				<Input placeholder="Nhập mật khẩu" type="password" />
			</Form.Item>
			<Form.Item
				name={"phone"}
				label={"Số điện thoại"}
				rules={[
					{
						required: true,
						message: "Chưa nhập số điện thoại",
					},
				]}
			>
				<Input placeholder="Nhập số điện thoại" />
			</Form.Item>
			<Form.Item
				name={"agent_name"}
				label={"Đại lý"}
				rules={[
					{
						required: true,
						message: "Chưa nhập đại lý",
					},
				]}
			>
				<Input placeholder="Nhập đại lý" />
			</Form.Item>
			<Form.Item
				name={"area"}
				label={"Khu vực"}
				rules={[
					{
						required: true,
						message: "Chưa nhập khu vực",
					},
				]}
			>
				<Input placeholder="Nhập khu vực" />
			</Form.Item>

			<Button htmlType="submit">Thêm mới</Button>
		</Form>
	);
};

export default AdminAddUser;
