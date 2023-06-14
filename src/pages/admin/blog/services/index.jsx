import { Button, Form, Input, message, Spin, Upload } from "antd";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { getDetailBlog, postBlog, updateBlog } from "../../../../apis/blog/api";
import { getLink } from "../../../../helper/getLink";
import ReactQuill from "react-quill";
import { UploadOutlined } from "@ant-design/icons";

const AdminBlogUpdate = ({ id, closeDrawer, setReloadData }) => {
	const quillRef = useRef(null);
	const [form] = Form.useForm();
	const [loading, setLoading] = useState(false);
	const [content, setContent] = useState("");
	const [selected, setSelected] = useState("");

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

	const imageHandler = (e) => {
		const input = document.createElement("input");
		input.setAttribute("type", "file");
		input.setAttribute("accept", "image/*");
		input.click();
		input.onchange = async () => {
			const file = input.files[0];
			const link = await getLink(file)
				.then((response) => {
					return response;
				})
				.catch(() => {});
			const range = quillRef.current.getEditor().getSelection(true);
			quillRef.current.getEditor().insertEmbed(range, "image", link);
		};
	};

	const modules = useMemo(
		() => ({
			toolbar: {
				container: [
					[{ header: [1, 2, 3, 4, false] }],
					["bold", "italic", "underline", "strike", "blockquote"],
					[{ list: "ordered" }, { list: "bullet" }],
					["link", "image"],
				],
				handlers: {
					image: imageHandler,
				},
			},
		}),
		[]
	);

	const formats = [
		"header",
		"bold",
		"italic",
		"underline",
		"strike",
		"blockquote",
		"list",
		"bullet",
		"link",
		"color",
		"image",
		"background",
		"align",
		"size",
		"font",
	];

	useEffect(() => {
		if (id) {
			setLoading(true);
			getDetailBlog(id)
				.then((response) => {
					form.setFieldsValue(response?.data[0]);
					setLoading(false);
					setSelected(response?.data[0]?.img);
					setContent(response?.data[0]?.content);
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
			content: content,
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
					<ReactQuill
						ref={quillRef}
						theme="snow"
						value={content}
						onChange={setContent}
						modules={modules}
						formats={formats}
						onBlur={() => {}}
						onFocus={() => {}}
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

export default AdminBlogUpdate;
