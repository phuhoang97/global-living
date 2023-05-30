import { Button, Form, Input, message, Select } from "antd";
import React, { useEffect } from "react";
import { postUser, updateUser } from "../../../../apis/users/api";
import { getDetailUsers } from "../../../../apis/users/api";

const AdminAddUser = ({ closeDrawer, setReloadData, id }) => {
	const [form] = Form.useForm();

	useEffect(() => {
		if (id) {
			getDetailUsers(id)
				.then((response) => {
					form.setFieldsValue({
						...response[0],
						role_id: response[0]?.role,
					});
				})
				.catch(() => {});
		}
	}, [id]);

	const onFinish = (values) => {
		if (!id) {
			postUser(values)
				.then(() => {
					if (closeDrawer) {
						closeDrawer();
					}

					if (setReloadData) {
						setReloadData(true);
					}

					message.success("Thêm người dùng thành công!");
					form.resetFields();
				})
				.catch(() => message.error("Thêm người dùng thất bại!"));
		} else {
			updateUser(id, values)
				.then(() => {
					if (closeDrawer) {
						closeDrawer();
					}

					if (setReloadData) {
						setReloadData(true);
					}

					message.success("Cập nhật dùng thành công!");
					form.resetFields();
				})
				.catch(() => message.error("Cập nhật dùng thất bại!"));
		}
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
						message: "Chưa chọn khu vực",
					},
				]}
			>
				<Select
					placeholder="Chọn đại lý"
					options={[
						{
							label: "Khu vực miền Bắc",
							value: "northside",
						},
						{
							label: "Khu vực miền Trung",
							value: "midside",
						},
						{
							label: "Khu vực miền Nam",
							value: "southside",
						},
					]}
				/>
			</Form.Item>
			<Form.Item
				name={"role_id"}
				label={"Quyền"}
				rules={[
					{
						required: true,
						message: "Chưa chọn quyền",
					},
				]}
			>
				<Select
					placeholder="Chọn quyền"
					options={[
						{
							label: "ADMIN",
							value: 1,
						},
						{
							label: "Đại lý",
							value: 2,
						},
						{
							label: "Cộng tác viên",
							value: 3,
						},
					]}
				/>
			</Form.Item>

			<Button htmlType="submit">{!id ? "Thêm mới" : "Cập nhật"}</Button>
		</Form>
	);
};

export default AdminAddUser;
