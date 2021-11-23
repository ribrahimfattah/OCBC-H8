import React, {Component} from "react";

export default class ClockClass extends Component {

    constructor() {
        super()
        this.state = {
            date: new Date()
        }
    }

    tick() {
        this.setState({
            date: new Date()
        })
    }
    
    componentDidMount(){
        this.timerID = setInterval(() => this.tick(), 1000)
    }

    componentWillUnmount(){
        clearInterval(this.timerID)
    }

    render(){
        return(
            <>
                <h1>{this.state.date.toLocaleTimeString()}</h1>
            </>
        )
    }

}