import React, { useEffect } from "react";
import { useState } from "react";
import { getAllFaqQuestions } from "../../apis/faq/api";
import Div from "../Div";

export default function Accordion({ selectedKey }) {
	const [selected, setSelected] = useState(0);
	const [dataSource, setDataSource] = useState([]);

	const handelToggle = (index) => {
		if (selected === index) {
			return setSelected(null);
		}
		setSelected(index);
	};

	useEffect(() => {
		getAllFaqQuestions().then((response) => {
			setDataSource(response?.data);
		});
	}, []);

	return (
		<Div className="cs-accordians cs-style1">
			{dataSource
				?.filter((item) => item?.category_id === selectedKey)
				.map((item, index) => (
					<Div
						className={`cs-accordian ${
							selected === index ? "active" : ""
						}`}
						key={index}
					>
						<Div
							className="cs-accordian_head"
							onClick={() => handelToggle(index)}
						>
							<h2 className="cs-accordian_title">
								{item.question}
							</h2>
							<span className="cs-accordian_toggle cs-accent_color">
								<svg
									width={15}
									height={8}
									viewBox="0 0 15 8"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M0 0L7.5 7.5L15 0H0Z"
										fill="currentColor"
									/>
								</svg>
							</span>
						</Div>
						<Div className="cs-accordian_body">
							<Div
								dangerouslySetInnerHTML={{
									__html: item.answer,
								}}
								className="cs-accordian_body_in"
							></Div>
						</Div>
					</Div>
				))}
		</Div>
	);
}
