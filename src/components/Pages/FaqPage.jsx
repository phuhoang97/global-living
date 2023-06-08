import { Icon } from "@iconify/react";
import React, { useEffect, useState } from "react";
import { pageTitle } from "../../helper";
import Accordion from "../Accordion";
import Button from "../Button";
import Cta from "../Cta";
import Div from "../Div";
import PageHeading from "../PageHeading";
import Spacing from "../Spacing";

export default function FaqPage() {
	const [selected, setSelected] = useState("card");

	const listItems = [
		{
			name: "Thẻ cư trú & Định cư",
			key: "card",
		},
		{
			name: "Quy trình & Thủ tục",
			key: "progress",
		},
		{
			name: "Quy định thẻ cư trú",
			key: "rule",
		},
		{
			name: "Giáo dục",
			key: "education",
		},
		{
			name: "Cơ hội việc làm",
			key: "chance",
		},
		{
			name: "Y tế",
			key: "pharma",
		},
	];

	pageTitle("Frequently Asked Questions");

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const handleGetKey = (key) => {
		setSelected(key);
	};

	return (
		<>
			<PageHeading
				title="Q&A"
				bgSrc="/images/about_hero_bg.jpeg"
				pageLinkText="Q&A"
			/>
			<Spacing lg="150" md="80" />
			<Div className="container">
				<Div className="row">
					<Div className="col-lg-4">
						<Div className="cs-faq_nav cs-radius_15">
							<h2 className="cs-faq_nav_title cs-m0">
								Thư viện câu hỏi
							</h2>
							<Div className="cs-height_30 cs-height_lg_30" />
							<ul className="cs-list cs-style1 cs-mp0">
								{listItems?.map((item) => {
									return (
										<li
											onClick={() =>
												handleGetKey(item?.key)
											}
											key={item?.key}
										>
											<Button
												variant="cs-type2"
												btnLink="/faq"
												btnText={item?.name}
												icon={
													<Icon icon="material-symbols:content-copy-outline-rounded" />
												}
											/>
										</li>
									);
								})}
							</ul>
						</Div>
					</Div>
					<Div className="col-lg-7 offset-lg-1">
						<Spacing lg="0" md="40" />
						<Accordion keySelect={selected} />
					</Div>
				</Div>
			</Div>
			<Spacing lg="150" md="80" />
			{/* Start CTA Section */}
			<Div className="container">
				<Cta
					title="Trở thành Đại lý/Cộng tác viên <br />phân phối <i>ĐỘC QUYỀN</i>"
					btnText="Đăng ký ngay tham gia làm Cộng tác viên/ Đại lý"
					btnLink="/register"
					bgSrc="/images/cta_bg.jpeg"
				/>
			</Div>
			{/* End CTA Section */}
		</>
	);
}
