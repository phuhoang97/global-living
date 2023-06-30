import React, { useEffect, useRef, useState } from "react";
import { pageTitle } from "../../helper";
import Cta from "../Cta";
import PageHeading from "../PageHeading";
import Pagination from "../Pagination";
import PostStyle2 from "../Post/PostStyle2";
import Div from "../Div";
import Sidebar from "../Sidebar.jsx";
import Spacing from "../Spacing";
import Slider from "react-slick";
import "react-multi-carousel/lib/styles.css";
import dayjs from "dayjs";
import { getAllBlogs } from "../../apis/blog/api";
import SectionHeading from "../SectionHeading";
import PostSlider from "../Slider/PostSlider";

export default function BlogPage() {
	pageTitle("Tin Tức");
	const settings = {
		arrows: false,
		infinite: true,
		speed: 500,
		slidesToShow: 2,
		slidesToScroll: 2,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
				},
			},
		],
	};
	const sliderRef = useRef(null);
	const postData = [
		{
			thumb: "/images/post_4.jpeg",
			title: "A.I will take all human job within next year",
			subtitle:
				"Elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique. Tortor posuere ac ut consequat semper viverra nam libero justo. Mauris commodo quis imperdiet massa tincidunt nunc pulvinar sapien et. Aliquam purus sit amet luctus venenatis lectus magna fringilla urna. Purus sit amet luctus venenatis lectus. Nunc aliquet bibendum enim facilisis. Pretium viverra suspendisse potenti nullam ac tortor vitae.",
			date: "07 Mar 2022",
			category: "Tech",
			categoryHref: "/blog",
			href: "/blog/blog-details",
		},
		{
			thumb: "/images/post_5.jpeg",
			title: "Creative studio programm coming soon",
			subtitle:
				"Elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique. Tortor posuere ac ut consequat semper viverra nam libero justo. Mauris commodo quis imperdiet massa tincidunt nunc pulvinar sapien et. Aliquam purus sit amet luctus venenatis lectus magna fringilla urna. Purus sit amet luctus venenatis lectus. Nunc aliquet bibendum enim facilisis. Pretium viverra suspendisse potenti nullam ac tortor vitae.",
			date: "05 Mar 2022",
			category: "Photography",
			categoryHref: "/blog",
			href: "/blog/blog-details",
		},
		{
			thumb: "/images/post_6.jpeg",
			title: "Artistic mind will be great for creation",
			subtitle:
				"Elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique. Tortor posuere ac ut consequat semper viverra nam libero justo. Mauris commodo quis imperdiet massa tincidunt nunc pulvinar sapien et. Aliquam purus sit amet luctus venenatis lectus magna fringilla urna. Purus sit amet luctus venenatis lectus. Nunc aliquet bibendum enim facilisis. Pretium viverra suspendisse potenti nullam ac tortor vitae.",
			date: "04 Mar 2022",
			category: "Tech",
			categoryHref: "/blog",
			href: "/blog/blog-details",
		},
	];

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<>
			<PageHeading
				title="Tin Tức"
				bgSrc="/images/blog_hero_bg.jpeg"
				pageLinkText="Blog"
			/>
			{/* <Spacing lg="150" md="80" /> */}
			{/* <Div className="container">
				<Div className="row items-center justify-center">
					<Div className="col-lg-8">
						{dataSource.map((item, index) => (
							<Div key={index}>
								<PostStyle2
									thumb={item.thumb}
									title={item.title}
									subtitle={item.subtitle}
									date={item.date}
									category={item.category}
									categoryHref={item.categoryHref}
									href={item.href}
								/>
								{dataSource.length > index + 1 && (
									<Spacing lg="95" md="60" />
								)}
							</Div>
						))}
					</Div>
				</Div>
			</Div> */}

			<Div className="container">
				<Div className="row">
					<Div className="col-xl-12 text-center">
						{/* <SectionHeading
							title="Tin tức"
							subtitle="Our Blog"
							// btnText="Xem thêm"
							// btnLink="/blog"
						/> */}
						<Spacing lg="90" md="45" />
					</Div>
					<Div
						// className="col-xl-12 offset-xl-1"
						className="col-xl-12"
					>
						{/* <Div className="cs-half_of_full_width"> */}
						<Div>
							<PostSlider />
						</Div>
					</Div>
				</Div>
			</Div>

			{/* <Spacing lg="60" md="40" /> */}
			{/* <Pagination /> */}
			{/* <Div className="col-xl-3 col-lg-4 offset-xl-1">
						<Spacing lg="0" md="80" />
						<Sidebar />
					</Div> */}
			{/* <div className="latestNews">
				<div>
					<p>TIN TỨC MỚI NHẤT VỀ</p>
					<select>
						<option value="1">Hungary</option>
						<option value="2">1 Noi nao do</option>
					</select>
				</div>

				<div
					style={{ maxWidth: "90%", width: "90%", margin: "auto" }}
					className={"latestNews__slide"}
				>
					<button
						className="prev"
						onClick={() => sliderRef.current.slickPrev()}
					>
						<img src="/assits/icons/prev-icon.svg" alt="icon" />
					</button>
					<Slider ref={sliderRef} {...settings}>
						{[1, 2, 3, 4].map((image, index) => {
							return (
								<div className="carouselItem">
									<p>TIN TỨC THỊ TRƯỜNG</p>
									<p>BẤT ĐỘNG SẢN GLOBAL LIVING </p>
									<button>Xem thêm</button>
									<img
										src="/assits/Rectangle175.png"
										alt="photo"
									/>
								</div>
							);
						})}
					</Slider>
					<button
						className="next"
						onClick={() => sliderRef.current.slickNext()}
					>
						<img src="/assits/icons/next-icon.svg" alt="icon" />
					</button>
				</div>
			</div>
			<div className="questions">
				<div className="questions-text">
					<p>NHỮNG CÂU HỎI PHỔ BIẾN VỀ</p>
					<button>Hungary</button>
				</div>
				<div className="question-type">
					<div className="question-select">
						<select>
							<option>Quy trình - Thủ tục</option>
							<option disabled> Thông tin cần render</option>
						</select>
					</div>
					<div>
						<select>
							<option>Chi phí - Thuế</option>
							<option disabled> Thông tin cần render</option>
						</select>
					</div>
					<div>
						<select>
							<option>Dịch vụ từ Global Living</option>
							<option disabled> Thông tin cần render</option>
						</select>
					</div>
					<div>
						<select>
							<option>Câu hỏi chi tiết</option>
							<option disabled> Thông tin cần render</option>
						</select>
					</div>
				</div>
			</div> */}
			<Spacing lg="150" md="80" />
			<Div className="container">
				<Cta
					title="Trở thành Đại lý/Cộng tác viên <br />phân phối <i>ĐỘC QUYỀN</i>"
					btnText="Đăng ký ngay tham gia làm Cộng tác viên/ Đại lý"
					btnLink="/register"
					bgSrc="/images/cta_bg.jpeg"
				/>
			</Div>
		</>
	);
}
