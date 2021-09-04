import React, { Component } from 'react'
import Page7data from './Page7data'
import Page7Show from './Page7Show'
import ikon1 from "../../img/page7ikon1.png"
export class Page7 extends Component {
    render() {
        return (
            <div>
                <div className="page7">
                  <div className="page7img">
                     <div className="carts6">
                     {Page7data.page7data.map((item,index)=>{
                            return(
                                <Page7Show img={item.img}
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
            </div>
        )
    }
}

export default Page7
