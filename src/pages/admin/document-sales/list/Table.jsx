import React, { useState } from "react";
import PermissionButton from "../../../../common/permissions/button";
import { Drawer, Popconfirm, Table, message } from "antd";
import AminAddDocumentSales from "../services";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { columns } from "./columns";
import jwtDecode from "jwt-decode";
import { deleteDocumentSale } from "../../../../apis/document-sales/api";
import { convertCategoryName } from "../../../../helper";

const AdminDocumentSalesTable = ({
	data,
	setReloadData,
	loading,
	setLoading,
}) => {
	const token = localStorage.getItem("token");
	const decode = jwtDecode(token);
	const hasPermission = decode?.role === 1 || decode?.role === 2;
	const [open, setOpen] = useState(false);
	const [id, setId] = useState(0);

	const onDelete = (id) => {
		setLoading(true);
		deleteDocumentSale(id)
			.then(() => {
				message.success("Xóa thành công!");
				setReloadData(true);
				setLoading(false);
			})
			.catch(() => {
				message.error("Xóa thất bại!");
				setLoading(false);
			});
	};

	const mapData = (data) => {
		if (!data || data?.length <= 0) return [];

		return data?.map((item) => ({
			...item,
			key: item?.id,
			category: convertCategoryName(item?.category),
			action: hasPermission ? (
				<div className="w-full flex items-center justify-center">
					<Popconfirm
						title="Xóa Document sales"
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
		}));
	};

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
				dataSource={mapData(data)}
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
				<AminAddDocumentSales
					id={id}
					closeDrawer={handleClose}
					setReloadData={setReloadData}
				/>
			</Drawer>
		</>
	);
};

export default AdminDocumentSalesTable;
