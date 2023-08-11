export const columnsLocation = [
	{
		dataIndex: "heading",
		title: "Địa chỉ Hà Nội",
		render: (text) => (
			<p
				dangerouslySetInnerHTML={{
					__html: text,
				}}
			></p>
		),
	},
	{
		dataIndex: "detail",
		title: "Địa chỉ Thành phố Hồ Chí Minh",
		render: (text) => (
			<p
				dangerouslySetInnerHTML={{
					__html: text,
				}}
			></p>
		),
	},
	{
		dataIndex: "invest",
		title: "Địa chỉ Nha Trang",
		render: (text) => (
			<p
				dangerouslySetInnerHTML={{
					__html: text,
				}}
			></p>
		),
	},
	{
		dataIndex: "action",
		width: "10%",
	},
];
