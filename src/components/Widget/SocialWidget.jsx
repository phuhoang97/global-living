import React from 'react'
// import { Link } from 'react-router-dom'
import { Icon } from '@iconify/react';
import Div from '../Div';

export default function SocialWidget() {
  return (
    <Div className="cs-social_btns cs-style1">
      <a href="https://www.youtube.com/@GlobalLivingGroup" className="cs-center">
      {/* <Link to='/' className="cs-center"> */}
        <Icon icon="fa6-brands:youtube" />
      {/* </Link> */}
      </a>
      <a href="https://www.facebook.com/globalliving.group" className="cs-center">
      {/* <Link to='/' className="cs-center"> */}
        <Icon icon="fa6-brands:facebook" />
      {/* </Link> */}
      </a>
    </Div>
  )
}
