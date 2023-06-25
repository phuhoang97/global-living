import { Icon } from "@iconify/react";
import React, { useEffect } from "react";
import { useState } from "react";
import { pageTitle, toLowerCaseNonAccentVietnamese } from "../../helper";
import Cta from "../Cta";
import PageHeading from "../PageHeading";
import Portfolio from "../Portfolio";
import Div from "../Div";
import SectionHeading from "../SectionHeading";
import Spacing from "../Spacing";
import { getAllDocumentSales } from "../../apis/document-sales/api";
import { Input, Radio, Spin, Tabs, theme } from "antd";
import { getAllCategories } from "../../apis/category/api";
import { getAllCategoriesDetailByCategoryId } from "../../apis/category/detail";
import { useNavigate, useSearchParams } from "react-router-dom";
import { SearchOutlined } from "@ant-design/icons";

export default function PortfolioPage() {
	pageTitle("Portfolio");

	const { useToken } = theme;
	const { token } = useToken();
	const navigate = useNavigate();
	const [loading, setLoading] = useState(false);
	const [active, setActive] = useState("all");
	const [itemShow, setItemShow] = useState(7);
	const [dataSource, setDataSource] = useState([]);
	const [categories, setCategories] = useState([]);
	const [detailCategories, setDetailCategories] = useState([]);
	const [activeDetail, setActiveDetail] = useState("all");
	const [searchParams] = useSearchParams();
	const [value, setValue] = useState(searchParams.get("search") || "");
	const search = searchParams.get("search") || " ";

	useEffect(() => {
		if (active === "all") {
			searchParams.set("category", "all");
		} else {
			searchParams.set(
				"category",
				toLowerCaseNonAccentVietnamese(
					categories?.filter((item) => item?.key === active)[0]?.label
				)
			);
		}
		navigate(`?${searchParams.toString()}`);
	}, [active]);

	useEffect(() => {
		const delayDebounceFn = setTimeout(() => {
			if (value === "") {
				searchParams.delete("search");
			} else {
				searchParams.set("search", value);
			}
			navigate(`?${searchParams.toString()}`);
		}, 500);
		return () => clearTimeout(delayDebounceFn);
	}, [value, searchParams.get("search")]);

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
		return data
			?.sort((a, b) => a?.sortNumber - b?.sortNumber)
			?.map((item) => ({
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
																title={
																	item.title
																}
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
			value: item?.id,
			style: {
				border: `1px solid ${token.colorPrimary}`,
				padding: "3px 14px",
			},
		}));
	};

	const mapData = (data) => {
		if (!data || data?.length <= 0) return [];
		return data?.map((item) => ({
			...item,
			subtitle: "Xem chi tiết",
		}));
	};

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const getDataDocument = () => {
		getAllDocumentSales().then((response) => {
			setDataSource(
				mapData(
					response?.data?.filter((item) =>
						item?.title?.toLowerCase()?.includes(search)
					)
				)
			);
			setLoading(false);
		});

		getAllCategories().then((response) => {
			setCategories(mapDataCategories(response?.categories));

			// const data = response?.categories;
			// const childData = [];
			// data?.map((item) => childData.push(...item?.children));

			// setDetailCategories(mapDetailCategories(childData));
		});
	};

	useEffect(() => {
		setLoading(true);

		getDataDocument();
	}, [search]);

	useEffect(() => {
		setLoading(true);
		if (active !== "all") {
			getAllCategoriesDetailByCategoryId({ category_id: active })
				.then((response) => {
					setDetailCategories(
						mapDetailCategories(
							response?.data?.sort(
								(a, b) => a?.sortNumber - b?.sortNumber
							)
						)
					);
					setLoading(false);
				})
				.catch(() => {
					setLoading(false);
				});
		}
		// else {
		// 	getAllCategories()
		// 		.then((response) => {
		// 			const data = response?.categories;
		// 			const childData = [];
		// 			data?.map((item) => childData.push(...item?.children));
		// 			setLoading(false);

		// 			setDetailCategories(mapDetailCategories(childData));
		// 		})
		// 		.catch(() => {
		// 			setLoading(false);
		// 		});
		// }
	}, [active]);

	useEffect(() => {
		setLoading(true);
		getAllCategories()
			.then((response) => {
				const data = response?.categories;
				const childData = [];
				const docsData = [];
				data?.map((item) => childData.push(...item?.children));

				if (active !== "all") {
					if (activeDetail === "all") {
						const filterCat = data?.filter(
							(item) => item?.id === active
						);
						filterCat[0]?.children?.map((child) =>
							docsData?.push(...child?.documents)
						);
						setDataSource(mapData(docsData));
					} else {
						childData?.filter((child) => {
							if (child?.id === activeDetail) {
								docsData?.push(...child?.documents);
							}
						});
						setDataSource(mapData(docsData));
					}
				} else {
					childData?.map((child) =>
						docsData?.push(...child?.documents)
					);

					setDataSource(mapData(docsData));
				}

				setLoading(false);
			})
			.catch(() => {
				setLoading(false);
			});
	}, [active, activeDetail]);

	const handleGetDetail = (key) => {
		setActive(key);
		setActiveDetail("all");
		setActiveDetail("all");
	};

	const handleGetDocuments = (key) => {
		setActiveDetail(key);
	};

	const onChangeRadio = ({ target: { value } }) => {
		setActiveDetail(value);
	};

	return (
		<>
			<PageHeading
				title="Tài liệu bán hàng"
				bgSrc="images/portfolio_hero_bg_2.jpg"
				pageLinkText="Tài liệu bán hàng"
			/>
			{/* <Spacing lg="145" md="80" /> */}
			<Spacing lg="30" md="30" />
			<Div className="container">
				<Div className="cs-portfolio_1_heading">
					{/* <SectionHeading
						title="Some recent work"
						subtitle="Our Portfolio"
					/> */}
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
				<div className="text-center">
					<Input
						value={value}
						placeholder="Tìm kiếm"
						allowClear={true}
						prefix={<SearchOutlined className={"text-[17px]"} />}
						onChange={({ target }) => setValue(target.value)}
						className="px-2 py-2.5 w-[50%]"
					/>
				</div>
				<Spacing lg="30" md="30" />
				<Div className="cs-filter_menu cs-style1">
					<ul className="cs-mp0 cs-center">
						<li className={active === "all" ? "active" : ""}>
							<span onClick={() => setActive("all")}>Tất cả</span>
						</li>
						{categories.map((item) => (
							<li
								className={
									active === item?.key ||
									searchParams.get("category") === item?.label
										? "active"
										: ""
								}
								key={item?.key}
								onClick={() => {
									handleGetDetail(item?.key);
								}}
							>
								<span>{item.label}</span>
							</li>
						))}
					</ul>
				</Div>
				{active !== "all" ? (
					<Spin spinning={loading}>
						{/* <Div className="cs-filter_menu cs-style1">
							<ul className="cs-mp0 cs-center">
								<li
									className={
										activeDetail === "all" ? "active" : ""
									}
								>
									<span
										onClick={() => setActiveDetail("all")}
									>
										All
									</span>
								</li>
								{detailCategories.map((item) => (
									<li
										className={
											activeDetail === item?.key
												? "active"
												: ""
										}
										key={item?.key}
									>
										<span
											onClick={() =>
												handleGetDocuments(item?.key)
											}
										>
											{item.label}
										</span>
									</li>
								))}
							</ul>
						</Div> */}
						<Radio.Group
							options={[
								{
									label: "Tất cả",
									value: "all",
									style: {
										border: `1px solid ${token.colorPrimary}`,
										padding: "3px 14px",
									},
								},
								...detailCategories,
							]}
							onChange={onChangeRadio}
							value={activeDetail}
							optionType="button"
							buttonStyle="solid"
							className="mt-4 w-full flex items-center justify-center"
						/>
					</Spin>
				) : (
					<></>
				)}
				{/* <Tabs items={categories} /> */}
				<Spacing lg="90" md="45" />
				<Spin spinning={loading} size="large">
					<Div className="row">
						{dataSource?.map((item, index) => {
							return (
								<Div
									// className={`${
									// 	index === 3 || index === 6
									// 		? "col-lg-8"
									// 		: "col-lg-4"
									// } ${
									// 	active === "all"
									// 		? ""
									// 		: !(active === item.category)
									// 		? "d-none"
									// 		: ""
									// }`}
									className="col-lg-4"
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

					{/* <Div className="text-center">
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
					</Div> */}
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
