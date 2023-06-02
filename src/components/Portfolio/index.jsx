import { CopyOutlined, ShareAltOutlined } from "@ant-design/icons";
import React from "react";
import { Link } from "react-router-dom";
import Div from "../Div";
import "./portfolio.scss";
import { message } from "antd";
import copy from "clipboard-copy";

export default function Portfolio({ href, src, title, subtitle, variant }) {
	const handleCopy = () => {
		copy(href);
		message.success("Đã sao chép!");
	};

	return (
		<Link
			to={href}
			target="_blank"
			className={`cs-portfolio cs-bg ${
				variant ? variant : "cs-style1"
			} cursor-pointer`}
		>
			<>
				<Div className="cs-portfolio_hover" />
				<Div
					className="cs-portfolio_bg cs-bg"
					style={{ backgroundImage: `url("${src}")` }}
				/>
				<div
					className="flex items-center justify-center absolute top-2 right-2 cs-portfolio_icon transition-all"
					style={{ zIndex: 3 }}
				>
					<ShareAltOutlined
						className="text-[25px]"
						onClick={(e) => e.preventDefault()}
					/>
					<span className="mx-3 text-[25px]">/</span>
					<CopyOutlined
						className="text-[25px]"
						onClick={(e) => {
							e.preventDefault();
							handleCopy();
						}}
					/>
				</div>
				<Div className="cs-portfolio_info">
					<Div className="cs-portfolio_info_bg cs-accent_bg" />
					<h2 className="cs-portfolio_title">{title}</h2>
					<Div className="cs-portfolio_subtitle">{subtitle}</Div>
				</Div>
			</>
		</Link>
	);
}
