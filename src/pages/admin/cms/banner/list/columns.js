export const columnsBanner = [
	{
		dataIndex: "detail",
		title: "Nội dung",
		render: (text) => (
			<p
				dangerouslySetInnerHTML={{
					__html: text,
				}}
			></p>
		),
	},
	{
		dataIndex: "img",
		title: "Ảnh",
	},
	{
		dataIndex: "action",
		width: "10%",
	},
];
