import { Button, Form, Input, InputNumber, Spin, Upload, message } from "antd";
import React, { useEffect, useState } from "react";
import {
	getDetailDataHomePage,
	postDataHomePage,
	updateDataHomePage,
} from "../../../../../apis/home/api";

const AdminCMSOverviewServices = ({ id, closeDrawer, setReloadData }) => {
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
			title: "realState",
			img: [],
			video: "",
			comment: "",
			userComment: "",
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

				<Form.Item
					name={"detail"}
					label={"Nội dung"}
					rules={[
						{
							required: true,
							message: "Chưa nhập nội dung",
						},
					]}
				>
					<Input placeholder="Nhập nội dung" />
				</Form.Item>

				<Form.Item
					name={"number"}
					label={"Chi phí làm thẻ"}
					rules={[
						{
							required: true,
							message: "Chưa nhập chi phí làm thẻ",
						},
					]}
				>
					<InputNumber
						placeholder="Nhập chi phí làm thẻ"
						className="w-full"
					/>
				</Form.Item>

				<Form.Item
					name={"descriptionNumber"}
					label={"Tháng"}
					rules={[
						{
							required: true,
							message: "Chưa nhập tháng",
						},
					]}
				>
					<InputNumber placeholder="Nhập tháng" className="w-full" />
				</Form.Item>

				<Form.Item
					name={"invest"}
					label={"Chi phí đầu tư tối thiểu"}
					rules={[
						{
							required: true,
							message: "Chưa nhập chi phí đầu tư tối thiểu",
						},
					]}
				>
					<InputNumber
						placeholder="Nhập chi phí đầu tư tối thiểu"
						className="w-full"
					/>
				</Form.Item>

				<Button htmlType="submit">
					{id ? "Cập nhật" : "Thêm mới"}
				</Button>
			</Form>
		</Spin>
	);
};

export default AdminCMSOverviewServices;
