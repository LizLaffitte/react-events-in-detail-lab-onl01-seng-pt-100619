// Code CoordinatesButton Component Here
import React, {Component} from 'react'

class CoordinatesButton extends Component{
    handleCoords = (e) => {
        this.props.onReceiveCoordinates([e.clientX,e.clientY])
    }
    render(){
        return(<button onClick={this.handleCoords}>Coords</button>)
    }
}

export default CoordinatesButton