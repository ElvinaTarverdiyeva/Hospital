import React from 'react'
import $ from 'jquery'
$(document).ready(function(){
    $(window).scroll(function() {
        var top = $(window).scrollTop();
        if (top >= 3250) {
             $(".page7cart1").addClass('page7cart1qani');
        }
    });
});
const Page7Show=(props)=> {
    return (
        <div className="page7cart1">
        <div className="ikon">
            <img src={props.img} alt="" />
        </div>
        <h3>{props.title}</h3>
        <p>{props.about}</p>

    </div>
        )
    }

export default Page7Show
