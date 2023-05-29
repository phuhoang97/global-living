export const pageTitle = (title) => {
	return (document.title = title + " - Global Living Group");
};

export function convertTextToLink(text) {
	const urlRegex = /(https?:\/\/[^\s]+)/g;
	return text?.replace(urlRegex, (url) => {
		return `<a href="${url}" target="_blank" class="underline">${url}</a>`;
	});
}

export function convertCategoryName(category) {
	const categories = [
		{
			title: "Tư liệu truyền thông",
			category: "web_design",
		},
		{
			title: "Tài liệu bán hàng",
			category: "ui_ux_design",
		},
		{
			title: "Thông tin chương trình",
			category: "mobile_apps",
		},
		{
			title: "Thiết kế",
			category: "logo_design",
		},
	];

	return categories?.find((item) => item?.category === category)?.title;
}

export const convertProductName = (productName) => {
	switch (productName) {
		case "1bed":
			return "Căn hộ 1 phòng ngủ";
		case "2bed":
			return "Căn hộ 2 phòng ngủ";
		case "3bed":
			return "Căn hộ 3 phòng ngủ";
		case "4bed":
			return "Căn hộ 4 phòng ngủ";
		case "studio":
			return "Căn hộ Studio";
		default:
			return productName;
	}
};
