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
