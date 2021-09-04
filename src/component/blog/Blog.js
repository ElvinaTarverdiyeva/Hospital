import React, { Component } from 'react'
import hed1img from '../../img/bloghed1.png'
import Page11 from '../Page11'

import Blogcatdshow from './Blogcatdshow'
import Blogdata from './Blogdata'
export class Blog extends Component {
    render() {
        return (
            <div>
                <div className="blog">
                    <div className="bloghed">
                        <h3>Hospital Blog</h3>
                        <img src={hed1img} alt="" />
                    </div>
                    <div className="blogcards">
                    {Blogdata.blogdata.map((item,index)=>{
                            return(
                                <Blogcatdshow img={item.img}
                                dname={item.dname}
                                commentscount={item.commentscount}
                                posthed={item.posthed}
                                about={item.about}
                                item={item}
                                key={index}
                                />
                            )
                        })}

                    </div>
                </div>
                <Page11/>
            </div>
        )
    }
}

export default Blog
