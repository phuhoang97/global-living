import React from 'react'
import { Icon } from '@iconify/react';

export default function ContactInfoWidget({withIcon, title}) {
  return (
    <>
      {title && <h2 className="cs-widget_title">{title}</h2>}
      <ul className="cs-menu_widget cs-style1 cs-mp0">
        <li>
          {withIcon?<span className='cs-accent_color'><Icon icon="material-symbols:add-call-rounded" /></span>:''}
          (+84) 931.626.909
        </li>
        <li>
          {withIcon?<span className='cs-accent_color'><Icon icon="mdi:envelope" /></span>:''}
          info@globalliving-group.com
        </li>
        <li>
          {withIcon?<span className='cs-accent_color'><Icon icon="mdi:map-marker" /></span>:''}
          www.globalliving-group.com <br/>
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
  )
}
