import { Button, Drawer, Popconfirm, Table, message } from "antd";
import React, { useEffect, useState } from "react";
import { columns } from "./columns";
import {
	deleteDocumentSale,
	getAllDocumentSales,
} from "../../../../apis/document-sales/api";
import AminAddDocumentSales from "../services/add";
import { DeleteOutlined } from "@ant-design/icons";
import { convertCategoryName } from "../../../../helper";
import { useLocation } from "react-router-dom";

const AdminListDocumentSales = () => {
	const { pathname } = useLocation();
	const pathnameSplit = pathname.split("/");
	const endpoint = pathnameSplit[pathnameSplit?.length - 1];
	const [loading, setLoading] = useState(false);
	const [open, setOpen] = useState(false);
	const [reloadData, setReloadData] = useState(false);
	const [dataSource, setDataSource] = useState([]);

	const onDelete = (id) => {
		deleteDocumentSale(id)
			.then(() => {
				message.success("Xóa thành công!");
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
			action: (
				<>
					<Popconfirm
						title="Xóa Document sales"
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
			<div className="p-2">
				<Button onClick={handleOpen}>Thêm tài liệu bán hàng</Button>
			</div>
			<Table
				dataSource={dataSource}
				columns={columns}
				loading={loading}
			/>

			<Drawer
				open={open}
				title={"Thêm mới tài liệu bán hàng"}
				onClose={handleClose}
				destroyOnClose
			>
				<AminAddDocumentSales
					closeDrawer={handleClose}
					setReloadData={setReloadData}
				/>
			</Drawer>
		</>
	);
};

export default AdminListDocumentSales;
