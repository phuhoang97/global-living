import { Table } from "antd";
import React, { useEffect, useState } from "react";
import { getAllContacts } from "../../../../apis/contact/api";
import { columns } from "./columns";

const AdminListContact = () => {
	const [loading, setLoading] = useState(false);
	const [dataSource, setDataSource] = useState([]);

	useEffect(() => {
		setLoading(true);
		getAllContacts()
			.then((response) => {
				setDataSource(response?.data);
				setLoading(false);
			})
			.catch(() => {
				setLoading(false);
			});
	}, []);

	return (
		<Table columns={columns} dataSource={dataSource} loading={loading} />
	);
};

export default AdminListContact;
