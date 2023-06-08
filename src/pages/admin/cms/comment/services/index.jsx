import { UploadOutlined } from "@ant-design/icons";
import { Button, Form, Input, message, Spin, Upload } from "antd";
import React, { useEffect, useState } from "react";
import {
	getDetailDataHomePage,
	postDataHomePage,
	updateDataHomePage,
} from "../../../../../apis/home/api";
import { getLink } from "../../../../../helper/getLink";

const AdminCMSCommentServices = ({ id, closeDrawer, setReloadData }) => {
	const [form] = Form.useForm();
	const [selected, setSelected] = useState([]);
	const [loading, setLoading] = useState(false);

	const props = {
		beforeUpload: (file) => {
			setLoading(true);
			getLink(file)
				.then((response) => {
					setLoading(false);
					setSelected(response);
				})
				.catch(() => {
					setLoading(false);
				});
		},
		maxCount: 1,
	};

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
			title: "comment",
			img: [selected],
			number: 0,
			descriptionNumber: 0,
			video: null,
			invest: "",
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
					message.success("Thêm mới comment thành công!");
				})
				.catch(() => {
					setLoading(false);
					message.error("Thêm mới comment thất bại!");
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
					message.success("Cập nhật comment thành công!");
				})
				.catch(() => {
					setLoading(false);
					message.error("Cập nhật comment thất bại!");
				});
		}
	};

	return (
		<Spin spinning={loading}>
			<Form form={form} onFinish={onFinish} layout="vertical">
				<Form.Item
					name={"userComment"}
					label={"Người bình luận"}
					rules={[
						{
							required: true,
							message: "Chưa nhập người bình luận",
						},
					]}
				>
					<Input placeholder="Nhập người bình luận" />
				</Form.Item>

				<Form.Item
					name={"comment"}
					label={"Bình luận"}
					rules={[
						{
							required: true,
							message: "Chưa nhập bình luận",
						},
					]}
				>
					<Input placeholder="Nhập bình luận" />
				</Form.Item>

				<Form.Item
					name={"img"}
					label={"Ảnh"}
					rules={[{ required: true, message: "Chưa chọn ảnh" }]}
				>
					<Upload {...props}>
						<Button icon={<UploadOutlined />}>
							Click để tải lên
						</Button>
					</Upload>
				</Form.Item>

				<Button htmlType="submit">
					{id ? "Cập nhật" : "Thêm mới"}
				</Button>
			</Form>
		</Spin>
	);
};

export default AdminCMSCommentServices;
