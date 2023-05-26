import { convertTextToLink } from "../../../../helper";

export const columns = [
	{
		dataIndex: "title",
		title: "Tiêu đề",
	},
	{
		dataIndex: "category",
		title: "Mục",
	},
	{
		dataIndex: "image",
		title: "Ảnh",
		render: (text) => (
			<img src={text} alt="image" style={{ width: "100px" }} />
		),
		width: "300px",
	},
	{
		dataIndex: "link",
		title: "Đường dẫn",
		render: (text) => (
			<span
				dangerouslySetInnerHTML={{ __html: convertTextToLink(text) }}
			></span>
		),
		width: "30%",
		ellipsis: true,
	},
	{ dataIndex: "action", width: "4%" },
];
