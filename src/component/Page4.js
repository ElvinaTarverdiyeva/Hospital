import React, { Component } from 'react'
import page4img1 from '../img/page4img1.png'
import page4img2 from '../img/page4img2.png'
import $ from 'jquery'
$(document).ready(function(){
    $(window).scroll(function() {
        var top = $(window).scrollTop();
        if (top >= 2250) {
            // $(".page4").css("border","1px solid red");
             $(".page4").addClass('page4animate');
        }
    });
});
export class Page4 extends Component {
    render() {
        return (
            <div>
                <div className="page4">
                    <div className="page4img">
                        <img src={page4img1} alt="" />
                    </div>
                    <div className="pagetext">
                        <h1>Welcome to Orthopedics & Chiropractor Clinic</h1>
                        <p>Brivona has grown to provide facility of the diagnosis manipulative treatment of misalignments of the joints. Leading the class service!</p>
                        <div className="textimgdiv">
                            <div className="doctorimg">
                                <img src={page4img2} alt="" />

                            </div>
                            <div className="doctortext">
                                <div className="row">
                                    <div className="col-sm-2">  <span>35</span></div>
                                    <div className="col-sm-10"> <h2>Years Of Experience in Medical Services</h2></div>
                                </div>


                                <p>Our global services help people to deal with the top class facilities for the problems related to the joints</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Page4
