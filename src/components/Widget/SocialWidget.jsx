import React from "react";
// import { Link } from 'react-router-dom'
import { Icon } from "@iconify/react";
import Div from "../Div";
import { SiZalo } from "react-icons/si";

export default function SocialWidget() {
	return (
		<Div className="cs-social_btns cs-style1">
			<a
				href="https://www.youtube.com/@GlobalLivingGroup"
				target={"_blank"}
				className="cs-center"
			>
				{/* <Link to='/' className="cs-center"> */}
				<Icon icon="fa6-brands:youtube" />
				{/* </Link> */}
			</a>
			<a
				href="https://www.facebook.com/globalliving.group"
				target={"_blank"}
				className="cs-center"
			>
				{/* <Link to='/' className="cs-center"> */}
				<Icon icon="fa6-brands:facebook" />
				{/* </Link> */}
			</a>
			<a
				href="https://zalo.me/2666483498675431364"
				target={"_blank"}
				className="cs-center"
			>
				{/* <Link to='/' className="cs-center"> */}
				{/* <Icon icon="fa6-brands:zalo" /> */}
				<SiZalo />
				{/* </Link> */}
			</a>
		</Div>
	);
}
