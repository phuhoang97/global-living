import React, { useEffect } from "react";
import { pageTitle } from "../../helper";
import Hero7 from "../Hero/Hero7";

export default function MainProduct() {
	pageTitle("Sản phẩm đầu tư");
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	const heroSocialLinks = [
		{
			name: "Fanpage",
			links: "https://www.facebook.com/globalliving.group",
		},
		{
			name: "Youtube",
			links: "https://www.youtube.com/@GlobalLivingGroup",
		},
		{
			name: "Zalo",
			links: "https://zalo.me/2666483498675431364",
		},
		{
			name: "Hotline: 093 162 69 09",
		},
	];

	const showcaseData = [
		{
			title: "Hungary <br />Budapest",
			imgUrl: "/images/gl-images/budapest/product_image_1.jpg",
			href: "https://info.globalliving-group.com/hungary",
		},
		{
			title: "Dự án <br />2",
			imgUrl: "/images/slider_4.jpeg",
			href: "/case-study/case-study-details",
		},
		{
			title: "Dự án <br />3",
			imgUrl: "/images/slider_5.jpeg",
			href: "/case-study/case-study-details",
		},
		{
			title: "Dự án <br />4",
			imgUrl: "/images/slider_4.jpeg",
			href: "/case-study/case-study-details",
		},
		{
			title: "Dự án <br />5",
			imgUrl: "/images/slider_2.jpeg",
			href: "/case-study/case-study-details",
		},
	];
	return (
		<>
			<Hero7
				heroSocialLinks={heroSocialLinks}
				socialLinksHeading="Follow Us"
				showcaseData={showcaseData}
			/>
		</>
	);
}
