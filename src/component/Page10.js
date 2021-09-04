import emailjs from 'emailjs-com'
import React, { Component } from 'react'
import h5img from "../img/h5imgp10.png"

function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_swde5s1', 'template_4cfbigg', e.target, 'user_VYEcO87wJF9w7Mwa7umhK')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  } 

export class Page10 extends Component {
    
    render() {
        return (
            <div>
                <div className="page10">
                    <div className="page10hed">
                        <h5>Contact</h5>
                        <img src={h5img} alt="" />
                    </div>
                    <h1>Get In Touch With Us</h1>
                    <div className="page10contact">
                        <form onSubmit={sendEmail}>
                            <div className="name">
                                <input type="text" placeholder="First Name" name="first_name"/>
                                <input type="text" placeholder="Last Name"/>
                            </div>
                            <input type="email" placeholder="Write here your email" name="email_name" />
                            <input type="text" placeholder="I would like to discuss" />
                            <textarea name="" id="" cols="76" rows="5" placeholder="Write comments" name="message"></textarea>
                            <button className="getBtn">Send Message <div><i class="fas fa-angle-right"></i></div></button>

                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Page10

