import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Drawer, message, Popconfirm, Table } from "antd";
import jwtDecode from "jwt-decode";
import React, { useEffect, useState } from "react";
import {
	deleteFaqQuestion,
	getAllFaqQuestions,
} from "../../../../../apis/faq/api";
import PermissionButton from "../../../../../common/permissions/button";
import { columns } from "./columns";
import AdminFAQQuestionServices from "../services";

const AdminFAQQuestionList = () => {
	const token = localStorage.getItem("token");
	const decode = jwtDecode(token);
	const hasPermission = decode?.role === 1 || decode?.role === 2;
	const [loading, setLoading] = useState(false);
	const [reloadData, setReloadData] = useState(false);
	const [dataSource, setDataSource] = useState([]);
	const [open, setOpen] = useState(false);
	const [id, setId] = useState(0);

	const onDelete = (id) => {
		deleteFaqQuestion(id)
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

	const getData = () => {
		setLoading(true);
		getAllFaqQuestions()
			.then((response) => {
				setLoading(false);
				setDataSource(mapData(response?.data));
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
		setId(0);
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
				<AdminFAQQuestionServices
					id={id}
					closeDrawer={handleClose}
					setReloadData={setReloadData}
				/>
			</Drawer>
		</>
	);
};

export default AdminFAQQuestionList;
