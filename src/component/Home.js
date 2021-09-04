import React, { Component } from 'react'
import Page10 from './Page10'
import Page11 from './Page11'
import Page2 from './Page2'
import Page3 from './page3/Page3'
import Page4 from './Page4'
import Page6 from './page6/Page6'
import Page7 from './page7/Page7'
import Page8 from './page8/Page8'
import Page9 from './page9/Page9'
import Slider from './Slider'

class Home extends Component {
    render() {
        return (
            <div>
                <Slider/>
                <Page2/>
                <Page3/>
                <Page4/>
                <Page6/>
                <Page7/>
                <Page8/>
                <Page9/>
                <Page10/>
                <Page11/>
            </div>
        )
    }
}

export default Home
