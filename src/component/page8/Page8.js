import React from "react";
import ReactDOM from "react-dom";
import Carousel from "react-elastic-carousel";
import Item from "./Item";
import doctor1 from "../../img/doctor1.jpg"
import doctor2 from "../../img/doctor2.jpg"
import doctor3 from "../../img/doctor3.jpg"
import doctor4 from "../../img/doctor4.jpg"
import doctor5 from "../../img/doctor5.png"
import doctor6 from "../../img/doctor6.png"
import doctor7 from "../../img/doctor8.png"
import h5img from "../../img/h5img.png"
import Doctor from "./Doctor";
const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

function Page8() {
  return (
    <div className="page8">
        <div className="page8hed">
        <h5>OUR TEAM</h5>
        <img src={h5img} alt="" />
        </div>
        <h1>Docter’s In The Medical Sciences</h1>
        <p id="phed8">Fusce pharetra odio in urna laoreet laoreet. Aliquam erat volutpat. Phasellus nec ligula arcu. Aliquam eu urna pulvinar, iaculis ipsum in, porta massa.</p>
      <div className="corusel">

        <Carousel breakPoints={breakPoints}>
          <Item>
              <Doctor img={doctor1} work="Cardiologist Specialist" name="Dr.Roy Coleman"/>
          </Item>
          <Item>
              <Doctor img={doctor2} work="Neurology Specialist" name="Dr. Andrew Bert"/>
          </Item>
          <Item>
              <Doctor img={doctor3} work="Senior Pathologist" name="Dr. Teresa Mayer"/>
          </Item>
          <Item>
              <Doctor img={doctor4} work="General Practitoner " name="Dr. Norman Colins"/>
          </Item>
          <Item>
              <Doctor img={doctor5} work="Senior Pathologist" name="Dr. Ostin Green"/>
          </Item>
          <Item>
              <Doctor img={doctor6} work="Neurology Specialist" name="Dr. Norman Colins"/>
          </Item>
          <Item>
              <Doctor img={doctor2} work="Cardiologist Specialist" name="Samanta Crane"/>
          </Item>
          <Item>
              <Doctor img={doctor7} work="Neurology Specialist" name="Dr. Teresa Mayer"/>
          </Item>
          <Item>
              <Doctor img={doctor5} work="Neurology Specialist" name="Dr. Teresa Mayer"/>
          </Item>
        </Carousel>
     
      </div>
     
    </div>
  );
}
export default Page8

