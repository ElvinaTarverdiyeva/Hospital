import React, { Component } from 'react'
import logo1 from '../img/logo1.png'
import { NavLink } from 'react-router-dom';
import $ from 'jquery';

$(document).ready(function(){
    $(window).scroll(function() {
        var top = $(window).scrollTop();
        if (top >= 130) {    
            $(".fixedhed").addClass('fixclassani');
            $(".fixedhed").removeClass('fixedhed1');
        }

        else if ($(".fixedhed").hasClass('fixclassani')) {
            $(".fixedhed").addClass('fixedhed1');
            $(".fixedhed").removeClass('fixclassani');
           
        }
    });

});

class Navbar extends Component {
    handleClick(salam) {
            for(var i=0;i<5;i++){
            if(salam=="home"){
                document.getElementsByClassName("nav-link")[i].style.border="none";
            document.getElementsByClassName("nav-link")[0].style.borderBottom="2px solid #1E0B9B";
            document.getElementsByClassName("nav-link")[0].style.paddingBottom="8px";
            document.getElementsByClassName("nav-link")[5].style.border="none";
            }
            if(salam=="about"){
                document.getElementsByClassName("nav-link")[i].style.border="none";
                document.getElementsByClassName("nav-link")[1].style.borderBottom="2px solid #1E0B9B";
                document.getElementsByClassName("nav-link")[1].style.paddingBottom="8px";
                document.getElementsByClassName("nav-link")[5].style.border="none";
            }
            if(salam=="services"){
                document.getElementsByClassName("nav-link")[i].style.border="none";
                document.getElementsByClassName("nav-link")[2].style.borderBottom="2px solid #1E0B9B";
                document.getElementsByClassName("nav-link")[2].style.paddingBottom="8px";
                document.getElementsByClassName("nav-link")[5].style.border="none";
            }
            if(salam=="departments"){
                document.getElementsByClassName("nav-link")[i].style.border="none";
                document.getElementsByClassName("nav-link")[3].style.borderBottom="2px solid #1E0B9B";
                document.getElementsByClassName("nav-link")[3].style.paddingBottom="8px";
                document.getElementsByClassName("nav-link")[5].style.border="none";
            }
            if(salam=="blog"){
                document.getElementsByClassName("nav-link")[i].style.border="none";
                document.getElementsByClassName("nav-link")[4].style.borderBottom="2px solid #1E0B9B";
                document.getElementsByClassName("nav-link")[4].style.paddingBottom="8px";
                document.getElementsByClassName("nav-link")[5].style.border="none";
            }
            if(salam=="contact"){
                document.getElementsByClassName("nav-link")[i].style.border="none";
                document.getElementsByClassName("nav-link")[5].style.borderBottom="2px solid #1E0B9B";
                document.getElementsByClassName("nav-link")[5].style.paddingBottom="8px";
        
            }
}
      }
    render() {
        return (
            <div className="headerfix">
                <div className="hed">
                    <div className="container">
                        <div className="contact">
                            <p><i class="far fa-envelope"></i> info@example.com</p>
                            <p><i class="fas fa-phone"></i>+994 99 999 99 99</p>
                        </div>
                        <div className="contactIkon">
                            <div><i class="fab fa-facebook-f"></i></div><span></span>
                            <div><i class="fab fa-twitter"></i></div><span></span>
                            <div><i class="fab fa-linkedin-in"></i></div><span></span>
                            <div><i class="fab fa-instagram"></i></div>
                        </div>

                    </div>
                </div>
                <div>
                    <div className="fixedhed">
                    <nav className="navbar navbar-expand-lg navbar-light ec-nav">
                        <div className="container">
                            <img className="navbar-brand" src={logo1} width='60' /> <h4 className="logo">Hospital</h4>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon" />
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav me-auto  mb-lg-0">
                                    <li class="nav-item me-auto   mb-lg-0 ">
                                        <NavLink  to="/" className="nav-link" id="hoom" onClick={() => this.handleClick("home")}>Home</NavLink>
                                    </li>
                                    <li class="nav-item me-auto  mb-lg-0">
                                        <NavLink to="/AboutUs" className="nav-link" id="about" onClick={() => this.handleClick("about")}>About Us</NavLink>
                                    </li>
                                    <li class="nav-item me-auto  mb-lg-0 ">
                                        <NavLink  to="/Services" className="nav-link" onClick={() => this.handleClick("services")}>Services</NavLink>
                                    </li>
                                    <li class="nav-item me-auto  mb-lg-0 ">
                                        <NavLink  to="/Departments" className="nav-link"  onClick={() => this.handleClick("departments")}>Departments</NavLink>
                                    </li>
                                    <li class="nav-item me-auto  mb-lg-0 ">
                                        <NavLink  to="/Blog" className="nav-link" onClick={() => this.handleClick("blog")}>Blog</NavLink>
                                    </li>
                                    <li class="nav-item me-auto  mb-lg-0 ">
                                        <NavLink  to="/Contact" className="nav-link" onClick={() => this.handleClick("contact")}>Contact</NavLink>
                                    </li>
                                </ul>
                                <form className="d-flex align-items-center">
                                    <button className="getBtn" >Get A Quote <div><i class="fas fa-angle-right"></i></div></button>
                                    </form>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
            </div>
        )
    }
}

export default Navbar
