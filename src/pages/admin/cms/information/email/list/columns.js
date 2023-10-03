export const columnsEmail = [
  {
    dataIndex: "heading",
    title: "Email liên hệ",
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
