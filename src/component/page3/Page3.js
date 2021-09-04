import React, { Component } from 'react'
import h5img from "../../img/h5imgp3.png"
import Page3divShow from './Page3divShow'
import Page3Data from './Page3Data'
class Page3 extends Component {
    render() {
        return (
            <div>
                <div className="page3">
                    <div className="page3hed">
                        <h5>OUR SERVICES</h5>
                        <img src={h5img} alt="" />
                        <h1>Our Special Services <span>For</span> You</h1>
                        <p>Fusce pharetra odio in urna laoreet laoreet. Aliquam erat volutpat. Phasellus nec ligula arcu. Aliquam eu urna pulvinar, iaculis ipsum in, porta massa.</p>
                    </div>
                    <div className="cards">
                        {Page3Data.page3data.map((item,index)=>{
                            return(
                                <Page3divShow icon={item.icon}
                                title={item.title}
                                about={item.about}
                                item={item}
                                key={index}
                                />
                            )
                        })}
                    </div>
                </div>
            </div>
        )
    }
}

export default Page3
