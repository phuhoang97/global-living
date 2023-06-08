import { Icon } from "@iconify/react";
import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { pageTitle } from "../../helper";
import Cta from "../Cta";
import PageHeading from "../PageHeading";
import Div from "../Div";
import Sidebar from "../Sidebar.jsx";
import Spacing from "../Spacing";
import ContactPage from "./ContactPage";
import { AiOutlineLink } from "react-icons/ai";
import copy from "clipboard-copy";
import { message } from "antd";

const BlogDetailPage1 = () => {
	const params = useParams();

	pageTitle("Blog Details");

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const handleCopy = () => {
		copy("https://global-living-master.vercel.app/blog/1");
		message.success("Đã sao chép!");
	};

	return (
		<>
			<PageHeading
				title={
					<>
						Tốc độ tăng giá BĐS{" "}
						<AiOutlineLink
							className="mb-2 mx-3 text-[30px] cursor-pointer"
							onClick={handleCopy}
						/>
					</>
				}
				bgSrc="/images/blog_details_hero_bg.jpeg"
				pageLinkText={"Tốc độ tăng giá BĐS"}
			/>

			<Spacing lg="150" md="80" />
			<Div className="container">
				<Div className="row items-center justify-center">
					<Div className="col-lg-8">
						<Div className="cs-post cs-style2">
							<Div className="cs-post_info">
								<Div className="cs-post_meta cs-style1 cs-ternary_color cs-semi_bold cs-primary_font">
									<span className="cs-posted_by">
										08 June 2023
									</span>
									{/* <Link to="/blog" className="cs-post_avatar">
										Tech
									</Link> */}
								</Div>
								<h2 className="cs-post_title">
									Giá trị bất động sản Hungary tăng mạnh,
									thuộc Top 2 EU
								</h2>
								<i>
									Theo thống kê từ Eurostat, thị trường bất
									động sản tại Hungary đã có sự phát triển
									vượt bậc trong giai đoạn 2010 đến 2022, với
									tốc độ tăng giá thuộc Top 2 Liên minh châu
									u. Đồng thời, tốc độ tăng giá thuê nhà ở
									Hungary cũng nằm trong Top 4 của khối thịnh
									vượng EU.
								</i>
								<div className="my-2 text-center">
									<img
										src="/images/blog/blog-1-1.jpg"
										alt="blog"
									/>
								</div>
								<p>
									Trong năm 2022, mức tăng giá nhà tại khu vực
									đồng Euro đã chạm mốc 6,8% và chỉ số này là
									7,4% ở EU. Mức tăng lớn nhất được ghi nhận ở
									Estonia (+24,2%), Hungary (+21,0%) và Litva
									(+19,3%). Đầu năm 2023, số liệu ghi nhận từ
									các giao dịch đã chốt chỉ ra rằng: chi phí
									trung bình để mua một bất động sản ở trung
									tâm Budapest là hơn 1 triệu HUF/m2 và giá
									thuê trung bình đạt mức 200.000 HUF. Với nhu
									cầu thị trường bất động sản được dự đoán sẽ
									tiếp tục tăng mạnh, mức giá cho thuê cũng sẽ
									theo đó mà tăng cao hơn nữa.
								</p>
								<p>
									Theo{" "}
									<a
										href=""
										className="text-blue-500 underline"
									>
										Bloomberg
									</a>{" "}
									giá nhà ở Hungary đã tăng 151% kể từ năm
									2015, mức tăng cao nhất tại EU và cao hơn
									gấp ba lần so với chỉ số trung bình của toàn
									khu vực. Lãi suất thấp kỷ lục, mức trợ cấp
									nhà ở cao và sự tăng trưởng tiền lương thực
									tế chính là những yếu tố then chốt tạo nên
									sự bùng nổ trong tăng giá bất động sản.
								</p>
								<h3>
									Những con phố đắt giá nhất tại Budapest,
									Hungary
								</h3>
								<p>
									Một số khu vực tại Thủ đô của Hungary đã
									đứng đầu bảng giá nhà ở Budapest trong nhiều
									năm, thậm chí là nhiều thập kỷ. Điển hình
									nhất là quận V, VI và VII ở trung tâm thành
									phố cũng như quận I, II ở phía Buda. Mỗi
									quận đều có những con phố có giá trị nhà đất
									cao hơn và phổ biến hơn với người mua nhà
									bởi vị trí địa lý thuận lợi, hệ thống giao
									thông công cộng thuận tiện, bao quanh bởi
									nhiều địa điểm du lịch danh tiếng, tiện nghi
									đầy đủ - đảm bảo chất lượng cuộc sống, vv
								</p>
								<p className="m-0">
									10 con phố có giá đắt đỏ nhất Budapest gồm:
								</p>
								<p>
									1. Phố Orom (quận I) <br /> 2. Phố Kossuth
									Lajos ( quận V)
									<br /> 3. Verecke lépcső (quận III)
									<br /> 4. Đường Virányos (quận XII)
									<br /> 5. Phố Akácfa (quận VII)
									<br /> 6. Đường Csalán (quận II)
									<br /> 7. Quảng trường Dísz (quận I)
									<br /> 8. Phố Wesselényi (quận VII)
									<br /> 9. Dorottya street (quận V) 10.
									Szondi (quận VI)
								</p>

								<div className="my-2 text-center">
									<img
										src="/images/blog/blog-1-2.jpg"
										alt="blog"
									/>
								</div>

								<h3>
									Những con phố đắt giá nhất tại Budapest,
									Hungary
								</h3>

								<p>
									Khi mua bất động sản ở bất cứ đâu, yếu tố
									tiên quyết mà nhà đầu tư cần xác định đó là
									mục đích. Và tùy theo từng mục đích nhất
									định, các chuyên gia từ Global Living có
									những gợi ý cho nhà đầu tư như sau:
								</p>

								<p className="mb-3">
									–{" "}
									<span className="font-bold">
										Mục đích để ở
									</span>
									: Lựa chọn tối ưu sẽ là những vị trí gần
									siêu thị, bệnh viện lớn cũng như những hệ
									thống giao thông công cộng trung tâm để đảm
									bảo tối ưu tiện nghi sinh hoạt.
								</p>
								<p className="m-0">
									–{" "}
									<span className="font-bold">
										Cho thuê sinh lời
									</span>
									: Căn hộ nằm trong các quận trung tâm, gần
									các địa điểm du lịch nổi tiếng như V, VI,
									VII, VIII hoặc những căn hộ mới với đầy đủ
									tiện ích sẽ là những lựa chọn phù hợp.
								</p>
								<p className="m-0">
									Hiện tại ở Hungary có hai hình thức cho thuê
									phổ biến: cho thuê dài hạn và cho thuê ngắn
									hạn dạng Airbnb.
								</p>
								<p className="mb-3">
									Với hình thức cho thuê dài hạn, Hungary
									không có yêu cầu phức tạp về giấy phép.
									Ngược lại, ở hình thức cho thuê ngắn hạn thì
									tùy từng quận, cũng như từng tòa nhà sẽ có
									cách thức cũng như quy định khác nhau. Ví
									dụ, tại Quận V – quận trung tâm nhất của
									Budapest quy định chỉ 20% căn hộ trong một
									tòa nhà được phép dùng cho mục đích cho thuê
									ngắn hạn. Còn tại Quận VII sẽ có nơi cho
									thuê ngắn hạn và có nơi không.
								</p>
								<p className="mb-3">
									–{" "}
									<span className="font-bold">
										Sở hữu bất động sản đẳng cấp
									</span>
									: Tại Hungary, những sản phẩm bất động sản
									với giá trị độc nhất sẽ nằm ở những vị trí
									đắc địa như: bên bờ sông Danube (khoảng 15
									tỷ VNĐ), những biệt thự trên đồi hoa hồng (
									2 – 10 triệu Euro), hoặc có view hướng ra
									một địa danh nổi tiếng. Khi đầu tư những sản
									phẩm như vậy, mục đích sẽ không còn là để
									cho thuê sinh lời ngắn hạn, mà là để sở hữu
									một sản phẩm giới hạn, không chỉ có tiềm
									năng tăng giá vượt trội trong tương lai mà
									còn góp phần khẳng định đẳng cấp thượng lưu
									và vị thế của một nhà đầu tư sành sỏi.
								</p>

								<div className="my-2 text-center">
									<img
										src="/images/blog/blog-1-3.jpg"
										alt="blog"
									/>
								</div>

								<p>
									Bước tiếp theo, Nhà đầu tư cần khoanh vùng
									mức đầu tư mong muốn.
								</p>
								<p>
									Tiêu biểu như ở Quận V, một căn chung cư đã
									cải tạo, bao gồm nội thất đầy đủ, sẽ có mức
									giá khoảng 300.000 Euro trở lên. Chung cư
									quận VI thường dao động ở mức 280.000
									Euro++. Chung cư quận VII có thể dao động từ
									180.000 Euro đến 260.000 Euro. Với các căn
									chung cư cũ hơn, hoặc chưa được sửa chữa,
									hoặc chưa bao gồm nội thất thì giá sẽ có thể
									rẻ hơn khá nhiều. Đây chỉ là mức giá trung
									bình, vì chi phí có thể thay đổi tùy theo vị
									trí, chất lượng hoàn thiện, mức độ tối ưu
									của các phòng, vv
								</p>

								<p>
									Với các dự án mới (thường không nằm trong
									trung tâm thành phố) mức giá chung cư sẽ dao
									động từ 170.000 Euro trở lên.
								</p>

								<p>
									Với nhà vườn thì vị trí càng xa trung tâm sẽ
									càng rẻ. Tùy từng khu vực mà mức giá có thể
									từ dưới 200.000 Euro, hoặc lên đến vài triệu
									Euro.
								</p>

								<p>
									Nhìn chung, tại Budapest, mức đầu tư từ 300
									– 400.000 Euro chắc chắn sẽ mang lại nhiều
									lựa chọn hấp dẫn. Tuy nhiên, khi đồng hành
									cùng Global Living, Nhà đầu tư vẫn sẽ có
									được những sản phẩm chất lượng tối ưu, loại
									hình đa dạng và nằm tại các quận trung tâm
									với mức giá chỉ dao động trong khoảng
									200.000 Euro.
								</p>

								<p>
									Với đà tăng trưởng mạnh mẽ như hiện tại, thị
									trường Bất động sản Hungary hứa hẹn sẽ có
									một tương lai khởi sắc và thịnh vượng hơn
									nữa. Đồng nghĩa, ngay lúc này chính là thời
									điểm vàng để những Nhà đầu tư thông thái
									“rót vốn” vào vùng đất đầy tiềm năng này,
									trước khi thị trường trở nên bão hòa.
								</p>

								<p className="font-bold">
									Hãy liên hệ với Global Living để không bỏ lỡ
									cơ hội sở hữu Bất động sản Budapest đắt giá,
									vừa nhận được tấm thẻ định cư quyền lực của
									Hungary.
								</p>
							</Div>
						</Div>
						{/* End Details Post Content */}

						{/* <ContactPage /> */}

						{/* Start Comment Section */}
						{/* <Spacing lg="30" md="30" />
						<h2 className="cs-font_50 cs-m0">Leave A Reply</h2>
						<Spacing lg="5" md="5" />
						<p className="cs-m0">
							Your email address will not be published. Required
							fields are marked *
						</p>
						<Spacing lg="40" md="30" />
						<form className="row">
							<Div className="col-lg-6">
								<label>Full Name*</label>
								<input type="text" className="cs-form_field" />
								<Div className="cs-height_20 cs-height_lg_20" />
								<Div
									data-lastpass-icon-root="true"
									style={{
										position: "relative !important",
										height: "0px !important",
										width: "0px !important",
										float: "left !important",
									}}
								/>
							</Div>
							<Div className="col-lg-6">
								<label>Email*</label>
								<input type="text" className="cs-form_field" />
								<Div className="cs-height_20 cs-height_lg_20" />
							</Div>
							<Div className="col-lg-12">
								<label>Website*</label>
								<input type="text" className="cs-form_field" />
								<Div className="cs-height_20 cs-height_lg_20" />
							</Div>
							<Div className="col-lg-12">
								<label>Write Your Comment*</label>
								<textarea
									cols={30}
									rows={7}
									className="cs-form_field"
								/>
								<Div className="cs-height_25 cs-height_lg_25" />
							</Div>
							<Div className="col-lg-12">
								<button className="cs-btn cs-style1">
									<span>Send Message</span>
									<Icon icon="bi:arrow-right" />
								</button>
							</Div>
						</form> */}
						{/* End Comment Section */}
					</Div>
					{/* <Div className="col-xl-3 col-lg-4 offset-xl-1"> */}
					{/* Start Sidebar */}
					{/* <Spacing lg="0" md="80" /> */}
					{/* <Sidebar /> */}
					{/* End Sidebar */}
					{/* </Div> */}
				</Div>
			</Div>
			<Spacing lg="150" md="80" />
			{/* Start Blog Details */}

			{/* Start CTA Section */}
			<Div className="container">
				<Cta
					title="Let’s disscuse make <br />something <i>cool</i> together"
					btnText="Apply For Meeting"
					btnLink="/contact"
					bgSrc="/images/cta_bg.jpeg"
				/>
			</Div>
			{/* End CTA Section */}
		</>
	);
};

export default BlogDetailPage1;
