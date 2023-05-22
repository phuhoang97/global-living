import { Table } from "antd";

const CommonTable = ({ columns, dataSource }) => {
	return <Table columns={columns} dataSource={dataSource} />;
};

export default CommonTable;
