import React, { useEffect } from "react";
import Portfolio from "../Portfolio";
import Div from "../Div";
import Slider from "react-slick";
import { useState } from "react";
import { getAllDocumentSales } from "../../apis/document-sales/api";
import { getAllCategories } from "../../apis/category/api";

export default function PortfolioSlider() {
	const [dataSource, setDataSource] = useState([]);
	const portfolioData = [
		{
			title: "Colorful Art Work",
			subtitle: "See Details",
			href: "/portfolio/portfolio-details",
			src: "/images/portfolio_1.jpeg",
		},
		{
			title: "Colorful Art Work",
			subtitle: "See Details",
			href: "/portfolio/portfolio-details",
			src: "/images/portfolio_2.jpeg",
		},
		{
			title: "Colorful Art Work",
			subtitle: "See Details",
			href: "/portfolio/portfolio-details",
			src: "/images/portfolio_0.jpg",
		},
		{
			title: "Colorful Art Work",
			subtitle: "See Details",
			href: "/portfolio/portfolio-details",
			src: "/images/portfolio_3.jpeg",
		},
	];

	/** Slider Settings **/
	const settings = {
		className: "center",
		centerMode: true,
		infinite: true,
		centerPadding: "0",
		slidesToShow: 3,
		speed: 500,
		dots: true,
		arrows: false,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
				},
			},
		],
	};

	const mapData = (data) => {
		if (!data || data?.length <= 0) return [];
		return data?.map((item) => {
			return {
				...item,
				subtitle: "See Details",
			};
		});
	};

	const sortLatestItem = (items) => {
		const sortedResponse = items.sort((a, b) => {
			const dateA = new Date(a?.createDate);
			const dateB = new Date(b?.createDate);
			return dateB - dateA;
		});

		return sortedResponse[sortedResponse?.length - 1];
	};

	useEffect(() => {
		(async function fetchData() {
			// const latestUIUX = sortLatestItem(
			//     response?.data?.filter(
			//         (item) => item?.category === "ui_ux_design"
			//     )
			// );
			// const latestWebDesign = sortLatestItem(
			//     response?.data?.filter(
			//         (item) => item?.category === "web_design"
			//     )
			// );
			// const latestMobileApps = sortLatestItem(
			//     response?.data?.filter(
			//         (item) => item?.category === "mobile_apps"
			//     )
			// );
			// const latestLogoDesign = sortLatestItem(
			//     response?.data?.filter(
			//         (item) => item?.category === "logo_design"
			//     )
			// );

			// const mapItems = [
			//     latestUIUX,
			//     latestWebDesign,
			//     latestMobileApps,
			//     latestLogoDesign,
			// ];

			const categoriesData = await getAllCategories().then((response) => {
				return response?.categories;
			});

			const documentSalesData = await getAllDocumentSales().then(
				(response) => {
					return response?.data;
				}
			);

			const mergedArray = categoriesData.map((category) => {
				const index = documentSalesData.findIndex(
					(document) => document?.category === category?.id
				);
				if (index !== -1) {
					return { ...category, ...documentSalesData[index] };
				}
				return category;
			});

			setDataSource(mapData(mergedArray));
		})();
	}, []);

	return (
		<Slider {...settings} className="cs-slider cs-style3 cs-gap-24">
			{dataSource?.map((item) => {
				return (
					<Div key={item?.id}>
						<Portfolio
							title={item.title}
							subtitle={item.subtitle}
							href={item.link}
							src={item.image}
						/>
					</Div>
				);
			})}
		</Slider>
	);
}
