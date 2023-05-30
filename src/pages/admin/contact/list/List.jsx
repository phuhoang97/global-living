import { Popconfirm, Table, message } from "antd";
import React, { useEffect, useState } from "react";
import { deleteContact, getAllContacts } from "../../../../apis/contact/api";
import { convertProductName } from "../../../../helper";
import { columns } from "./columns";
import jwtDecode from "jwt-decode";
import { DeleteOutlined } from "@ant-design/icons";
import { useLocation } from "react-router-dom";

const AdminListContact = () => {
	const token = localStorage.getItem("token");
	const decode = jwtDecode(token);
	const hasPermission = decode?.role === 1 || decode?.role === 2;
	const { pathname } = useLocation();
	const pathnameSplit = pathname.split("/");
	const endpoint = pathnameSplit[pathnameSplit?.length - 1];
	const [loading, setLoading] = useState(false);
	const [reloadData, setReloadData] = useState(false);
	const [dataSource, setDataSource] = useState([]);

	const mapData = (data) => {
		if (!data || data?.length <= 0) return [];
		return data?.map((item) => {
			return {
				...item,
				key: item?.id,
				product: convertProductName(item?.product),
				action: hasPermission ? (
					<>
						<Popconfirm
							title="Xóa Contact?"
							onConfirm={() => onDelete(item?.id)}
							okText="Đồng ý"
							cancelText="Hủy"
						>
							<DeleteOutlined className="cursor-pointer" />
						</Popconfirm>
					</>
				) : (
					<></>
				),
			};
		});
	};

	const onDelete = (id) => {
		deleteContact(id)
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
		getAllContacts()
			.then((response) => {
				setDataSource(
					mapData(
						response?.users?.filter(
							(item) => item?.product === endpoint
						)
					)
				);
				setLoading(false);
			})
			.catch(() => {
				setLoading(false);
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

	return (
		<Table columns={columns} dataSource={dataSource} loading={loading} />
	);
};

export default AdminListContact;
