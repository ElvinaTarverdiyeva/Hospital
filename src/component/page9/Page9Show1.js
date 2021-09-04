import React from 'react'
import $ from 'jquery';
$(document).ready(function(){
    $(window).scroll(function() {
        var top = $(window).scrollTop();
        if (top >= 5150) {
            // $(".plan1").css("border","1px solid red");
            $(".plan1img").addClass('imgani');
        }
    });
});
const Page9Show1 = (props) => {
    return (

        <div className="plan1">
            <h1>{props.hed1}</h1>
            <h2>${props.price}</h2>
           <div className="imgdiv"><img src={props.ikon} alt="" className="plan1img"/></div> 
            <p>{props.title}</p>
            <ul>
                <li>
                    <i class="fas fa-angle-right"></i>  <span>Update</span>
                </li>
                <li>
                    <i class="fas fa-angle-right"></i>  <span>File compressed</span>
                </li>
                <li>
                    <i class="fas fa-angle-right"></i>  <span>Commercial use</span>
                </li>
                <li>
                    <i class="fas fa-angle-right"></i>  <span>Support</span>
                </li>
            </ul>
            <button className="getBtn">Choose Plan <div><i class="fas fa-angle-right"></i></div></button>

        </div>
    )
}


export default Page9Show1
