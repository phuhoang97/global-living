import { Icon } from "@iconify/react";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { pageTitle } from "../../helper";
import Cta from "../Cta";
import PageHeading from "../PageHeading";
import Div from "../Div";
import Sidebar from "../Sidebar.jsx";
import Spacing from "../Spacing";
import { getDetailBlog } from "../../apis/blog/api";
import { message } from "antd";
import { AiOutlineLink } from "react-icons/ai";
import copy from "clipboard-copy";
import dayjs from "dayjs";
import parse from "html-react-parser";

const BlogDetailPage = () => {
	const params = useParams();
	const [data, setData] = useState({});

	pageTitle("Blog Details");

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	useEffect(() => {
		if (params.blogDetailsId) {
			getDetailBlog(params.blogDetailsId).then((response) => {
				setData(response?.data[0]);
			});
		}
	}, [params.blogDetailsId]);

	const handleCopy = () => {
		copy(`https://global-living-master.vercel.app/blog/${data?.id}`);
		message.success("Đã sao chép!");
	};

	return (
		<>
			<PageHeading
				title={
					<>
						{data?.title}{" "}
						<AiOutlineLink
							className="mb-2 mx-3 text-[30px] cursor-pointer"
							onClick={handleCopy}
						/>
					</>
				}
				bgSrc="/images/blog_details_hero_bg.jpeg"
				pageLinkText={data?.title}
			/>
			<Spacing lg="150" md="80" />
			<Div className="container">
				<Div className="row items-center justify-center">
					<Div className="col-lg-8">
						<Div className="cs-post_info">
							<Div className="cs-post_meta cs-style1 cs-ternary_color cs-semi_bold cs-primary_font">
								<span className="cs-posted_by">
									{dayjs(data?.createDate).format(
										"DD-MM-YYYY"
									)}
								</span>
							</Div>
							<Spacing lg="40" md="40" />
							<div
								className="content-blog"
								dangerouslySetInnerHTML={{
									__html: data?.content,
								}}
							>
								{/* {parse(data?.content)} */}
							</div>
						</Div>
					</Div>
				</Div>
			</Div>
		</>
	);
};

export default BlogDetailPage;
