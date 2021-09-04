import React, { Component } from 'react'
import page2doctor from "../img/page2doctor.png"
import h5img from "../img/h5img.png"
import user from "../img/user.png"
import $ from 'jquery'
$(document).ready(function(){
    $(window).scroll(function() {
        var top = $(window).scrollTop();

        if (top >= 580) {
            $(".page2about").addClass('page2aboutanimation');
        }
    });
});
class Page2 extends Component {
    render() {
        return (
            <div>
                <div className="page2">
                    <div className="imgdiv">
                        <img src={page2doctor} alt="" />
                    </div>
                    <div className="textdiv">
                        <h5>ABOUT US</h5>
                        <img src={h5img} alt="" />
                        <h1>We Are Specialize in <span>Medical</span> Diagnositics</h1>
                        <button className="getBtn">Read More <div><i class="fas fa-angle-right"></i></div></button>
                    </div>
                </div>
                <div className="page2about">
                    <div className="div1" id="div1">
                        <p>Nulla lacinia sapien a diam ullamcorper, sed congue leo vulputate. Phasellus et ante ultrices, sagittis purus vitae, sagittis quam. Quisque urna lectus, auctor quis tristique tincidunt, semper vel lectus. Mauris eget eleifend massa. Praesent ex felis, laoreet nec tellus in, laoreet commodo ipsum.</p>
                    </div>
                    <div className="div2">
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
                        <div className="divuser">
                            <img src={user} alt="" />
                            <h3>2887</h3>
                            <p>Happy Custoimer</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Page2
