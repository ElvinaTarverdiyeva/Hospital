import React, { Component } from 'react'
import Page11 from '../Page11'
import Page5 from '../Page5'
import aboutpage2img from '../../img/aboutimg2.png'
import h5img from "../../img/h5imgp10.png"
import Page8 from '../page8/Page8'
import $ from 'jquery'
$(document).ready(function(){
    $(window).scroll(function() {
        var top = $(window).scrollTop();
        if (top >= 200) {
             $(".aboutpage2").addClass('aboutpage2ani');
        }
        if (top >= 1000) {   
            $(".page5aboutimg").addClass('page5aboutimgani');
            $(".page5abouttext").addClass('page5abouttextani');
        }
    });
});
class AboutUs extends Component {
    render() {
        return (
            <div>
                <div className="about">
                    <div className="abouthed">
                        <div className="hedtext">
                        <h2>About Us</h2>
                        <img src={h5img} alt="" />
                        </div>
                    </div>
                    <div className="aboutpage2">
                        <div className="div1">
                           <img src={aboutpage2img} alt="" />
                        </div>
                        <div className="div2">
                        <h1>We Are Specialize in Medical Diagnositics</h1>
                        <p>Nulla lacinia sapien a diam ullamcorper, sed congue leo vulputate. Phasellus et ante ultrices, sagittis purus vitae, sagittis quam. Quisque urna lectus, auctor quis tristique tincidunt, semper vel lectus. Mauris eget eleifend massa. Praesent ex felis, laoreet nec tellus in, laoreet commodo ipsum.</p>
                        <ul>
                            <li>
                               <div><i class="fas fa-angle-right"></i></div> <p> Pellentesque placerat, nisi congue vehicula efficitur.</p>
                            </li>
                            <li>
                               <div><i class="fas fa-angle-right"></i></div> <p> Pellentesque placerat, nisi congue vehicula efficitur.</p>
                            </li>
                            <li>
                               <div><i class="fas fa-angle-right"></i></div> <p> Pellentesque placerat, nisi congue vehicula efficitur.</p>
                            </li>
                        </ul>
                    </div>
                    </div>
                     <Page5/>
                     <br /><br /><br />
                     <Page8/>
                     <br /><br /><br />
                     <Page11/>
                </div>
            </div>
        )
    }
}

export default AboutUs
