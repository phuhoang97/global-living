import React from "react";
import { useNavigate } from "react-router-dom";
import Div from "../Div";
import ContactInfoWidget from "../Widget/ContactInfoWidget";
import MenuWidget from "../Widget/MenuWidget";
import Newsletter from "../Widget/Newsletter";
import SocialWidget from "../Widget/SocialWidget";
import TextWidget from "../Widget/TextWidget";
import "./footer.scss";

export default function Footer({ copyrightText, logoSrc, logoAlt, text }) {
	const copyrightLinks = [
		{
			title: "Terms of Use",
			href: "/",
		},
		{
			title: "Privacy Policy",
			href: "/",
		},
	];

	const serviceMenu = [
		{
			title: "Trụ sở tại Hà Nội:",
			address:
				"TOONG TRÀNG THI - Số 8 Tràng Thi Hàng Trống - Quận Hoàn Kiếm - HÀ NỘI",
			href: "/contact",
		},
		{
			title: "Văn phòng tại TP.HCM:",
			address:
				"COWORK GOLD COAST - Tầng 9, Toà nhà Gold Coast - Số 1 Trần Hưng Đạo, P. Lộc Thọ, TP NHA TRANG",
			href: "/contact",
		},
		{
			title: "Văn phòng tại Nha Trang:",
			address:
				"SUNWAH INNOVATIONS - Tầng 6 - Tháp Golden - Toà nhà Sunwah Pearl 90 Nguyễn Hữu Cảnh - Phường 2, Quận Bình Thạnh TP HỒ CHÍ MINH",
			href: "/contact",
		},
	];

	return (
		<footer className="cs-fooer">
			<Div className="cs-fooer_main">
				<Div className="container">
					<Div className="row">
						<Div className="col-lg-3 col-sm-6">
							<Div className="cs-footer_item">
								<TextWidget
									logoSrc="/images/footer_logo.svg"
									logoAlt="Logo"
									text="CÔNG TY CỔ PHẦN GLOBAL LIVING"
								/>
								<SocialWidget />
							</Div>
						</Div>
						<Div className="col-lg-3 col-sm-6">
							<Div className="cs-footer_item">
								<MenuWidget
									menuItems={serviceMenu}
									menuHeading="Địa chỉ"
								/>
							</Div>
						</Div>
						<Div className="col-lg-3 col-sm-6">
							<Div className="cs-footer_item">
								<ContactInfoWidget title="Liên hệ" />
							</Div>
						</Div>
						<Div className="col-lg-3 col-sm-6">
							<Div className="cs-footer_item">
								<Newsletter
									title="Đăng ký nhận thông tin"
									subtitle="Nhận thông tin đầu tư mới nhất từ Global Living Group"
									placeholder="Email hoặc Số điện thoại"
								/>
							</Div>
						</Div>
					</Div>
				</Div>
			</Div>
			<Div className="container">
				<Div className="cs-bottom_footer">
					<Div className="cs-bottom_footer_left">
						<Div className="cs-copyright">
							Copyright © 2023 Global Living.
						</Div>
					</Div>
					<Div className="cs-bottom_footer_right">
						<MenuWidget
							menuItems={copyrightLinks}
							variant=" cs-style2"
						/>
					</Div>
				</Div>
			</Div>
		</footer>
	);
}
