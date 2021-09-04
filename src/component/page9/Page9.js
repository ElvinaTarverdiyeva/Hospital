import React, { Component } from 'react'
import h5img from "../../img/h5img.png"
import Page9data from './Page9data'
import Page9show from './Page9Show1'
import Page9Show1 from './Page9Show1'


class Page9 extends Component {
    render() {
        return (
            <div>
                <div className="page9">
                    <div className="page9hed">
                        <h5>OUR PRICING</h5>
                        <img src={h5img} alt="" />
                    </div>
                    <div className="page9about">
                        <h1>Afforable Pricing Packages</h1>
                        <p>Fusce pharetra odio in urna laoreet laoreet. Aliquam erat volutpat. Phasellus nec ligula arcu. Aliquam eu urna pulvinar, iaculis ipsum in, porta massa.</p>
                    </div>
                    <div className="plans">
                    {Page9data.page9data.map((item,index)=>{
                            return(
                                <Page9Show1 hed1={item.hed1}
                                price={item.price}
                                ikon={item.ikon}
                                title={item.title}
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

export default Page9
