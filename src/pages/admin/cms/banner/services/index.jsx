import { Button, Form, Input, Spin, Upload, message } from "antd";
import React, { useEffect, useState } from "react";
import { getLink } from "../../../../../helper/getLink";
import {
	getDetailDataHomePage,
	postDataHomePage,
	updateDataHomePage,
} from "../../../../../apis/home/api";
import { UploadOutlined } from "@ant-design/icons";
import ReactQuill from "react-quill";

const AdminCMSBannerServices = ({ id, closeDrawer, setReloadData }) => {
	const [form] = Form.useForm();
	const [selected, setSelected] = useState({});
	const [loading, setLoading] = useState(false);
	const [detail, setDetail] = useState("");

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
			title: "banner",
			img: [selected],
			number: 0,
			descriptionNumber: 0,
			video: "",
			invest: "",
			comment: "",
			userComment: "",
			heading: "",
			detail: detail,
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
					name={"detail"}
					label={"Nội dung"}
					rules={[
						{
							required: true,
							message: "Chưa nhập nội dung",
						},
					]}
				>
					{/* <Input placeholder="Nhập nội dung" /> */}
					<ReactQuill
						theme="snow"
						value={detail}
						onChange={setDetail}
					/>
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

export default AdminCMSBannerServices;
