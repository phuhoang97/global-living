import { Button, Form, Input, message, Select, Spin } from "antd";
import React, { useState } from "react";
import { useEffect } from "react";
import {
	getAllFaqCategories,
	getDetailFaqQuestion,
	postFaqQuestion,
	updateFaqQuestion,
} from "../../../../../apis/faq/api";

const AdminFAQQuestionServices = ({ closeDrawer, setReloadData, id }) => {
	const [form] = Form.useForm();
	const [loading, setLoading] = useState(false);
	const [faqCategories, setFaqCategories] = useState([]);

	const mapDataOption = (data) => {
		if (!data || data?.length <= 0) return [];
		return data?.map((item) => ({
			label: item?.category,
			value: item?.id,
		}));
	};

	useEffect(() => {
		getAllFaqCategories()
			.then((response) => {
				setFaqCategories(mapDataOption(response?.data));
			})
			.catch(() => {});
	}, []);

	useEffect(() => {
		if (id) {
			setLoading(true);
			getDetailFaqQuestion(id)
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
			postFaqQuestion(values).then((response) => {
				if (closeDrawer) {
					closeDrawer();
				}

				if (setReloadData) {
					setReloadData(true);
				}

				message.success("Thêm mới thành công!");
			});
		} else {
			updateFaqQuestion(id, values).then((response) => {
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
					name="question"
					label="Câu hỏi"
					rules={[
						{
							required: true,
							message: "Chưa nhập câu hỏi",
						},
					]}
				>
					<Input.TextArea placeholder="Nhập câu hỏi" />
				</Form.Item>
				<Form.Item
					name="answer"
					label="Trả lời"
					rules={[
						{
							required: true,
							message: "Chưa nhập trả lời",
						},
					]}
				>
					<Input.TextArea placeholder="Nhập trả lời" />
				</Form.Item>
				<Form.Item
					name="category_id"
					label="Danh mục"
					rules={[
						{
							required: true,
							message: "Chưa chọn danh mục",
						},
					]}
				>
					<Select
						placeholder="Chọn danh mục"
						options={faqCategories}
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

export default AdminFAQQuestionServices;
