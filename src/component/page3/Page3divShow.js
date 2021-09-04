import React from 'react'
import $ from 'jquery'
$(document).ready(function(){
    $(window).scroll(function() {
        var top = $(window).scrollTop();
        if (top >= 1350) {
            
            $(".carddiv1").addClass('carddiv1animat');
        }
    });
});

const Page3divShow=(props)=> {
    return (
        <div className="carddiv1">
        <i className={props.icon}></i>
            <h4>{props.title}</h4>
            <p>{props.about}</p>
            <button>VIEW MORE</button>

        </div>
    )
}

export default Page3divShow
