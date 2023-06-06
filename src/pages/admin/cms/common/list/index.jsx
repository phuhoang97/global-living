import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Drawer, message, Popconfirm, Table } from "antd";
import jwtDecode from "jwt-decode";
import React, { useEffect, useState } from "react";
import { useCallback } from "react";
import { useLocation } from "react-router-dom";
import {
	deleteDataHomePage,
	getAllDataHomePage,
} from "../../../../../apis/home/api";
import PermissionButton from "../../../../../common/permissions/button";
import { columnsComment } from "../../comment/list/columns";
import AdminCMSCommentServices from "../../comment/services";
import { columnsVideo } from "../../video/list/columns";
import AdminCMSVideoServices from "../../video/services";

const AdminCMSList = () => {
	const token = localStorage.getItem("token");
	const decode = jwtDecode(token);
	const hasPermission = decode?.role === 1 || decode?.role === 2;
	const { pathname } = useLocation();
	const pathnameSplit = pathname.split("/");
	const endpoint = pathnameSplit[pathnameSplit?.length - 1];
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
							title="Xóa?"
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
		deleteDataHomePage(id)
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
		getAllDataHomePage()
			.then((response) => {
				setDataSource(
					mapData(
						response?.data?.filter(
							(item) => item?.title?.toLowerCase() === endpoint
						)
					)
				);
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
	}, [endpoint]);

	useEffect(() => {
		if (reloadData) {
			getData();
		}

		return () => {
			setReloadData(false);
		};
	}, [reloadData]);

	const checkTypeColumns = () => {
		switch (endpoint) {
			case "video":
				return columnsVideo;
			case "comment":
				return columnsComment;
			default:
				break;
		}
	};

	const checkTypeService = () => {
		switch (endpoint) {
			case "video":
				return (
					<AdminCMSVideoServices
						id={id}
						closeDrawer={handleClose}
						setReloadData={setReloadData}
					/>
				);
			case "comment":
				return (
					<AdminCMSCommentServices
						id={id}
						closeDrawer={handleClose}
						setReloadData={setReloadData}
					/>
				);
			default:
				break;
		}
	};

	return (
		<>
			<PermissionButton onClick={handleOpen} isShow={hasPermission} />
			<Table
				columns={checkTypeColumns()}
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
				{checkTypeService()}
			</Drawer>
		</>
	);
};

export default AdminCMSList;
