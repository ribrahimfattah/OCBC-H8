import React, {Component} from 'react'
import Quote from './Quote'

class PersonInformation extends Component {
    constructor(){
        super()

        // useState
        /**
         * const [personData, setPersonData] = useState({
         *  
         * })
         */
        this.state = {
            name: "ibra",
            age: 17,
            quote: "inikata2"
        }
    }

    render() {
        return (
            <>
                <h1>Person Information</h1>
                <div>
                    <span>Name: {this.state.name}</span><br/>
                    <Quote quote={this.state.quote}/>
                </div>
            </>
        )
    }
}

export default PersonInformation