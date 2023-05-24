export const pageTitle = (title) => {
	return (document.title = title + " - Global Living Group");
};

export function convertTextToLink(text) {
	const urlRegex = /(https?:\/\/[^\s]+)/g;
	return text?.replace(urlRegex, (url) => {
		return `<a href="${url}" target="_blank" class="underline">${url}</a>`;
	});
}
