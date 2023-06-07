import { Button, Form, Input, Spin, message } from "antd";
import React, { useEffect, useState } from "react";
import {
	getDetailDataHomePage,
	postDataHomePage,
	updateDataHomePage,
} from "../../../../../apis/home/api";

const AdminCMSInvestServices = ({ id, closeDrawer, setReloadData }) => {
	const [form] = Form.useForm();
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		if (id) {
			setLoading(true);
			getDetailDataHomePage(id)
				.then((response) => {
					form.setFieldsValue(response?.data[0]);
					setLoading(false);
				})
				.catch(() => {
					setLoading(false);
				});
		}
	}, [id]);

	const onFinish = (values) => {
		values = {
			...values,
			title: "invest",
			img: [],
			number: 0,
			descriptionNumber: 0,
			video: "",
			invest: "",
			comment: "",
			userComment: "",
			detail: "",
		};

		setLoading(true);
		if (!id) {
			postDataHomePage(values)
				.then(() => {
					if (closeDrawer) {
						closeDrawer();
					}

					if (setReloadData) {
						setReloadData(true);
					}
					setLoading(false);
					message.success("Thêm mới thành công!");
				})
				.catch(() => {
					setLoading(false);
					message.error("Thêm mới thất bại!");
				});
		} else {
			updateDataHomePage(id, values)
				.then((response) => {
					if (closeDrawer) {
						closeDrawer();
					}

					if (setReloadData) {
						setReloadData(true);
					}
					setLoading(false);
					message.success("Cập nhật thành công!");
				})
				.catch(() => {
					setLoading(false);
					message.error("Cập nhật thất bại!");
				});
		}
	};

	return (
		<Spin spinning={loading}>
			<Form form={form} onFinish={onFinish} layout="vertical">
				<Form.Item
					name={"heading"}
					label={"Tiêu đề"}
					rules={[
						{
							required: true,
							message: "Chưa nhập tiêu đề",
						},
					]}
				>
					<Input placeholder="Nhập tiêu đề" />
				</Form.Item>

				<Button htmlType="submit">
					{id ? "Cập nhật" : "Thêm mới"}
				</Button>
			</Form>
		</Spin>
	);
};

export default AdminCMSInvestServices;
