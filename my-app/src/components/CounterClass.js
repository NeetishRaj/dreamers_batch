import { Component } from "react"

class CounterClass extends Component{
    constructor(props) {
        super(props);

        this.state = {
            timer: 0,
        }

        this.incrementTimer = this.incrementTimer.bind(this);

        console.log("Constructor")
    }

    setTimer(time) {
        this.setState({
            timer: time
        })
    }

    incrementTimer = () => {
        this.setTimer(this.state.timer + 1);
    }

    componentDidMount() {
        console.log("componentDidMount");
    }

    componentDidUpdate() {
        console.log("componentDidUpdate");
    }

    componentWillUnmount() {
        console.log("componentWillUnmount");
    }
    
    render() {
        console.log("render")

        return (
            <div className="counter-container">
                {this.state.timer} Seconds

                <div>
                    <button onClick={this.incrementTimer}>+</button>
                    
                    <button onClick={() => {this.setTimer(this.state.timer - 1);}}>-</button>
                </div>
            </div>
        )
    }
}

export default CounterClass;