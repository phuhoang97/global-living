import { Drawer, Popconfirm, Table, message } from "antd";
import React, { useEffect, useState } from "react";
import { columns } from "./columns";
import {
	deleteDocumentSale,
	getAllDocumentSales,
} from "../../../../apis/document-sales/api";
import AminAddDocumentSales from "../services";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { convertCategoryName } from "../../../../helper";
import { useLocation } from "react-router-dom";
import PermissionButton from "../../../../common/permissions/button";
import jwtDecode from "jwt-decode";

const AdminListDocumentSales = () => {
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
		deleteDocumentSale(id)
			.then(() => {
				message.success("Xóa thành công!");
				setReloadData(true);
			})
			.catch(() => {
				message.error("Xóa thất bại!");
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

	const getData = () => {
		setLoading(true);
		getAllDocumentSales().then((response) => {
			setLoading(false);
			setDataSource(
				mapData(
					response?.data?.filter(
						(item) => item?.category === endpoint
					)
				)
			);
		});
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
				<AminAddDocumentSales
					id={id}
					closeDrawer={handleClose}
					setReloadData={setReloadData}
				/>
			</Drawer>
		</>
	);
};

export default AdminListDocumentSales;
