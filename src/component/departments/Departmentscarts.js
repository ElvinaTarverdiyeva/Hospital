import React from 'react'
import $ from 'jquery'
$(document).ready(function(){
    $(window).scroll(function() {
        var top = $(window).scrollTop();
        if (top >= 200) {
             $(".carts1").addClass('carts1ani');
        }
    });
});
const Departmentscarts=(props)=> {
    return (
            <div className="carts1">
            <div className="row">
                <div className="col-md-4 col-sm-12 carts1img">
                    <div>
                        <img src={props.img} alt="" />
                    </div>
                </div>
                <div className="col-md-7 col-sm-12 carts1text">
                   <h2>{props.title}</h2>
                   <p>{props.about}</p>
                </div>
            </div>
        </div>
        )
    }


export default Departmentscarts
