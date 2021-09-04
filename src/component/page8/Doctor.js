import React, { Component } from 'react'
class Doctor extends Component {
    render() {
        return (

            <div className="teamdoctor">
                <div className="doctorimg">
                    <img src={this.props.img} alt="" />
                </div>
                <div className="doctorabout">
                    <p>{this.props.work}</p>
                    <h5>{this.props.name}</h5>
                </div>
            </div>

        )
    }
}

export default Doctor
