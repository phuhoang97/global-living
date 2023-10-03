export const columnsHotline = [
  {
    dataIndex: "heading",
    title: "Số điện thoại liên hệ",
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
