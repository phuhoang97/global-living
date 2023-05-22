import React, { useEffect } from "react";
// import Card from '../Card';
import FunFact from "../FunFact";
import Hero from "../Hero";
import Div from "../Div";
import SectionHeading from "../SectionHeading";
import Spacing from "../Spacing";
import Cta from "../Cta";
// import LogoList from '../LogoList';
import MovingText from "../MovingText";
import PortfolioSlider from "../Slider/PortfolioSlider";
import PostSlider from "../Slider/PostSlider";
import TestimonialSlider from "../Slider/TestimonialSlider";
import TeamSlider from "../Slider/TeamSlider";
import VideoModal from "../VideoModal";
// import TimelineSlider from '../Slider/TimelineSlider';
import { pageTitle } from "../../helper";
import Hero3 from "../Hero/Hero3";
import MovingLogo from "../MovingLogo";

export default function Home() {
  pageTitle("Home");

  // Hero Social Links
  const heroSocialLinks = [
    {
      name: "Fanpage",
      links: "/",
    },
    {
      name: "Youtube",
      links: "/",
    },
  ];

  // FunFact Data
  const funfaceData = [
    {
      title: "Chi phí làm thẻ",
      factNumber: "1.6",
      unit: "Tỷ VND",
    },
    {
      title: "Chi phí đầu tư tối thiểu",
      factNumber: "4.6",
      unit: "Tỷ VND",
    },
    {
      title: "Thời gian dự kiến",
      factNumber: "03",
      unit: "Tháng",
    },
    {
      title: "",
      factNumber: "",
      unit: "Xem thêm >>",
    },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* Start Hero Section */}

      <Hero3
        title="Global <br />Living"
        btnLink="contact"
        btnText={`Xem chi tiết chương trình`}
        socialLinksHeading="Follow Us"
        heroSocialLinks={heroSocialLinks}
        scrollDownId="#service"
        bgImageUrl="./images/gl-images/budapest/home-1.jpg"
      />

      {/* End Hero Section */}

      {/* Start FunFact Section */}
      <Spacing lg="150" md="80" />

      <div className="container">
        <FunFact
          variant="cs-type1"
          title="BẤT ĐỘNG SẢN ĐỊNH CƯ HUNGARY"
          subtitle="Chương trình cấp thẻ cư trú nhân Hungary thông qua hình thức đầu tư bất động sản. Với mức đầu tư tối thiểu chỉ từ 175k Euro - tương đương khoảng 4.6 tỷ VND, Nhà đầu tư sẽ vừa sở hữu tài sản nhà đất ở địa thế vàng - Trái tim của Châu Âu, vừa mang lại cho cả 3 thế hệ gia đình những đặc quyền vô giá của một công dân toàn cầu."
          data={funfaceData}
        />
      </div>

      {/* End FunFact Section */}

      {/* Start About Section */}
      <Spacing lg="150" md="80" />
      <Div className="container">
        <Div className="row">
          <Div className="col-xl-5 col-lg-7">
            <SectionHeading title="Định vị thương hiệu" subtitle="">
              <Spacing lg="30" md="20" />
              <p className="cs-m0">
                Global Living là thương hiệu hàng đầu tại Việt Nam trong lĩnh
                vực tư vấn và phát triển bất động sản cao cấp. Với uy tín và
                kinh nghiệm, chúng tôi đã và đang mang tới cho khách hàng những
                giải pháp đầu tư bất động sản tối ưu tại cả trong và ngoài nước,
                kết hợp với các dịch vụ hỗ trợ định cư độc đáo, giúp khách hàng
                tiếp cận những đặc quyền của công dân toàn cầu. Chúng tôi luôn
                cam kết mang đến sự hài lòng và thành công cho khách hàng trong
                mỗi giao dịch và dự án.
              </p>
              <Spacing lg="30" md="30" />
              <Div className="cs-separator cs-accent_bg"></Div>
              <Spacing lg="25" md="40" />
            </SectionHeading>
          </Div>
          <Div className="col-lg-5 offset-xl-2">
            <img
              src="./images/about_img_1.jpeg"
              alt="About"
              className="w-100 cs-radius_15 gs"
            />
            <Spacing lg="25" md="25" />
          </Div>
          <Div className="col-lg-7">
            <img
              src="./images/about_img_2.jpeg"
              alt="About"
              className="w-100 cs-radius_15 gs"
            />
            <Spacing lg="25" md="25" />
          </Div>
          <Div className="col-lg-5">
            <img
              src="./images/about_img_3.jpeg"
              alt="About"
              className="w-100 cs-radius_15 gs"
            />
            <Spacing lg="25" md="25" />
          </Div>
        </Div>
      </Div>
      <Spacing lg="75" md="55" />
      {/* End About Section */}
      <Hero
        title="Đầu tư Bất động sản<br/>Nhận thẻ cư trú Hungary"
        subtitle="Tìm hiểu những đặc quyền chỉ có ở Đầu tư Bất Động Sản Hungary"
        btnText="Xem chi tiết chương trình"
        btnLink="/main-product"
        scrollDownId="#service"
        socialLinksHeading="Follow Us"
        heroSocialLinks={heroSocialLinks}
        bgImageUrl="/images/hero_bg_5.jpeg"
      />

      {/* Start Why Choose Section */}
      <Spacing lg="100" md="80" />
      <Div className="container">
        <Div className="row">
          <Div className="col-xl-5 col-lg-6">
            <Div className="cs-image_layer cs-style1">
              <Div className="cs-image_layer_in">
                <img
                  src="/images/about_img_5.jpeg"
                  alt="About"
                  className="w-100 cs-radius_15"
                />
              </Div>
            </Div>
            <Spacing lg="0" md="40" />
          </Div>
          <Div className="col-xl-5 offset-xl-1 col-lg-6">
            <SectionHeading title="Tầm nhìn" subtitle="">
              <Spacing lg="30" md="20" />
              <p className="cs-m0">
                Global Living định hướng trở thành đơn vị tiên phong trong lĩnh
                vực đầu tư và phát triển bất động sản cao cấp. Với sự tận tâm và
                chuyên nghiệp, chúng tôi luôn đặt mục tiêu mang đến cho khách
                hàng những cơ hội đầu tư đắt giá và tấm thẻ định cư quyền lực,
                tại những quốc gia mà sự tiến bộ và tiềm năng phát triển còn rất
                lớn. Chúng tôi luôn nỗ lực không ngừng để giữ vững được vị thế
                trong tâm trí khách hàng là một đơn vị uy tín với chất lượng
                dịch vụ hàng đầu.
              </p>
              <Spacing lg="15" md="15" />

              <Spacing lg="30" md="30" />
              <Div className="cs-separator cs-accent_bg"></Div>
              <Spacing lg="25" md="0" />
            </SectionHeading>
          </Div>
        </Div>
      </Div>
      {/* End Why Choose Section */}

      {/* Start Why Choose Section */}
      <Spacing lg="100" md="80" />
      <Div className="container">
        <Div className="row">
          <Div className="col-xl-5 offset-xl-1 col-lg-6">
            <SectionHeading title="Sứ mệnh" subtitle="">
              <Spacing lg="30" md="20" />
              <p className="cs-m0">
                Sứ mệnh của Global Living là đồng hành cùng khách hàng qua từng
                bước trên hành trình đầu tư bất động sản cao cấp tại các quốc
                gia phát triển. Không chỉ dừng lại ở những sản phẩm đầu tư quốc
                tế với chất lượng vượt trội, chúng tôi còn mong muốn hỗ trợ
                khách hàng sở hữu tấm thẻ định cư quý giá để tận hưởng những lợi
                ích của một công dân toàn cầu. Giúp cho khách hàng hiện thực hóa
                ước mơ sống và làm việc tại một môi trường an toàn, tiện nghi
                với chất lượng cuộc sống đẳng cấp chính là nhiệm vụ của Global
                Living. Chúng tôi tự hào là đối tác đáng tin cậy của khách hàng,
                và luôn nỗ lực để mang đến cho họ sự hài lòng và những trải
                nghiệm tốt nhất trên con đường thành công và thịnh vượng.
              </p>
              <Spacing lg="15" md="15" />

              <Spacing lg="30" md="30" />
              <Div className="cs-separator cs-accent_bg"></Div>
              <Spacing lg="25" md="0" />
            </SectionHeading>
          </Div>
          <Div className="col-xl-5 col-lg-6">
            <Div className="cs-image_layer cs-style1">
              <Div className="cs-image_layer_in">
                <img
                  src="/images/about_img_4.jpeg"
                  alt="About"
                  className="w-100 cs-radius_15"
                />
              </Div>
            </Div>
            <Spacing lg="0" md="40" />
          </Div>
        </Div>
      </Div>
      {/* End Why Choose Section */}

      {/* Start MovingText Section */}
      <Spacing lg="125" md="70" />
      <MovingText text="Global Living - Đầu tư không biên giới  - " />
      {/* <Spacing lg="105" md="70" /> */}
      {/* End MovingText Section */}

      {/* Start Video Block Section */}
      {/* <Spacing lg="130" md="70" /> */}
      <Div className="container">
        {/* <h2 className="cs-font_50 cs-m0 text-center cs-line_height_4">
          Our agile process is ability to adapt and respond to change. Agile
          organizations view change as an opportunity, not a threat.
        </h2> */}
        <Spacing lg="70" md="70" />
        <VideoModal
          videoSrc="https://www.youtube.com/watch?v=Yn2VYwTvPSQ"
          bgUrl="/images/video_bg_3.jpeg"
        />
      </Div>
      {/* End Video Block Section */}

      {/* Start Service Section */}
      {/* <Spacing lg="150" md="80" />
      <Div id="service">
        <Div className="container">
          <Div className="row">
            <Div className="col-xl-4">
              <SectionHeading
                title="Services we can help you with"
                subtitle="What Can We Do"
                btnText="See All Services"
                btnLink="/service"
              />
              <Spacing lg="90" md="45" />
            </Div>
            <Div className="col-xl-8">
              <Div className="row">
                <Div className="col-lg-3 col-sm-6 cs-hidden_mobile"></Div>
                <Div className="col-lg-3 col-sm-6">
                  <Card
                    title="UI/UX design"
                    link="/service/service-details"
                    src="/images/service_1.jpeg"
                    alt="Service"
                  />
                  <Spacing lg="0" md="30" />
                </Div>
                <Div className="col-lg-3 col-sm-6 cs-hidden_mobile"></Div>
                <Div className="col-lg-3 col-sm-6">
                  <Card
                    title="React.js Development"
                    link="/service/service-details"
                    src="/images/service_2.jpeg"
                    alt="Service"
                  />
                  <Spacing lg="0" md="30" />
                </Div>
                <Div className="col-lg-3 col-sm-6">
                  <Card
                    title="Digital Marketing"
                    link="/service/service-details"
                    src="/images/service_3.jpeg"
                    alt="Service"
                  />
                  <Spacing lg="0" md="30" />
                </Div>
                <Div className="col-lg-3 col-sm-6 cs-hidden_mobile"></Div>
                <Div className="col-lg-3 col-sm-6">
                  <Card
                    title="Technology"
                    link="/service/service-details"
                    src="/images/service_4.jpeg"
                    alt="Service"
                  />
                  <Spacing lg="0" md="30" />
                </Div>
                <Div className="col-lg-3 col-sm-6 cs-hidden_mobile"></Div>
              </Div>
            </Div>
          </Div>
        </Div>
      </Div> */}
      {/* End Service Section */}

      {/* Start Awards Section */}
      {/* <Spacing lg="150" md="80" />
      <Div className="cs-shape_wrap_2">
        <Div className="cs-shape_2">
          <Div />
        </Div>
        <Div className="container">
          <Div className="row">
            <Div className="col-xl-4">
              <SectionHeading
                title="Bất động sản định cư Hungary"
                subtitle="Sản phẩm cốt lõi"
                variant="cs-style1"
              />
              <Spacing lg="90" md="45" />
            </Div>
            <Div className="col-xl-7 offset-xl-1">
              <TimelineSlider />
            </Div>
          </Div>
        </Div>
      </Div> */}
      {/* End Awards Section */}

      {/* Start Portfolio Section */}
      <Spacing lg="150" md="50" />
      <Div>
        <Div className="container">
          <SectionHeading
            title="Tài liệu dự án mới nhất"
            subtitle="Sale kits"
            variant="cs-style1 text-center"
          />
          <Spacing lg="90" md="45" />
        </Div>
        <PortfolioSlider />
      </Div>
      {/* End Portfolio Section */}

      {/* Start Team Section */}
      <Spacing lg="145" md="80" />
      <Div className="container">
        <SectionHeading
          title="Quỹ căn <br/> Budapest"
          subtitle=""
          variant="cs-style1"
        />
        <Spacing lg="85" md="45" />
        <TeamSlider />
      </Div>
      <Spacing lg="150" md="80" />
      {/* End Team Section */}

      {/* Start Testimonial Section */}
      <TestimonialSlider />
      {/* End Testimonial Section */}

      {/* Start Blog Section */}
      <Spacing lg="150" md="80" />
      <Div className="cs-shape_wrap_4">
        <Div className="cs-shape_4"></Div>
        <Div className="cs-shape_4"></Div>
        <Div className="container">
          <Div className="row">
            <Div className="col-xl-4">
              <SectionHeading
                title="Tin tức <br /> mới nhất"
                subtitle="Our Blog"
                btnText="Xem thêm"
                btnLink="/blog"
              />
              <Spacing lg="90" md="45" />
            </Div>
            <Div className="col-xl-7 offset-xl-1">
              <Div className="cs-half_of_full_width">
                <PostSlider />
              </Div>
            </Div>
          </Div>
        </Div>
      </Div>
      {/* End Blog Section */}

      {/* Start MovingText Section */}
      {/* <Spacing lg="125" md="70" />
      <MovingText text="Đầu tư không biên giới  -   " />
      <Spacing lg="105" md="70" /> */}
      {/* End MovingText Section */}

      {/* Start MovingLogo Section */}
      <Spacing lg="125" md="70" />
      <MovingLogo text="" />
      <Spacing lg="105" md="70" />
      {/* End MovingLogo Section */}

      {/* Start LogoList Section */}
      {/* <Div className="container">
        <LogoList />
      </Div>
      <Spacing lg="150" md="80" /> */}
      {/* End LogoList Section */}

      {/* Start CTA Section */}
      <Div className="container">
        <Cta
          title="Tham gia ngay để trở thành <br /> Đại lý/Cộng tác viên <br /> PHÂN PHỐI ĐỘC QUYỀN "
          btnText="Đăng ký ngay."
          btnLink="/contact"
          bgSrc="images/portfolio_hero_bg_2.jpg"
        />
      </Div>
      {/* End CTA Section */}
    </>
  );
}
