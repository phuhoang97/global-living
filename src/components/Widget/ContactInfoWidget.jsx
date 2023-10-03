import React from "react";
import { Icon } from "@iconify/react";

export default function ContactInfoWidget({ withIcon, title, infoItems }) {
  let hotline = [];
  let email = [];
  let web = [];

  if (infoItems) {
    [hotline, email, web] = infoItems;
  }

  return (
    <>
      {title && <h2 className="cs-widget_title">{title}</h2>}
      <ul className="cs-menu_widget cs-style1 cs-mp0">
        <li>
          {withIcon ? (
            <span className="cs-accent_color">
              <Icon icon="material-symbols:add-call-rounded" />
            </span>
          ) : (
            ""
          )}
          <p className="hotline-box_content">
            Hotline:
            <span
              className="transparent-color hotline"
              dangerouslySetInnerHTML={{
                __html: hotline && hotline[hotline.length - 1]?.content,
              }}
            ></span>
          </p>
        </li>
        <li>
          {withIcon ? (
            <span className="cs-accent_color">
              <Icon icon="mdi:envelope" />
            </span>
          ) : (
            ""
          )}
          <p
            className="transparent-color"
            dangerouslySetInnerHTML={{
              __html: email && email[email.length - 1]?.content,
            }}
          ></p>
        </li>
        <li>
          {withIcon ? (
            <span className="cs-accent_color">
              <Icon icon="mdi:map-marker" />
            </span>
          ) : (
            ""
          )}
          <p
            className="transparent-color"
            dangerouslySetInnerHTML={{
              __html: web && web[web.length - 1]?.content,
            }}
          ></p>
          <br />
        </li>
        {/* <li>
          {withIcon?<span className='cs-accent_color'><Icon icon="mdi:map-marker" /></span>:''}
          Văn phòng Nha trang <br/>COWORK GOLD COAST - Tầng 9, Toà nhà Gold Coast - Số 1 Trần Hưng Đạo, P. Lộc Thọ, TP NHA TRANG
        </li>
        <li>
          {withIcon?<span className='cs-accent_color'><Icon icon="mdi:map-marker" /></span>:''}
          Văn phòng Hồ Chí Minh<br/>SUNWAH INNOVATIONS - Tầng 6 - Tháp Golden - Toà nhà Sunwah Pearl 90 Nguyễn Hữu Cảnh - Phường 2, Quận Bình Thạnh TP HỒ CHÍ MINH
        </li> */}
      </ul>
    </>
  );
}
