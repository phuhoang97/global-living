import { UploadOutlined } from "@ant-design/icons";
import { Button, Form, Input, message, Spin, Upload } from "antd";
import React, { useEffect, useState } from "react";
import { getDetailBlog, postBlog, updateBlog } from "../../../../apis/blog/api";
import { getLink } from "../../../../helper/getLink";

const AdminBlogUpdate = ({ id, closeDrawer, setReloadData }) => {
	const [form] = Form.useForm();
	const [selected, setSelected] = useState({});
	const [loading, setLoading] = useState(false);
	const [fileList, setFileList] = useState([]);

	const props = {
		beforeUpload: (file) => {
			getLink(file)
				.then((response) => {
					setSelected(response);
				})
				.catch(() => {});
		},
		maxCount: 1,
		defaultFileList: fileList,
	};

	useEffect(() => {
		if (id) {
			setLoading(true);
			getDetailBlog(id)
				.then((response) => {
					form.setFieldsValue(response?.data[0]);
					setLoading(false);
					setFileList(response?.data[0]?.img);
				})
				.catch(() => {
					setLoading(false);
				});
		}
	}, [id]);

	const onFinish = (values) => {
		values = {
			...values,
			img: selected,
		};

		setLoading(true);
		if (!id) {
			postBlog(values)
				.then(() => {
					if (closeDrawer) {
						closeDrawer();
					}

					if (setReloadData) {
						setReloadData(true);
					}
					setLoading(false);
					message.success("Thêm mới bài viết thành công!");
				})
				.catch(() => {
					setLoading(false);
					message.error("Thêm mới bài viết thất bại!");
				});
		} else {
			updateBlog(id, values)
				.then((response) => {
					if (closeDrawer) {
						closeDrawer();
					}

					if (setReloadData) {
						setReloadData(true);
					}
					setLoading(false);
					message.success("Cập nhật bài viết thành công!");
				})
				.catch(() => {
					setLoading(false);
					message.error("Cập nhật bài viết thất bại!");
				});
		}
	};

	return (
		<Spin spinning={loading}>
			<Form form={form} onFinish={onFinish} layout="vertical">
				<Form.Item
					name="title"
					label="Tiêu đề"
					rules={[
						{
							required: true,
							message: "Chưa nhập tiêu đề",
						},
					]}
				>
					<Input placeholder="Nhập tiêu đề" />
				</Form.Item>
				<Form.Item
					name="content"
					label="Nội dung"
					rules={[
						{
							required: true,
							message: "Chưa nhập nội dung",
						},
					]}
				>
					<Input.TextArea placeholder="Nhập nội dung" />
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

export default AdminBlogUpdate;
