import { Button, Drawer, Table } from "antd";
import React, { useEffect, useState } from "react";
import { columns } from "./columns";
import { getAllDocumentSales } from "../../../../apis/document-sales/api";
import AminAddDocumentSales from "../services/add";
import { MenuOutlined } from "@ant-design/icons";
import { convertCategoryName } from "../../../../helper";

const AdminListDocumentSales = () => {
	const [open, setOpen] = useState(false);
	const [reloadData, setReloadData] = useState(false);
	const [dataSource, setDataSource] = useState([]);

	const mapData = (data) => {
		if (!data || data?.length <= 0) return [];

		return data?.map((item) => ({
			...item,
			category: convertCategoryName(item?.category),
			action: (
				<>
					<MenuOutlined className="cursor-pointer" />
				</>
			),
		}));
	};

	const getData = () => {
		getAllDocumentSales().then((response) => {
			setDataSource(mapData(response?.data));
		});
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
			<div className="p-2">
				<Button onClick={handleOpen}>Thêm tài liệu bán hàng</Button>
			</div>
			<Table dataSource={dataSource} columns={columns} />

			<Drawer
				open={open}
				title={"Thêm mới tài liệu bán hàng"}
				onClose={handleClose}
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
