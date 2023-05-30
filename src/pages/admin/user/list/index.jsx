import { Drawer, Popconfirm, Table, message } from "antd";
import React, { useEffect, useState } from "react";
import { columns } from "./columns";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { deleteUser, getAllUsers } from "../../../../apis/users/api";
import AdminAddUser from "../services/add";
import PermissionButton from "../../../../common/permissions/button";
import jwtDecode from "jwt-decode";
import { useLocation } from "react-router-dom";
import { convertAreaName } from "../../../../helper";

const AdminListUsers = () => {
	const token = localStorage.getItem("token");
	const decode = jwtDecode(token);
	const hasPermission = decode?.role === 1 || decode?.role === 2;
	const { pathname } = useLocation();
	const pathnameSplit = pathname.split("/");
	const endpoint = pathnameSplit[pathnameSplit?.length - 1];
	const [loading, setLoading] = useState(false);
	const [open, setOpen] = useState(false);
	const [id, setId] = useState(0);
	const [reloadData, setReloadData] = useState(false);
	const [dataSource, setDataSource] = useState([]);

	const onDelete = (id) => {
		setLoading(true);
		deleteUser(id)
			.then(() => {
				message.success("Xóa người dùng thành công!");
				setReloadData(true);
				setLoading(false);
			})
			.catch(() => {
				message.error("Xóa người dùng thất bại!");
				setLoading(false);
			});
	};

	const checkPermissionAction = (role, item) => {
		if (decode?.role === 1) {
			return (
				<>
					<Popconfirm
						title="Xóa User"
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
				</>
			);
		} else {
			if (decode?.role === 2) {
				if (role === 1) {
					return <></>;
				} else {
					return (
						<>
							<Popconfirm
								title="Xóa User"
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
						</>
					);
				}
			}
		}
	};

	const mapData = (data) => {
		if (!data || data?.length <= 0) return [];

		return data?.map((item) => ({
			...item,
			key: item?.id,
			area: convertAreaName(item?.area),
			action: checkPermissionAction(item?.role, item),
		}));
	};

	const getData = () => {
		setLoading(true);
		getAllUsers()
			.then((response) => {
				setLoading(false);
				setDataSource(
					mapData(
						response?.users?.filter(
							(item) => item?.area === endpoint
						)
					)
				);
			})
			.catch((err) => console.log(err));
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

	const handleOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<>
			<PermissionButton onClick={handleOpen} isShow={hasPermission} />
			<Table
				dataSource={dataSource}
				columns={columns}
				loading={loading}
			/>

			<Drawer
				open={open}
				title={!id ? "Thêm mới" : "Cập nhật"}
				onClose={handleClose}
				destroyOnClose
				width={600}
			>
				<AdminAddUser
					id={id}
					closeDrawer={handleClose}
					setReloadData={setReloadData}
				/>
			</Drawer>
		</>
	);
};

export default AdminListUsers;
