import React, { Component } from 'react'
import logo1 from '../img/page11logo1.png'
import logo2 from '../img/page11logo2.png'
import logo3 from '../img/page11logo3.png'
import logo4 from '../img/page11logo4.png'
export class Page11 extends Component {
    render() {
        return (
            <div>
                <div className="page11">
                    <div className="farms">
                        <div className="farm1">
                            <img src={logo1} alt="" />
                        </div>
                        <div className="farm1">
                        <img src={logo2} alt="" />
                        </div>
                        <div className="farm1">
                        <img src={logo3} alt="" />
                        </div>
                        <div className="farm1">
                        <img src={logo4} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Page11
