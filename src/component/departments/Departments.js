import React, { Component } from 'react'
import page2img from "../../img/departmentspage2img.png"
import Departmentscarts from './Departmentscarts'
import Page7data from '../page7/Page7data'
import Page11 from '../Page11'
class Departments extends Component {
    render() {
        return (
            <div>
                <div className="departments">
                    <div className="departmentshed">
                        <h1>Departments</h1>
                    </div>
                    <div className="depatrmentspage2">
                        <div className="carts5">
                        {Page7data.page7data.map((item,index)=>{
                            return(
                                <Departmentscarts img={item.img}
                                title={item.title}
                                about={item.about}
                                item={item}
                                key={index}
                                />
                            )
                        })}  </div>
                        <div className="page2img">
                            <img src={page2img} alt="" />
                        </div>
                    </div>
                    <br /> <br /> <br />
                    <Page11/>

                </div>
            </div>
        )
    }
}

export default Departments
