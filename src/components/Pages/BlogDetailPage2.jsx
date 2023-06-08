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

const BlogDetailPage2 = () => {
	const params = useParams();

	pageTitle("Blog Details");

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<>
			<PageHeading
				title="Những điều cần biết về du học Hungary"
				bgSrc="/images/blog_details_hero_bg.jpeg"
				pageLinkText={"Những điều cần biết về du học Hungary"}
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
									Du học Hungary và những điều cần biết
								</h2>
								<i>
									Với nền tảng giáo dục truyền thống vững chắc
									cùng những nỗ lực cải cách không ngừng từ
									chính phủ, Hungary đang dần chuyển mình trở
									thành một tụ điểm thu hút sinh viên quốc tế
									hàng đầu Châu u. Một trong những thế mạnh
									lớn nhất của du học Hungary đó là chất lượng
									đào tạo tiên tiến với mức chi phí phải
									chăng, đa dạng ngành nghề và nổi bật là đào
									tạo về ngành Y.
								</i>

								<i className="text-[30px] block my-4">
									Lợi thế nổi bật khi học tập tại Hungary
								</i>

								<ul>
									<li className="mb-3 italic">
										Bằng cấp tại Hungary được công nhận khắp
										Châu u và trên toàn thế giới. Chính phủ
										cũng tích cực tổ chức những chương trình
										trao đổi giáo dục, giúp sinh viên có cơ
										hội học tập, trải nghiệm văn hóa và cách
										thức đào tạo tại các nước tân tiến khác
										trong khối EU.
									</li>
									<li className="mb-3 italic">
										Chi phí học tập và sinh hoạt tại Hungary
										thuộc hàng thấp nhất ở Châu Âu
									</li>
									<li className="mb-3 italic">
										Đa số các trường Đại học tại Hungary đều
										cung cấp những chương trình giảng dạy
										bằng Tiếng Anh cùng nhiều suất học bổng
										dành riêng cho sinh viên quốc tế.
									</li>
									<li className="mb-3 italic">
										Môi trường học tập an toàn. Theo thống
										kê chính thức, Hungary nằm trong Top 20
										quốc gia hòa bình nhất thế giới.
									</li>
									<li className="mb-3 italic">
										Cơ hội làm việc tại những công ty quốc
										tế hàng đầu Châu Âu.
									</li>
								</ul>

								<div className="my-2 text-center">
									<img
										src="/images/blog/blog-2-2.jpg"
										alt="blog"
									/>
								</div>

								<p className="text-center italic">
									Đại học Corvinus
								</p>

								<i className="text-[30px] block my-4">
									Lựa chọn trường Đại học ở Hungary
								</i>

								<p className="italic">
									Thông tin có lợi nhất cho sinh viên quốc tế
									đó là trong tất cả các ngành học ở Hungary,
									có hàng trăm chương trình đào tạo hoàn toàn
									bằng Tiếng Anh. Những bằng cấp từ các chương
									trình này đều tuân theo tiêu chuẩn Bologna
									của Châu u và được công nhận khắp nơi trên
									toàn thế giới
								</p>
								<p className="italic">
									Bảo chứng cho chất lượng giáo dục của
									Hungary đó là nơi đây đã đào tạo nên nhiều
									bộ óc thiên tài, bao gồm các nhà khoa học
									nổi tiếng như nhà toán học John von Neumann
									và nhà khoa học đã đoạt giải Nobel - Albert
									Szent-Györgyi.
								</p>
								<p className="italic mb-2">
									Rất nhiều trường đại học tại Hungary được
									đánh giá cao và có tên trong những bảng xếp
									hạng uy tín hàng đầu thế giới. Dưới đây là
									danh sách các trường nằm trong Top 1000
									trường Đại học hàng đầu thế giới theo QS
									World University Rankings 2021:
								</p>
								<ul className="mb-4">
									<li className="italic mb-3">
										Đại học Szeged
									</li>
									<li className="italic mb-3">
										Đại học Debrecen
									</li>
									<li className="italic mb-3">
										Đại học Eötvös Loránd
									</li>
									<li className="italic mb-3">
										Đại học thuộc vùng Pécs
									</li>
									<li className="italic mb-3">
										Đại học Kinh doanh và Công nghệ Budapest
									</li>
									<li className="italic mb-3">
										Đại học Corvinus Budapest
									</li>
									<li className="italic mb-3">
										Đại học Szent Istvan
									</li>
									<li className="italic mb-3">
										Đại học Miskolc
									</li>
								</ul>

								<i className="block mb-3">
									Hungary cũng được đánh giá cao về chất lượng
									đào tạo trong lĩnh vực Y khoa và Nha khoa.
									Bằng cấp y tế chất lượng cao của Hungary
									được Tổ chức Y tế Thế giới công nhận và có
									thể chuyển trực tiếp sang bất kỳ quốc gia EU
									nào. Các trường đại học ở Hungary cũng đang
									cung cấp bằng cấp Y khoa bằng cả tiếng Anh
									và các ngoại ngữ khác như tiếng Đức để thu
									hút sinh viên quốc tế.
								</i>

								<div className="my-2 text-center">
									<img
										src="/images/blog/blog-2-1.jpg"
										alt="blog"
									/>
								</div>

								<i className="block text-center mb-5">
									Đại học Semmelweis
								</i>

								<p className="font-bold mb-2">
									Dưới đây là các trường đại học hàng đầu về Y
									khoa tại Hungary
								</p>
								<ul className="mb-4">
									<li className="italic mb-3">
										Semmelweis University
									</li>
									<li className="italic mb-3">
										University of Debrecen
									</li>
									<li className="italic mb-3">
										University of Pécs
									</li>
									<li className="italic mb-3">
										University of Szeged
									</li>
								</ul>

								<i className="text-[30px] block my-4">
									Điều kiện du học Hungary
								</i>

								<i className="block my-4">
									Mỗi trường Đại học hoặc Cao đẳng Hungary đều
									sẽ có những điều kiện ứng tuyển khác nhau,
									song thông thường, sinh viên cần đáp ứng
									những yêu cầu đầu vào như: bằng tốt nghiệp
									trung học phổ thông hoặc bằng cử nhân (đối
									với chương trình thạc sĩ), chứng chỉ ngôn
									ngữ ở mức nhất định đồng thời vượt qua kỳ
									thi tuyển sinh tùy vào ngành học.
								</i>

								<i className="text-[20px] block mb-2">
									Bằng tốt nghiệp trung học phổ thông và bảng
									điểm
								</i>

								<ul>
									<li className="italic mb-4">
										Cả bằng tốt nghiệp và bảng điểm trong
										quá trình học trước đó đều phải được
										dịch sang tiếng Hungary hoặc tiếng Anh,
										tùy thuộc vào ngôn ngữ mà chương trình
										được phân phối
									</li>
								</ul>

								<i className="text-[20px] block mb-2">
									Kỳ thi tuyển sinh
								</i>

								<ul>
									<li className="italic mb-4">
										Điều kiện này chỉ áp dụng đối với 1 số
										ngành học. Nếu sinh viên chưa tham gia
										hoặc chưa vượt qua kỳ thi tuyển sinh đại
										học ở nước mình, hoặc không phải là sinh
										viên EU thì sẽ cần phải đăng ký học một
										khóa dự bị kéo dài khoảng 2 tháng tại
										trường Đại học mà mình quan tâm trước
										khi thi tuyển.
									</li>
									<li className="italic mb-4">
										Đối với 1 số ngành khác, sinh viên sẽ
										được đánh giá dựa trên bảng điểm trong
										quá trình học trước đó và có thể cộng
										thêm điểm kinh nghiệm làm việc/thực tập
										tùy theo mỗi ngành.
									</li>
								</ul>

								<i className="text-[20px] block mb-2">
									Yêu cầu ngôn ngữ
								</i>

								<p className="italic">
									Đối với một số chương trình đào tạo bằng
									Tiếng Anh ở Hungary, sinh viên sẽ được kiểm
									tra cả trình độ ngôn ngữ trong kỳ thi tuyển
									sinh. Hoặc, sinh viên có thể nộp chứng chỉ
									TOEFL hoặc IELTS với mức điểm tối thiểu như
									sau:
								</p>

								<i className="font-bold block mb-2">
									Đối với chương trình Cử nhân
								</i>

								<ul>
									<li className="italic mb-4">
										Từ 5.0 – 6.0 cho bài kiểm tra IELTS
									</li>
									<li className="italic mb-4">
										Từ 60 – 80 cho bài kiểm tra TOEFL
									</li>
								</ul>

								<i className="font-bold block mb-2">
									Đối với chương trình Thạc sĩ
								</i>

								<ul>
									<li className="italic mb-4">
										Từ 5.5 – 6.5 trong IELTS
									</li>
									<li className="italic mb-4">
										Từ 70 – 90 trong bài kiểm tra TOEFL
									</li>
								</ul>

								<p className="italic">
									Đối với các chương trình giáo dục được cung
									cấp bằng các ngôn ngữ khác (phổ biến nhất là
									tiếng Đức), sẽ có những yêu cầu tương tự về
									trình độ tiếng Đức.
								</p>

								<i className="font-bold block">
									* Yêu cầu đầu vào sẽ khác nhau tùy thuộc vào
									mỗi trường và chương trình, vì vậy hãy đảm
									bảo nghiên cứu thật chính xác những yêu cầu
									mà trường cung cấp.
								</i>

								<i className="text-[30px] block my-4">
									Các kỳ nhập học tại Hungary
								</i>

								<i className="block mb-2">
									Đối với các chương trình học giảng dạy bằng
									tiếng Hungary, thường có hai đợt tuyển sinh
									chính:
								</i>

								<ul>
									<li className="italic mb-1">
										15/02: cho các chương trình bắt đầu
										trong học kỳ mùa thu
									</li>
									<li className="italic mb-1">
										15/11: cho các chương trình bắt đầu
										trong học kỳ mùa xuân
									</li>
								</ul>

								<i className="block mb-4">
									Đối với các chương trình học và khóa học
									giảng dạy bằng Tiếng Anh, thời hạn nộp đơn
									có thể sẽ khác. Nhìn chung, sinh viên quốc
									tế cần nộp hồ sơ một học kỳ trước khi bắt
									đầu khóa học.
								</i>

								<i className="block">
									Ở Hungary, học kỳ mùa thu kéo dài từ hai
									tuần đầu tiên của tháng 9 đến cuối tháng 1.
									Học kỳ mùa xuân bắt đầu vào nửa đầu tiên của
									tháng 2 và kéo dài đến cuối tháng 6
								</i>

								<div className="my-2 text-center">
									<img
										src="/images/blog/blog-2-3.jpg"
										alt="blog"
									/>
								</div>

								<i className="text-[30px] block my-4">
									Chi phí du học Hungary
								</i>

								<i className="text-[20px] block my-4">
									Học phí
								</i>

								<ul>
									<li className="italic mb-1">
										So với các nước châu u khác, học phí tại
										Hungary rất phải chăng.Tùy thuộc vào
										trường và ngành học, mức học phí sẽ khác
										nhau. Những chương trình học đắt đỏ nhất
										thường thuộc lĩnh vực Y - Nha khoa và
										học phí có thể lên tới 20.000€/năm. Với
										những chuyên ngành khác, học phí có thể
										chỉ rơi vào khoảng 4.500€/năm.
									</li>
									<li className="italic mb-1">
										Ngoài học phí, các trường đại học
										Hungary cũng yêu cầu sinh viên đóng lệ
										phí nộp đơn, lệ phí thi và lệ phí đăng
										ký, mỗi lần từ 100€ – 150€
									</li>
								</ul>

								<i className="text-[20px] block my-4">
									Chi phí sinh hoạt
								</i>

								<i className="block">
									Chi phí sinh hoạt sẽ thay đổi tùy thuộc từng
									vùng ở Hungary. Nếu sinh viên lựa chọn học
									tập tại Thủ đô Budapest, chi phí sẽ đắt hơn
									so với những địa phương khác. Ngân sách sinh
									hoạt hàng tháng hợp lý là khoảng 750€ bao
									gồm tiền thuê nhà, ăn uống, bảo hiểm y tế,
									tài liệu học tập, giải trí, vv. Tuy nhiên
									chi phí cũng có thể tăng giảm theo lối sống
									của mỗi người (có thể chỉ khoảng 450€ –
									500€/tháng)
								</i>

								<i className="text-[30px] block my-4">
									Học bổng Hungary dành cho sinh viên quốc tế
								</i>

								<i className="text-[20px] block my-4">
									Stipendium Hungaricum
								</i>

								<i className="block">
									Chương trình học bổng Stipendium Hungaricum
									được Chính phủ Hungary đưa ra vào năm 2013
									với mục tiêu khuyến khích sinh viên quốc tế
									tới học tập tại Hungary, đồng thời góp phần
									củng cố mối quan hệ giữa các tổ chức giáo
									dục cấp Đại học tại Hungary và quốc tế. .
								</i>

								<i className="block mb-2">
									Học bổng Stipendium Hungaricum có sẵn cho
									các chương trình cử nhân, thạc sĩ, thạc sĩ
									một bậc, tiến sĩ và không cấp bằng (các khóa
									học dự bị và chuyên môn).
								</i>

								<i className="block font-bold mb-2">
									Giá trị học bổng: Toàn phần
								</i>

								<ul>
									<li className="italic mb-2">
										Miễn học phí
									</li>
									<li className="italic mb-2">
										Trợ cấp hàng tháng:
										<ul>
											<li className="mb-2">
												Với chương trình không cấp bằng,
												Cử nhân, Thạc sĩ: HUF 40,460/năm
												cho đến khi kết thúc chương
												trình đào tạo
											</li>
											<li className="mb-2">
												Với chương trình Tiến sĩ: theo
												luật pháp hiện hành của Hungary,
												số tiền học bổng hàng tháng là
												HUF 140,000 (cho giai đoạn giáo
												dục đầu tiên - 4 kỳ học) và HUF
												180,000 (cho giai đoạn thứ hai -
												4 kỳ học tiếp)
											</li>
										</ul>
									</li>
									<li className="italic mb-2">
										Nơi ở: ký túc xá hoặc hoặc trợ cấp HUF
										40,000/tháng để thuê nhà
									</li>
									<li className="italic mb-2">
										Bảo hiểm y tế: Bao gồm các dịch vụ chăm
										sóc sức khỏe theo luật pháp liên quan
										tại Hungary (Đạo luật số 80 của 1997,
										thẻ bảo hiểm y tế quốc gia) và trợ cấp
										bảo hiểm y tế bổ sung lên đến HUF
										65.000/năm/người
									</li>
								</ul>

								<i className="text-[20px] block my-4">
									Bilateral State Scholarships
								</i>

								<p className="italic m-0">
									Học bổng nhà nước song phương dựa trên các
									thỏa thuận hợp tác khoa học và giáo dục được
									ký bởi chính phủ hai nước được tài trợ bởi
									quỹ Tempus Public Foundation – một tổ chức
									nền tảng của Bộ Sáng tạo và Công nghệ
									Hungary (ITM)
								</p>

								<p className="italic my-4">
									Chương trình học bổng có sẵn:
								</p>

								<ul>
									<li className="italic mb-2">
										Khóa học Cử nhân/Thạc sĩ hoặc Tiến sĩ
										một kỳ (3 – 10 tháng)
									</li>
									<li className="italic mb-2">
										Bằng Cử nhân/Thạc sĩ hoặc Tiến sĩ (tương
										ứng 36/24/4 tháng)
									</li>
									<li className="italic mb-2">
										Học tập kết hợp tham quan, khảo sát,
										trao đổi
									</li>
									<li className="italic mb-2">
										Khóa học hè (2 – 4 tuần)
									</li>
								</ul>

								<p className="italic m-0">
									Học bổng này không có giới hạn độ tuổi cho
									ứng viên ứng tuyển
								</p>

								<p className="italic text-[20px] my-4">
									Erasmus Mundus
								</p>

								<p className="italic mb-2">
									Erasmus Mundus là một trong những học bổng
									toàn phần danh giá nhất ở châu u. Chương
									trình này dành cho những sinh viên có thành
									tích xuất sắc và phù hợp với chương trình
									học nhất.
								</p>
								<p className="italic mb-2">
									Khác với những học bổng khác, học bổng
									Erasmus Mundus chấp nhận ứng viên từ đa dạng
									chuyên ngành, quốc tịch mà không có sự phân
									biệt, ràng buộc về địa điểm làm việc sau khi
									tốt nghiệp.
								</p>

								<p className="italic my-4">
									<span className="font-bold">
										Giá trị học bổng
									</span>
									: Đây là học bổng toàn phần nên{" "}
									<span className="font-bold">
										toàn bộ chi phí như học phí, phí đi lại,
										bảo hiểm sẽ được chi trả
									</span>
									. Học bổng Erasmus Mundus gồm{" "}
									<span className="font-bold">có 2 loại</span>
									:
								</p>
								<p className="m-0 font-bold">
									Nhóm A (Dành cho sinh viên ngoài Liên minh
									châu u – EU):
								</p>

								<ul>
									<li className="italic mb-2">
										Học phí, phí sinh hoạt:{" "}
										<span className="font-bold">
											1.000 EURO/ tháng.
										</span>
									</li>
									<li className="italic mb-2">
										Phí visa, hỗ trợ đi lại:{" "}
										<span className="font-bold">
											4.000 EURO.
										</span>
									</li>
									<li className="italic mb-2">
										Bảo hiểm (được tính riêng hoặc trừ thẳng
										vào tài khoản{" "}
										<span className="font-bold">
											4.000 EURO
										</span>{" "}
										tuỳ thuộc vào chương trình).
									</li>
								</ul>

								<p className="m-0 font-bold">Nhóm B</p>

								<i>
									Sinh viên trong hoặc ngoài EU nhưng ở đây
									trên 12 tháng:
								</i>

								<ul>
									<li className="italic mb-2">
										Học phí và sinh hoạt phí:{" "}
										<span className="font-bold">
											500 EURO/ tháng.
										</span>
									</li>
								</ul>

								<i>Sinh viên ngoài EU:</i>

								<ul>
									<li className="italic mb-2">
										Học phí và sinh hoạt phí:{" "}
										<span className="font-bold">
											5.000 EURO/ tháng.
										</span>
									</li>
								</ul>

								<p className="italic my-3 font-bold">
									Ngoài ra, Chính phủ Hungary cũng thường
									xuyên hợp tác cùng Chính phủ Việt Nam nhằm
									tạo cơ hội học tập và đào tạo cho sinh viên
									hai nước, đồng thời góp phần củng cố mối
									quan hệ song phương.
								</p>

								<i className="block mb-4 text-[30px]">
									Làm việc tại Hungary trong thời gian học
								</i>

								<p className="my-3 italic">
									Sinh viên có mong muốn làm việc bán thời
									gian trong thời gian học họăc trong kỳ nghỉ
									hè để trang trải chi phí sinh hoạt và lấy
									kinh nghiệm cần tuân thủ đảm bảo những điều
									kiện như sau:
								</p>

								<ul>
									<li className="italic mb-2">
										Nếu là sinh viên đến từ một quốc gia EEA
										(các quốc gia thành viên của EU và Na
										Uy, Thụy Sĩ, Iceland và Liechtenstein):
										không giới về giờ làm việc và cần có thẻ
										đăng ký
									</li>
									<li className="italic mb-2">
										Nếu là công dân của một quốc gia không
										thuộc không thuộc EEA, cần có giấy phép
										cư trú cho mục đích học tập và thời gian
										làm việc tối đa là 30 giờ/tuần trong
										thời gian học, hoặc trong các kỳ nghỉ lễ
										thời gian làm việc cộng dồn tối đa 66 -
										90 ngày/năm.
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

export default BlogDetailPage2;
