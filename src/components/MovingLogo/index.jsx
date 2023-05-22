import React from 'react'
import Div from '../Div'
import './movinglogo.scss'
import LogoList from '../LogoList'

export default function MovingLogo({text}) {
  return (

    <div>
        <h2 className="cs-section_heading cs-style1 text-center">Hệ thống phân phối độc quyền</h2>
        <Div className="cs-moving_text_wrap cs-bold cs-primary_font">
        <Div className="cs-moving_text_in">
        <Div className="cs-moving_text"> <LogoList/></Div>
        <Div className="cs-moving_text"> <LogoList/></Div>
         
        </Div>
      </Div>
    </div>

  )
}
