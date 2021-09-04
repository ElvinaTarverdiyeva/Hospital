import React, { Component } from 'react'
import slider1 from '../img/slider1.png'
import slider2 from '../img/slider2.png'
export class Slider extends Component {
    render() {
        return (<div>
        <div className="slider">
   <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval={10000}>
            <img src={slider1} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
            <div className="carouselabout">  
        <h1>Get Better Care For Your <span>Health</span></h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis quod in ullam eveniet tenetur facilis cupiditate labore rem quo dignissimos nisi cumque voluptate, omnis hic.</p>
        <button className="getBtn">Get A Quote <div><i class="fas fa-angle-right"></i></div></button>
        </div>
        </div>
          </div>
          <div className="carousel-item" data-bs-interval={2000}>
            <img src={slider2} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
            <div className="carouselabout">  
        <h1>Get Better Care For Your <span>Health</span></h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis quod in ullam eveniet tenetur facilis cupiditate labore rem quo dignissimos nisi cumque voluptate, omnis hic.</p>
        <button className="getBtn">Get A Quote <div><i class="fas fa-angle-right"></i></div></button>
        </div>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
       <div className="ikonprev">  <span className="carousel-control-prev-icon" aria-hidden="true" /> <div className="dropright"></div></div> 
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
        <div className="ikonprev">    <span className="carousel-control-next-icon" aria-hidden="true" /> <div className="dropright"></div></div> 
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      </div>
      
    </div>
        )
    }
}

export default Slider