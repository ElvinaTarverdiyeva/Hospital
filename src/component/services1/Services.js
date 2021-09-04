import React, { Component } from 'react'
import Page11 from '../Page11'
import Page3 from '../page3/Page3'
import Page9 from '../page9/Page9'
class Services extends Component {
    render() {
        return (
            <div>
                <div className="services">
                    <div className="serviceshed">
                        <h2>Services</h2>
                    </div>
                    <Page3/>
                    <Page9/>
                    <Page11/>

                </div>
            </div>
        )
    }
}

export default Services
