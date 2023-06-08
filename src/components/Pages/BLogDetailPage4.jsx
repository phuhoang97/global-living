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

const BLogDetailPage4 = () => {
	const params = useParams();

	pageTitle("Blog Details");

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<>
			<PageHeading
				title="Quyền lợi visa Hungary"
				bgSrc="/images/blog_details_hero_bg.jpeg"
				pageLinkText={"Quyền lợi visa Hungary"}
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
									Đặc quyền thẻ cư trú Hungary
								</h2>
								<p>
									Hungary là một trong những quốc gia thành
									viên thuộc khối Schengen. Vì vậy, sở hữu thể
									cư trú Hungary đồng nghĩa Nhà đầu tư được
									đảm bảo quyền lợi như một công dân Châu u.
									Vậy những quyền lợi đó cụ thể là gì? Bài
									viết dưới đây sẽ trả lời cho câu hỏi này:
								</p>
								<h2 className="cs-post_title">
									Quy định về luật cư trú Hungary
								</h2>

								<div className="text-center my-4">
									<img
										src="/images/blog/blog4-1.jpg"
										alt="blog"
									/>
								</div>

								<p className="mb-3">
									Chương trình Đầu tư Định cư do chính phủ
									Hungary ban hành cho phép Nhà đầu tư sở hữu
									thẻ cư trú tại quốc gia này thông qua đầu tư
									bất động sản. Gia đình nhà đầu tư bao gồm
									vợ/chồng, con cái dưới 21 tuổi và cha/mẹ 2
									bên trên 60 tuổi đều được quyền nhận thẻ cư
									trú.
								</p>
								<p className="mb-3">
									Nhà đầu tư đủ điều kiện tham gia chương
									trình khi là công dân của các nước thứ 3 và
									đáp ứng được những điều sau:
								</p>
								<ul>
									<li className="mb-3">
										Có nơi ở và đáp ứng được các điều kiện
										về kinh tế để sinh sống tại Hungary.
									</li>
									<li className="mb-3">
										Có đóng bảo hiểm y tế hoặc có đủ khả
										năng tài chính để chi trả các dịch vụ y
										tế.
									</li>
									<li className="mb-3">
										Không vi phạm pháp luật và thuộc nhóm
										đối tượng mà chính phủ Hungary không cho
										phép định cư như:
										<ul>
											<li className="mb-3">
												Việc cư trú của họ gây nguy hiểm
												đến sự an toàn xã hội và nền an
												ninh quốc gia của Hungary.
											</li>
											<li className="mb-3">
												Đang là đối tượng bị trục xuất
												hoặc đang trong thời gian cảnh
												báo bị từ chối visa trên Hệ
												thống Thông tin Schengen.
											</li>
											<li className="mb-3">
												Sử dụng và cung cấp thông tin
												không chính xác, số liệu giả
												hoặc lừa gạt nhà chức trách với
												mục đích xin phép định cư.
											</li>
										</ul>
									</li>
								</ul>

								<h2 className="cs-post_title">
									Quyền lợi của thẻ cư trú Hungary
								</h2>

								<div className="text-center my-4">
									<img
										src="/images/blog/blog4-2.jpg"
										alt="blog"
									/>
								</div>

								<h2 className="cs-post_title">
									Tại sao nên định cư tại Hungary?
								</h2>
								<ul>
									<li>
										Tại Hungary, dù là công dân bản địa hay
										người nhập cư đều được sinh sống và làm
										việc dưới sự đối đãi công bằng, có quyền
										sống và làm việc như nhau.
									</li>
									<li>
										Hungary có không khí trong lành, là một
										môi trường sống rất lành mạnh và cũng vô
										cùng khắt khe trong vấn đề kiểm tra vệ
										sinh an toàn thực phẩm.
									</li>
									<li>
										Khi bạn sinh sống và định cư tại Hungary
										thì không cần lo lắng nhiều về lệ phí
										khám bệnh cũng như dịch vụ khám sức
										khỏe. Không chỉ có hệ thống phúc lợi xã
										hội đẳng cấp, Hungary còn có nền Y tế
										hiện đại được trang bị máy móc tân tiến,
										đội ngũ bác sĩ tay nghề cao, đảm bảo quy
										chuẩn khám chữa bệnh chuẩn Châu u.
									</li>
									<li>
										Đây thực sự là một vùng đất lý tưởng cho
										các nhà đầu tư muốn phát triển kinh
										doanh. Theo đó, tại quốc gia này các nhà
										đầu tư vừa được hưởng những điều kiện
										sống tốt vừa có thể phát triển kinh tế
										theo năng lực của mình.
									</li>
									<li>
										Chi phí sinh hoạt ở Hungary rất phải
										chăng, so với các nước Châu u khác thì
										Hungary có mức phí sinh hoạt rẻ hơn
										nhiều.
									</li>
								</ul>

								<h2 className="cs-post_title">
									Quyền lợi khi định cư tại Hungary
								</h2>
								<p className="mb-3 font-bold">
									Hiểu về chương trình đầu tư định cư Hungary
								</p>
								<p>
									Chương trình Đầu tư Định cư Hungary được
									chính phủ đề ra với hy vọng thu hút được các
									khoản đầu tư từ các doanh nhân quốc tế để
									phát triển nền kinh tế địa phương.
								</p>
								<p>
									Đồng thời, khoản đầu tư từ các doanh nhân sẽ
									tạo ra thêm công ăn việc làm cho người dân
									nơi đây. Tất nhiên lợi ích mà các nhà đầu tư
									quốc tế hay cụ thể hơn là nhà đầu tư Việt
									nhận được chính là tấm thẻ cư trú cho phép
									sinh sống và tận hưởng những đặc quyền đẳng
									cấp tại Hungary, đồng thời tự do đi lại
									trong 26 quốc gia ở Châu u thuộc khối
									Schengen mà không cần xin visa.
								</p>
								<p className="mb-3 font-bold">
									Sau khi tham gia chương trình
								</p>
								<p>
									Đây là những quyền lợi bạn sẽ nhận được sau
									khi tham gia:
								</p>
								<ul>
									<li>
										Được cấp thẻ cư trú Hungary 03 năm và
										gia hạn với điều kiện duy trì bất động
										sản.
									</li>
									<li>
										Được học tập, sinh sống và tự do đi lại
										trong 26 nước thuộc khối Schengen và 4
										nước Bulgaria, Romania, Croatia, Serbia
										mà không cần xin Visa.
									</li>
									<li>
										Bảo lãnh người thân như cha mẹ hai bên,
										vợ chồng, con cái và chấp nhận con nuôi.
									</li>
									<li>
										Con cái được đăng ký học tại các trường
										Tiểu học, THCS, THPT hay Đại học của
										Hungary.
									</li>
									<li>
										Sau khoảng thời gian cư trú 3 năm tại
										Hungary, nhà đầu tư cùng gia đình có thể
										xin đăng kí giấy PR (thường trú) hoặc
										nhập quốc tịch nếu đáp ứng điều kiện về
										ngôn ngữ, công việc, tài sản đầu tư.
									</li>
									<li>
										Được sở hữu bất động sản vĩnh viễn. Cơ
										hội đầu tư bất động sản tại một thị
										trường tiềm năng trong tương lai.
									</li>
									<li>
										Chi phí thuế suất thấp, chỉ cần nộp 4%
										giá trị tài sản để đóng thuế 1 lần lúc
										mua bất động sản.
									</li>
									<li>
										Có thể mua bán một hoặc nhiều bất động
										sản, được cho thuê kinh doanh bất động
										sản và nộp thuế thu nhập 11%.
									</li>
								</ul>

								<h2 className="cs-post_title">
									Điều kiện sở hữu visa định cư Hungary
								</h2>
								<div className="text-center my-4">
									<img
										src="/images/blog/blog4-3.jpg"
										alt="blog"
									/>
								</div>
								<p className="text-center">
									Hồ chiếu của nhà đầu tư phải còn hiệu lực
								</p>
								<p>
									Dưới đây là một số yêu cầu của chương trình
									định cư Hungary:
								</p>
								<ul>
									<li className="mb-3">
										Nhà đầu tư sở hữu hộ chiếu còn hiệu lực
										sử dụng, nếu gần hết hạn thì phải đi xin
										cấp lại.
									</li>
									<li className="mb-3">
										Sở hữu hoặc đầu tư tối thiểu 1 bất động
										sản tại Hungary có giá trị thấp nhất từ
										175,000 Euro.
									</li>
									<li className="mb-3">
										Lý lịch đời tư trong sạch.
									</li>
									<li className="mb-3">
										Chứng minh người đứng tên bất động sản
										sở hữu sổ tiết kiệm từ 500,000 Euro trở
										lên.
									</li>
									<li className="mb-3">
										Nộp thuế đúng hạn và đầy đủ cho Chính
										phủ Hungary.
									</li>
									<li className="mb-3">
										Được phép bán lại bất động sản, tuy
										nhiên sau 2 năm rưỡi nên mua lại bất
										động sản có giá ngang bằng để đảm bảo
										thời gian lưu trú trước khi gia hạn lại
										thẻ cư trú.
									</li>
								</ul>
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

export default BLogDetailPage4;
