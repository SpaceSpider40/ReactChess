import React from "react";

class Timer extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            timer: this.timer = 0
        }
    }

    componentDidMount(){
        this.timerID = setInterval(()=>this.tick(),1000)
    }

    tick(){
        this.setState({
            timer: this.timer++
        })
    }

    render(){
        return(this.state.timer);
    }
}

export default Timer;