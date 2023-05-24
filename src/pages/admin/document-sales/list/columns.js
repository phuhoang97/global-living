import { convertTextToLink } from "../../../../helper";

export const columns = [
	{
		dataIndex: "title",
		title: "Title",
	},
	{
		dataIndex: "category",
		title: "Category",
	},
	{
		dataIndex: "image",
		title: "Image",
		render: (text) => (
			<img src={text} alt="image" style={{ width: "100px" }} />
		),
		width: "300px",
	},
	{
		dataIndex: "link",
		title: "Link",
		render: (text) => <span>{convertTextToLink(text)}</span>,
	},
	{ dataIndex: "action", width: "4%" },
];
