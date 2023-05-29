import { Table } from "antd";
import React, { useEffect, useState } from "react";
import { getAllContacts } from "../../../../apis/contact/api";
import { convertProductName } from "../../../../helper";
import { columns } from "./columns";

const AdminListContact = () => {
	const [loading, setLoading] = useState(false);
	const [dataSource, setDataSource] = useState([]);

	const mapData = (data) => {
		if (!data || data?.length <= 0) return [];
		return data?.map((item) => {
			return {
				...item,
				key: item?.id,
				product: convertProductName(item?.product),
			};
		});
	};

	useEffect(() => {
		setLoading(true);
		getAllContacts()
			.then((response) => {
				setDataSource(mapData(response?.users));
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
