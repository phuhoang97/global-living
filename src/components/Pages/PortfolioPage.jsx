import { Icon } from "@iconify/react";
import React, { useEffect } from "react";
import { useState } from "react";
import { pageTitle } from "../../helper";
import Cta from "../Cta";
import PageHeading from "../PageHeading";
import Portfolio from "../Portfolio";
import Div from "../Div";
import SectionHeading from "../SectionHeading";
import Spacing from "../Spacing";
import { getAllDocumentSales } from "../../apis/document-sales/api";
import { Spin, Tabs } from "antd";
import { getAllCategories } from "../../apis/category/api";
import { getAllCategoriesDetailByCategoryId } from "../../apis/category/detail";

export default function PortfolioPage() {
	pageTitle("Portfolio");

	const [loading, setLoading] = useState(false);
	const [active, setActive] = useState("all");
	const [itemShow, setItemShow] = useState(7);
	const [dataSource, setDataSource] = useState([]);
	const [categories, setCategories] = useState([]);
	const [detailCategories, setDetailCategories] = useState([]);
	const [activeDetail, setActiveDetail] = useState("all");

	const categoryMenu = [
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

	const mapDataCategories = (data) => {
		if (!data || data?.length <= 0) return [];
		return data?.map((item) => ({
			label: item?.category,
			key: item?.id,
			children:
				item?.children?.length > 0 ? (
					<Tabs
						items={item?.children?.map((child) => ({
							label: child?.detail,
							key: child?.id,
							children: (
								<>
									<Div className="row">
										{child?.documents
											?.slice(0, itemShow)
											.map((item, index) => {
												return (
													<Div
														className={`${
															index === 3 ||
															index === 6
																? "col-lg-8"
																: "col-lg-4"
														} ${
															active === "all"
																? ""
																: !(
																		active ===
																		item.category
																  )
																? "d-none"
																: ""
														}`}
														key={index}
													>
														<Portfolio
															title={item.title}
															subtitle={
																item.subtitle
															}
															href={item.link}
															src={item.image}
															variant="cs-style1 cs-type1"
														/>
														<Spacing
															lg="25"
															md="25"
														/>
													</Div>
												);
											})}
									</Div>

									<Div className="text-center">
										{child?.documents?.length <=
										itemShow ? (
											""
										) : (
											<>
												<Spacing lg="65" md="40" />
												<span
													className="cs-text_btn"
													onClick={() =>
														setItemShow(
															itemShow + 3
														)
													}
												>
													<span>Load More</span>
													<Icon icon="bi:arrow-right" />
												</span>
											</>
										)}
									</Div>
								</>
							),
						}))}
					/>
				) : (
					<></>
				),
		}));
	};

	const mapDetailCategories = (data) => {
		if (!data || data?.length <= 0) return [];
		return data?.map((item) => ({
			label: item?.detail,
			key: item?.id,
		}));
	};

	const mapData = (data) => {
		if (!data || data?.length <= 0) return [];
		return data?.map((item) => ({
			...item,
			subtitle: "See Details",
		}));
	};

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const getDataDocument = () => {
		getAllDocumentSales().then((response) => {
			setDataSource(mapData(response?.data));
			setLoading(false);
		});
	};

	useEffect(() => {
		setLoading(true);

		getDataDocument();

		getAllCategories().then((response) => {
			setCategories(mapDataCategories(response?.categories));

			const data = response?.data;
			const childData = [];
			data?.map((item) => childData.push(...item?.children));

			console.log("jtadd", childData);

			setDetailCategories(mapDetailCategories(childData));
		});
	}, []);

	const handleGetDetail = (key) => {
		setActive(key);
		if (key !== "all") {
			getAllCategoriesDetailByCategoryId({ category_id: key })
				.then((response) => {
					setDetailCategories(mapDetailCategories(response?.data));
				})
				.catch(() => {});
		}
	};

	return (
		<>
			<PageHeading
				title="Tài liệu bán hàng"
				bgSrc="images/portfolio_hero_bg_2.jpg"
				pageLinkText="Tài liệu bán hàng"
			/>
			<Spacing lg="145" md="80" />
			<Div className="container">
				<Div className="cs-portfolio_1_heading">
					<SectionHeading
						title="Some recent work"
						subtitle="Our Portfolio"
					/>
					{/* <Div className="cs-filter_menu cs-style1">
						<ul className="cs-mp0 cs-center">
							<li className={active === "all" ? "active" : ""}>
								<span onClick={() => setActive("all")}>
									All
								</span>
							</li>
							{categories.map((item, index) => (
								<li
									className={
										active === item.id ? "active" : ""
									}
									key={item?.id}
								>
									<span onClick={() => setActive(item.id)}>
										{item.name}
									</span>
								</li>
							))}
						</ul>
					</Div> */}
				</Div>
				<Div className="cs-filter_menu cs-style1">
					<ul className="cs-mp0 cs-center">
						<li className={active === "all" ? "active" : ""}>
							<span onClick={() => setActive("all")}>All</span>
						</li>
						{categories.map((item) => (
							<li
								className={active === item?.key ? "active" : ""}
								key={item?.key}
							>
								<span
									onClick={() => handleGetDetail(item?.key)}
								>
									{item.label}
								</span>
							</li>
						))}
					</ul>
				</Div>
				<Div className="cs-filter_menu cs-style1">
					<ul className="cs-mp0 cs-center">
						<li className={active === "all" ? "active" : ""}>
							<span onClick={() => setActive("all")}>All</span>
						</li>
						{detailCategories.map((item) => (
							<li
								className={active === item?.key ? "active" : ""}
								key={item?.key}
							>
								<span
									onClick={() => handleGetDetail(item?.key)}
								>
									{item.label}
								</span>
							</li>
						))}
					</ul>
				</Div>
				{/* <Tabs items={categories} /> */}
				<Spacing lg="90" md="45" />
				<Spin spinning={loading} size="large">
					<Div className="row">
						{dataSource.slice(0, itemShow).map((item, index) => {
							return (
								<Div
									className={`${
										index === 3 || index === 6
											? "col-lg-8"
											: "col-lg-4"
									} ${
										active === "all"
											? ""
											: !(active === item.category)
											? "d-none"
											: ""
									}`}
									key={index}
								>
									<Portfolio
										title={item.title}
										subtitle={item.subtitle}
										href={item.link}
										src={item.image}
										variant="cs-style1 cs-type1"
									/>
									<Spacing lg="25" md="25" />
								</Div>
							);
						})}
					</Div>

					<Div className="text-center">
						{dataSource.length <= itemShow ? (
							""
						) : (
							<>
								<Spacing lg="65" md="40" />
								<span
									className="cs-text_btn"
									onClick={() => setItemShow(itemShow + 3)}
								>
									<span>Load More</span>
									<Icon icon="bi:arrow-right" />
								</span>
							</>
						)}
					</Div>
				</Spin>
			</Div>
			<Spacing lg="145" md="80" />
			<Cta
				title="info@globallving-group.com"
				bgSrc="/images/cta_bg_2.jpeg"
				variant="rounded-0"
			/>
		</>
	);
}
