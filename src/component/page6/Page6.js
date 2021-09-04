import React, { Component } from 'react'
import Page6about from './Page6about'
import Pahe6Show from './Pahe6Show'
import ikon1 from "../../img/page6ikon4.png"
class Page6 extends Component {
    render() {
        return (
            <div>
                <div className="page6">
                   <div className="cart4">
                   {Page6about.page6data.map((item,index)=>{
                            return(
                                <Pahe6Show img={item.img}
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

export default Page6
