export const columnsWebsite = [
  {
    dataIndex: "heading",
    title: "Web liên hệ",
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
