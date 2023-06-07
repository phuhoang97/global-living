export const columnsVideo = [
	{
		dataIndex: "video",
		title: "Video",
		align: "center",
		render: (text) => (
			<a href={text} target="_blank">
				Xem video
			</a>
		),
	},
	{
		dataIndex: "action",
		width: "10%",
	},
];
