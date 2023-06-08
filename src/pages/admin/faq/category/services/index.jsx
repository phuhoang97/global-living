import { Button, Form, Input, message, Spin } from "antd";
import React, { useEffect } from "react";
import { useState } from "react";
import {
	getDetailFaqCategory,
	postFaqCategory,
	updateFaqCategory,
} from "../../../../../apis/faq/api";

const AdminFAQServices = ({ closeDrawer, setReloadData, id }) => {
	const [form] = Form.useForm();
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		if (id) {
			setLoading(true);
			getDetailFaqCategory(id)
				.then((response) => {
					setLoading(false);
					form.setFieldsValue(response?.data[0]);
				})
				.catch(() => {
					setLoading(false);
				});
		}
	}, [id]);

	const onFinish = (values) => {
		if (!id) {
			postFaqCategory(values).then((response) => {
				if (closeDrawer) {
					closeDrawer();
				}

				if (setReloadData) {
					setReloadData(true);
				}

				message.success("Thêm mới thành công!");
			});
		} else {
			updateFaqCategory(id, values).then((response) => {
				if (closeDrawer) {
					closeDrawer();
				}

				if (setReloadData) {
					setReloadData(true);
				}

				message.success("Cập nhật thành công!");
			});
		}
	};

	return (
		<Spin spinning={loading}>
			<Form form={form} onFinish={onFinish} layout="vertical">
				<Form.Item
					name="category"
					label="Danh mục"
					rules={[
						{
							required: true,
							message: "Chưa nhập danh mục",
						},
					]}
				>
					<Input placeholder="Nhập danh mục" />
				</Form.Item>
				<Button htmlType="submit">
					{id ? "Cập nhật" : "Thêm mới"}
				</Button>
			</Form>
		</Spin>
	);
};

export default AdminFAQServices;
