import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import Div from "../Div";
import Post from "../Post";
import { Icon } from "@iconify/react";
import dayjs from "dayjs";
import { getAllBlogs } from "../../apis/blog/api";

const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
	<div
		{...props}
		className={
			"slick-prev slick-arrow" +
			(currentSlide === 0 ? " slick-disabled" : "")
		}
		aria-hidden="true"
		aria-disabled={currentSlide === 0 ? true : false}
	>
		<Icon icon="bi:arrow-left" />
	</div>
);

const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
	<div
		{...props}
		className={
			"slick-next slick-arrow" +
			(currentSlide === slideCount - 1 ? " slick-disabled" : "")
		}
		aria-hidden="true"
		aria-disabled={currentSlide === slideCount - 1 ? true : false}
	>
		<Icon icon="bi:arrow-right" />
	</div>
);

export default function PostSlider({ noArrow }) {
	const [nav, setNav] = useState();
	const [dataSource, setDataSource] = useState([]);

	const mapData = (data) => {
		if (!data || data?.length <= 0) return [];
		return data?.map((item) => {
			return {
				...item,
				url: `/blog/${item?.id}`,
				src: item?.img,
				alt: "Post",
				date: dayjs(item?.createDate)?.format("DD/MM/YYYY"),
				title: item?.title,
			};
		});
	};

	const postData = [
		{
			url: "/blog/blog-details",
			src: "/images/post_1.jpeg",
			alt: "Post",
			date: "07 Mar 2022",
			title: "How to keep fear from ruining your art business with confident",
		},
		{
			url: "/blog/blog-details",
			src: "/images/post_2.jpeg",
			alt: "Post",
			date: "10 Feb 2022",
			title: "Artistic mind will be great for creation anything",
		},
		{
			url: "/blog/blog-details",
			src: "/images/post_3.jpeg",
			alt: "Post",
			date: "05 Mar 2022",
			title: "A.I will take over all job for human within next year",
		},
		{
			url: "/blog/blog-details",
			src: "/images/post_1.jpeg",
			alt: "Post",
			date: "07 Mar 2022",
			title: "How to keep fear from ruining your art business with confident",
		},
		{
			url: "/blog/blog-details",
			src: "/images/post_2.jpeg",
			alt: "Post",
			date: "10 Feb 2022",
			title: "Artistic mind will be great for creation anything",
		},
		{
			url: "/blog/blog-details",
			src: "/images/post_3.jpeg",
			alt: "Post",
			date: "05 Mar 2022",
			title: "A.I will take over all job for human within next year",
		},
	];

	/** Slider Settings **/
	const settings = {
		dots: true,
		arrows: noArrow ? false : true,
		infinite: true,
		autoplay: true,
		autoplaySpeed: 4000,
		speed: 1000,
		slidesToShow: 3,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 1600,
				settings: {
					slidesToShow: 3,
				},
			},
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 2,
				},
			},
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 2,
				},
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
				},
			},
		],
	};

	useEffect(() => {
		getAllBlogs().then((response) => {
			setDataSource([
				{
					url: "/blog/1",
					src: "/images/blog1.jpg",
					alt: "Post",
					date: "08/06/2023",
					title: "Tốc độ tăng giá BĐS",
				},
				{
					url: "/blog/2",
					src: "/images/blog2.jpg",
					alt: "Post",
					date: "08/06/2023",
					title: "Những điều cần biết về du học Hungary",
				},
				{
					url: "/blog/3",
					src: "/images/blog3.jpg",
					alt: "Post",
					date: "08/06/2023",
					title: "Quyền lợi visa Hungary",
				},
				{
					url: "/blog/4",
					src: "/images/blog4.jpg",
					alt: "Post",
					date: "08/06/2023",
					title: "Khám phá 10 điểm du lịch đẹp",
				},
				...mapData(response?.data),
			]);
		});
	}, []);

	return (
		<Slider
			{...settings}
			asNavFor={nav}
			ref={(slider) => setNav(slider)}
			prevArrow={<SlickArrowLeft />}
			nextArrow={<SlickArrowRight />}
			className="cs-gap-24 cs-arrow_style1 cs-arrow_style4"
		>
			{dataSource.map((item, index) => (
				<Div key={index}>
					<Post
						url={item.url}
						src={item.src}
						alt={item.alt}
						date={item.date}
						title={item.title}
					/>
				</Div>
			))}
		</Slider>
	);
}
