import React from 'react'
import { imageAssests } from '../Assets/imageConst'
import "../Assets/Styles/template.scss"
import Testimonials from './testimonials'

const MiddleSection = () => {
  return (
    <div>
        <div className='first-middle-section'>
                <div className='left-img'>
                    <img src={imageAssests.leftModelImage} alt="left model image" width="510px" height="600px"/>
                </div>
                <div className='right-content'>
                <div className='right-content-title'>
                Requirements gathering and analysis for references.

                </div>
                <div className='right-content-desc'>
                Convallis turpis erat tempus, viverra aliquet. Nullam viverra nam auctor sit ipsum malesuada a, duis volutpat. Convallis turpis erat tempus, viverra aliquet. Nullam viverra nam auctor sit ipsum malesuada a, duis volutpat.
                </div>
                </div>
            </div>

        <div className='second-middle-section'>
            <div className='right-img'>
                <img src={imageAssests.rightModelImage} alt="right-model-image" width="915px" height="521px"/>
            </div>
        </div>
      <Testimonials/>
    </div>
  )
}

export default MiddleSection