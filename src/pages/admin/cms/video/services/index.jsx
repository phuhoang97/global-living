import { UploadOutlined } from "@ant-design/icons";
import { Button, Form, message, Spin, Upload } from "antd";
import React, { useEffect, useState } from "react";
import {
	getDetailDataHomePage,
	postDataHomePage,
	updateDataHomePage,
} from "../../../../../apis/home/api";
import { getLinkVideo } from "../../../../../helper/getLink";

const AdminCMSVideoServices = ({ id, closeDrawer, setReloadData }) => {
	const [form] = Form.useForm();
	const [selected, setSelected] = useState({});
	const [loading, setLoading] = useState(false);
	const [fileList, setFileList] = useState([]);

	const props = {
		beforeUpload: (file) => {
			setLoading(true);
			getLinkVideo(file)
				.then((response) => {
					setLoading(false);
					setSelected(response);
				})
				.catch(() => {
					setLoading(false);
				});
		},
		maxCount: 1,
		defaultFileList: fileList,
	};

	useEffect(() => {
		if (id) {
			setLoading(true);
			getDetailDataHomePage(id)
				.then((response) => {
					form.setFieldsValue(response?.data[0]);
					setLoading(false);
					setFileList(response?.data[0]?.video);
				})
				.catch(() => {
					setLoading(false);
				});
		}
	}, [id]);

	const onFinish = (values) => {
		values = {
			...values,
			title: "video",
			img: null,
			number: 0,
			descriptionNumber: 0,
			video: selected,
			comment: "",
			userComment: "",
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
					message.success("Thêm mới video thành công!");
				})
				.catch(() => {
					setLoading(false);
					message.error("Thêm mới video thất bại!");
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
					message.success("Cập nhật video thành công!");
				})
				.catch(() => {
					setLoading(false);
					message.error("Cập nhật video thất bại!");
				});
		}
	};

	return (
		<Spin spinning={loading}>
			<Form form={form} onFinish={onFinish} layout="vertical">
				<Form.Item
					name={"video"}
					label={"Video"}
					rules={[{ required: true, message: "Chưa chọn video" }]}
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

export default AdminCMSVideoServices;
