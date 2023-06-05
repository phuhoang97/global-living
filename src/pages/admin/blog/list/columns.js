export const columns = [
	{
		dataIndex: "title",
		title: "Tiêu đề",
	},
	{
		dataIndex: "content",
		title: "Nội dung",
	},
	{
		dataIndex: "img",
		title: "Ảnh",
		render: (text) => (
			<img src={text} alt="image" style={{ width: "100px" }} />
		),
		width: "300px",
	},
	{
		dataIndex: "action",
		width: "10%",
	},
];
