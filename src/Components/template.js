import React from 'react'
import "../Assets/Styles/template.scss"
import { imageAssests } from '../Assets/imageConst'
import MiddleSection from './middleSection'
import { accordianData } from "./dynamicData.js"
import Accordian from './accordian'

const Template = () => {

    /* Handler of Displaying Mobile view hamburger menus */
    const showMobileMenu = () => {
        const hamburger = document.querySelector(".hamburger-btn");
        const navMenu = document.querySelector(".navlinks");
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
    }  
    return (
        <div className='template'>
            <div className='top-navbar'>
                <div className='title'><img src={imageAssests.spaceLogo} alt="title image" /></div>
                <div className='menu-lists'>
                    <button className="hamburger-btn" id="hamburger-btn" onClick={() => showMobileMenu()}>
                        <i class="fa fa-bars" aria-hidden="true"></i>    </button>
                    <ul className='navlinks'>
                        <li ><a href="#" className='menus'>Home</a></li>
                        <li ><a href="#" className='menus'>Templates</a></li>
                        <li ><a href="#" className='menus'>Price</a></li>
                        <li ><a href="#" className='menus'>Help</a></li>
                        <li ><a href="#" className='get-btn'>Get In Touch</a></li>

                    </ul>
                </div>
            </div>

            <MiddleSection />

            <div className='footer'>
                <div className='heading'>
                    FAQ Heading
                </div>
                <div className='footer-content'>
                    <div className='tab-list'>
                        <ul className='tab-options'>
                            <li><div className='tabs'>Tab Item 1</div></li>
                            <li><div className='tabs'>Tab Item 2</div></li>
                            <li><div className='tabs'>Tab Item 3</div></li>
                            <li><div className='tabs'>Tab Item 4</div></li>
                            <li><div className='tabs'>Tab Item 5</div></li>

                        </ul>
                    </div>
                    <div className='faq-qus-list'>
                        {accordianData?.map(({ qusNo, qus }) => (
                            <Accordian title={qusNo} content={qus} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Template