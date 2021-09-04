import React, { Component } from 'react'
import page5img from '../img/page5img.jpg'
import page5img2 from '../img/page5img2.jpg'

class Page5 extends Component {
    render() {
        return (
            <div>
                <div className="page5">
                    <div className="bgimg5">
                        <img src={page5img} alt="" />
                        <div class="play-btn">
                 <a href="https://www.youtube.com/watch?v=KAvQsRL-jeo"><i class="fas fa-play"></i></a> 
                </div>
                    </div>
                    <div className="page5about">
                        <div className="page5aboutimg">
                            <img src={page5img2} alt="" />
                        </div>
                        <div className="page5abouttext">
                            <h2>Historically, drugs were discovered through identifying the active ingredient from traditional remedies or by serendipitous discovery. Later chemical libraries of synthetic small molecules.</h2>
                            <p>Modern drug discovery involves the identification of screening hits, medicinal chemistry and optimization of those hits to increase the affinity, selectivity (to reduce the potential of side effects), efficacy/potency, metabolic stability (to increase the half-life), and oral bioavailability. Once a compound that fulfills all of these requirements.</p>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

export default Page5
