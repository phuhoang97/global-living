import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Drawer, message, Popconfirm, Table } from "antd";
import jwtDecode from "jwt-decode";
import React, { useEffect } from "react";
import { useState } from "react";
import { deleteBlog, getAllBlogs } from "../../../../apis/blog/api";
import PermissionButton from "../../../../common/permissions/button";
import AdminBlogUpdate from "../services";
import { columns } from "./columns";

const AdminBlogList = () => {
	const token = localStorage.getItem("token");
	const decode = jwtDecode(token);
	const hasPermission = decode?.role === 1 || decode?.role === 2;
	const [dataSource, setDataSource] = useState([]);
	const [loading, setLoading] = useState(false);
	const [open, setOpen] = useState(false);
	const [reloadData, setReloadData] = useState(false);
	const [id, setId] = useState(0);

	const mapData = (data) => {
		if (!data || data?.length <= 0) return [];
		return data?.map((item) => {
			return {
				...item,
				key: item?.id,
				action: hasPermission ? (
					<div className="w-full flex items-center justify-center">
						<Popconfirm
							title="Xóa bài viết?"
							onConfirm={() => onDelete(item?.id)}
							okText="Đồng ý"
							cancelText="Hủy"
						>
							<DeleteOutlined className="cursor-pointer" />
						</Popconfirm>
						<EditOutlined
							className="cursor-pointer mx-3"
							onClick={() => {
								setId(item?.id);
								setOpen(true);
							}}
						/>
					</div>
				) : (
					<></>
				),
			};
		});
	};

	const onDelete = (id) => {
		deleteBlog(id)
			.then(() => {
				message.success("Xóa thành công!");
				setReloadData(true);
			})
			.catch(() => {
				message.error("Xóa thất bại!");
			});
	};

	const getData = () => {
		setLoading(true);
		getAllBlogs()
			.then((response) => {
				setDataSource(mapData(response?.data));
				setLoading(false);
			})
			.catch(() => {
				setLoading(false);
			});
	};

	const handleOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
		setId(0);
	};

	useEffect(() => {
		getData();
	}, []);

	useEffect(() => {
		if (reloadData) {
			getData();
		}

		return () => {
			setReloadData(false);
		};
	}, [reloadData]);

	return (
		<>
			<PermissionButton onClick={handleOpen} isShow={hasPermission} />
			<Table
				columns={columns}
				dataSource={dataSource}
				loading={loading}
			/>
			<Drawer
				open={open}
				title={id ? "Cập nhật" : "Thêm mới"}
				onClose={handleClose}
				destroyOnClose
				width={600}
			>
				<AdminBlogUpdate
					id={id}
					closeDrawer={handleClose}
					setReloadData={setReloadData}
				/>
			</Drawer>
		</>
	);
};

export default AdminBlogList;
