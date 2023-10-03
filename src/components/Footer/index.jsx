import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Div from "../Div";
import ContactInfoWidget from "../Widget/ContactInfoWidget";
import MenuWidget from "../Widget/MenuWidget";
import Newsletter from "../Widget/Newsletter";
import SocialWidget from "../Widget/SocialWidget";
import TextWidget from "../Widget/TextWidget";
import "./footer.scss";
import { getAllDataHomePage } from "../../apis/home/api";
import { getAllDataInfo } from "../../apis/information/api";

export default function Footer({ copyrightText, logoSrc, logoAlt, text }) {
  const navigate = useNavigate();
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
        "CDC BUILDING - 25 Lê Đại Hành, P. Lê Đại Hành, Quận Hai Bà Trưng, Hà Nội",
      href: "/contact",
    },
    {
      title: "Văn phòng tại TP.HCM:",
      address:
        "SUNWAH INNOVATIONS - Tầng 6 - Tháp Golden - Toà nhà Sunwah Pearl 90 Nguyễn Hữu Cảnh - Phường 2, Quận Bình Thạnh TP HỒ CHÍ MINH",
      href: "/contact",
    },
    {
      title: "Văn phòng tại Nha Trang:",
      address:
        "COWORK GOLD COAST - Tầng 9, Toà nhà Gold Coast - Số 1 Trần Hưng Đạo, P.Lộc Thọ, TP NHA TRANG",
      href: "/contact",
    },
  ];
  const information = [
    {
      content: "093 162 69 09",
    },
    {
      content: "info@globalliving-group.com",
    },
    {
      content: "www.globalliving-group.com",
    },
  ];
  const [dataSource, setDataSource] = useState([]);
  const [informationSource, setInformationSource] = useState([]);

  const mapData = (data) => {
    if (data?.length > 0) {
      const length = data?.length;

      return [
        {
          title: "Trụ sở tại Hà Nội:",
          address: (
            <span
              dangerouslySetInnerHTML={{
                __html: data[length - 1]?.heading,
              }}
            />
          ),
          href: "/contact",
        },
        {
          title: "Văn phòng tại TP.HCM:",
          address: (
            <span
              dangerouslySetInnerHTML={{
                __html: data[length - 1]?.detail,
              }}
            />
          ),
          href: "/contact",
        },
        {
          title: "Văn phòng tại Nha Trang:",
          address: (
            <span
              dangerouslySetInnerHTML={{
                __html: data[length - 1]?.invest,
              }}
            />
          ),
          href: "/contact",
        },
      ];
    } else {
      return serviceMenu;
    }
  };

  const mapInformation = (data) => {
    if (data?.length > 0) {
      const renderData = data?.map((e) => ({
        content: e.link,
        type_detail: e.type_detail,
      }));

      const hotline = renderData?.filter((e) => e.type_detail === 3);
      const email = renderData?.filter((e) => e.type_detail === 4);
      const web = renderData?.filter((e) => e.type_detail === 5);

      return [hotline, email, web];
    } else {
      return information;
    }
  };

  useEffect(() => {
    getAllDataHomePage().then((response) => {
      setDataSource(
        mapData(response?.data?.filter((item) => item?.title === "location"))
      );
    });

    getAllDataInfo().then((response) => {
      setInformationSource(
        mapInformation(
          response?.common_data?.filter((item) => item?.type === 3)
        )
      );
    });
  }, []);

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
                {/* <p className="mt-4">Hotline: 093 162 69 09</p> */}
              </Div>
            </Div>
            <Div className="col-lg-3 col-sm-6">
              <Div className="cs-footer_item">
                <MenuWidget menuItems={dataSource} menuHeading="Địa chỉ" />
              </Div>
            </Div>
            <Div className="col-lg-3 col-sm-6">
              <Div className="cs-footer_item">
                <ContactInfoWidget
                  infoItems={informationSource}
                  title="Liên hệ"
                />
              </Div>
            </Div>
            <Div className="col-lg-3 col-sm-6">
              {/* <Div className="cs-footer_item">
								<Newsletter
									title="Đăng ký nhận thông tin"
									subtitle="Nhận thông tin đầu tư mới nhất từ Global Living Group"
									placeholder="Email hoặc Số điện thoại"
								/>
							</Div> */}
              <Div className="cs-newsletter cs-style1">
                <form
                  className="cs-newsletter_form"
                  onSubmit={(e) => e.preventDefault()}
                >
                  <button
                    className="cs-newsletter_btn !relative"
                    onClick={() => {
                      navigate("/contact");
                    }}
                  >
                    <span>Đăng ký nhận tư vấn</span>
                  </button>
                </form>
              </Div>
            </Div>
          </Div>
        </Div>
      </Div>
      <Div className="container">
        <Div className="cs-bottom_footer">
          <Div className="cs-bottom_footer_left">
            <Div className="cs-copyright">Copyright © 2023 Global Living.</Div>
          </Div>
          {/* <Div className="cs-bottom_footer_right">
						<MenuWidget
							menuItems={copyrightLinks}
							variant=" cs-style2"
						/>
					</Div> */}
        </Div>
      </Div>
    </footer>
  );
}
