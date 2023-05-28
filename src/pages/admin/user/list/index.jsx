import { Drawer, Popconfirm, Table, message } from "antd";
import React, { useEffect, useState } from "react";
import { columns } from "./columns";
import { DeleteOutlined } from "@ant-design/icons";
import { deleteUser, getAllUsers } from "../../../../apis/users/api";
import AdminAddUser from "../services/add";
import PermissionButton from "../../../../common/permissions/button";
import { getMe } from "../../../../apis/login/api";

const AdminListUsers = () => {
	const tokenDecode = getMe();
	const hasPermission = tokenDecode?.role === 1 || tokenDecode?.role === 2;
	const [loading, setLoading] = useState(false);
	const [open, setOpen] = useState(false);
	const [reloadData, setReloadData] = useState(false);
	const [dataSource, setDataSource] = useState([]);

	const onDelete = (id) => {
		deleteUser(id)
			.then(() => message.success("Xóa người dùng thành công!"))
			.catch(() => message.error("Xóa người dùng thất bại!"));
	};

	const mapData = (data) => {
		if (!data || data?.length <= 0) return [];

		return data?.map((item) => ({
			...item,
			key: item?.id,
			action: (
				<>
					<Popconfirm
						title="Xóa User"
						onConfirm={() => onDelete(item?.id)}
						okText="Đồng ý"
						cancelText="Hủy"
					>
						<DeleteOutlined className="cursor-pointer" />
					</Popconfirm>
				</>
			),
		}));
	};

	const getData = () => {
		setLoading(true);
		getAllUsers()
			.then((response) => {
				setLoading(false);
				setDataSource(mapData(response?.users));
			})
			.catch((err) => console.log(err));
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
				title={"Thêm mới"}
				onClose={handleClose}
				destroyOnClose
			>
				<AdminAddUser
					closeDrawer={handleClose}
					setReloadData={setReloadData}
				/>
			</Drawer>
		</>
	);
};

export default AdminListUsers;
