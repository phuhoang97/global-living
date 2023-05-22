import { Card, Col, Row } from "antd";
import React from "react";
import AreaChart from "../../common/charts/area/AreaChart";
import BarChart from "../../common/charts/bar/BarChart";
import ColumnChart from "../../common/charts/column/ColumnChart";
import LineChartAnimation from "../../common/charts/line/LineAnimation";

const DefaultPage = () => {
	return (
		<Row gutter={12} wrap>
			<Col span={12}>
				<Card className="shadow-lg">
					<LineChartAnimation />
				</Card>
			</Col>
			<Col span={12}>
				<Card className="shadow-lg">
					<ColumnChart />
				</Card>
			</Col>
			<Col span={12}>
				<Card className="shadow-lg">
					<BarChart />
				</Card>
			</Col>
			<Col span={12}>
				<Card className="shadow-lg">
					<AreaChart />
				</Card>
			</Col>
		</Row>
	);
};

export default DefaultPage;
