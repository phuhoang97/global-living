import { Icon } from "@iconify/react";
import React, { useEffect } from "react";
import { pageTitle } from "../../helper";
import Div from "../Div";
// import PageHeading from '../PageHeading';
import SectionHeading from "../SectionHeading";
import Spacing from "../Spacing";
import ContactInfoWidget from "../Widget/ContactInfoWidget";
import { useForm } from "react-hook-form";
import { postContact } from "../../apis/contact/api";
import { notification } from "antd";

export default function ContactPage() {
	const { register, handleSubmit, reset } = useForm();
	const [api, contextHolder] = notification.useNotification();

	const openNotificationWithIcon = (type) => {
		if (type === "success") {
			api["success"]({
				message: "Đăng ký nhận tư vấn thành công!",
			});
		} else {
			api["error"]({
				message: "Đăng ký nhận tư vấn thất bại, có lỗi xảy ra!",
			});
		}
	};

	pageTitle("Contact Us");

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const onFinish = (values) => {
		postContact(values)
			.then(() => {
				openNotificationWithIcon("success");
				reset();
			})
			.catch(() => {
				openNotificationWithIcon("erro");
			});
	};

	return (
		<>
			{/* <PageHeading
        title="Contact Us"
        bgSrc="/images/contact_hero_bg.jpeg"
        pageLinkText="Contact"
      /> */}
			{contextHolder}
			<Spacing lg="150" md="80" />
			<Div className="container">
				<Div
					className="row"
					style={{ height: "350px", marginTop: "100px" }}
				>
					<Div className="col-lg-6">
						<SectionHeading
							title="Contact Us"
							subtitle="Getting Touch"
						/>
						<Spacing lg="55" md="30" />
						<ContactInfoWidget withIcon />

						<Spacing lg="0" md="50" />
					</Div>
					<Div className="col-lg-6">
						<form
							action=""
							className="row"
							onSubmit={handleSubmit(onFinish)}
						>
							<Div className="col-sm-6">
								<label className="cs-primary_color">
									Họ và tên*
								</label>
								<input
									type="text"
									className="cs-form_field"
									placeholder="Nhập họ và tên"
									{...register("full_name")}
									required
								/>
								<Spacing lg="20" md="20" />
							</Div>
							<Div className="col-sm-6">
								<label className="cs-primary_color">
									Email*
								</label>
								<input
									type="text"
									className="cs-form_field"
									placeholder="Nhập email"
									{...register("email")}
									required
								/>
								<Spacing lg="20" md="20" />
							</Div>
							<Div className="col-sm-6">
								<label className="cs-primary_color">
									Số điện thoại*
								</label>
								<input
									type="text"
									className="cs-form_field"
									placeholder="Nhập số điện thoại"
									{...register("phone")}
									required
								/>
								<Spacing lg="20" md="20" />
							</Div>
							<Div className="col-sm-6">
								<label className="cs-primary_color">
									Sản phẩm quan tâm*
								</label>
								<select
									// type="text"
									className="cs-form_field"
									{...register("product")}
									required
								>
									<option value="" hidden disabled selected>
										Chọn sản phẩm quan tâm
									</option>
									<option value="1bed">
										Căn hộ 1 phòng ngủ
									</option>
									<option value="2bed">
										Căn hộ 2 phòng ngủ
									</option>
									<option value="3bed">
										Căn hộ 3 phòng ngủ
									</option>
									<option value="4bed">
										Căn hộ 4 phòng ngủ
									</option>
									<option value="studio">
										Căn hộ studio
									</option>
								</select>
								<Spacing lg="20" md="20" />
							</Div>
							{/* <Div className="col-sm-12">
								<label className="cs-primary_color">
									Message*
								</label>
								<textarea
									cols="30"
									rows="7"
									className="cs-form_field"
									{...register("message")}
									required
								></textarea>
								<Spacing lg="25" md="25" />
							</Div> */}
							<Div className="col-sm-12">
								<button
									className="cs-btn cs-style1"
									type="submit"
								>
									<span>Đăng ký nhận tư vấn</span>
									<Icon icon="bi:arrow-right" />
								</button>
							</Div>
						</form>
					</Div>
				</Div>
			</Div>
			{/* <Spacing lg="150" md="80" />
      <Div className="cs-google_map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96652.27317354927!2d-74.33557928194516!3d40.79756494697628!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3a82f1352d0dd%3A0x81d4f72c4435aab5!2sTroy+Meadows+Wetlands!5e0!3m2!1sen!2sbd!4v1563075599994!5m2!1sen!2sbd"
          allowFullScreen
          title="Google Map"
        />
      </Div> */}
			<Spacing lg="50" md="40" />
		</>
	);
}
