export const columnsBrandPosition = [
	{
		dataIndex: "heading",
		title: "Tiêu đề",
	},
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
