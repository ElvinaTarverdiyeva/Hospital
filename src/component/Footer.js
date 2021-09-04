import React, { Component } from 'react'
import logo1 from '../img/logo1.png'
export class Footer extends Component {
    render() {
        return (
            <div>
                <footer>
                    <div className="pageabout">
                        <div className="logo">
                            <img className="navbar-brand" src={logo1} width='60' /> <h4>Hospital</h4>
                        </div>
                        <p>Sed ut perspiciatis unde om is nerror sit voluptatem accustium dolorem tium totam rem aperam eaque ipsa quae ab illose inntore veritatis</p>
                        <div className="contactIkon">
                            <div><i class="fab fa-facebook-f"></i></div><span></span>
                            <div><i class="fab fa-twitter"></i></div><span></span>
                            <div><i class="fab fa-linkedin-in"></i></div><span></span>
                            <div><i class="fab fa-instagram"></i></div>
                        </div>

                    </div>
                    <div className="pagecontact">
                        <div className="ikons3">
                            <div><i class="fas fa-phone-volume"></i></div> <span></span>
                            <div><i class="far fa-envelope"></i></div><span></span>
                            <div><i class="fas fa-map-marker-alt"></i></div>
                        </div>
                        <div className="ikonsabout">
                            <p><span>Tel:</span>+994 99 999 99 99</p>
                            <p><span>Gmail:</span>info@example.com</p>
                            <p><span>Location:</span>Melbourne VIC 3004, Australia</p>
                        </div>
                    </div>
                    <div className="footerend"></div>
                  
                </footer>
                <div className="end">
                    <p>© 2021 mecare All design Shtheme.</p>
                </div>
            </div>
        )
    }
}

export default Footer
