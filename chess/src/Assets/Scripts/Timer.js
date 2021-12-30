import React from "react";
import style from "../Style/timer.module.css";
class Timer extends React.Component{
    constructor(props) {
        super(props);
       
        this.state = {
            timer:  0,
            times: [10]
        }
        this.endturn= this.endturn.bind(this);
    }

    componentDidMount(){
        this.timerID = setInterval(()=>this.tick(),1000)
    }

    tick(){
        this.setState({
            timer:this.state.timer+1
        })
    }
    endturn(){
        clearInterval(this.timerID);
       this.setState({
           timer:0
       });
        this.newtimer =setInterval(()=>this.tick(),1000)
    
    }

    render(){
        return(<div>
            {this.times}
            <p>{this.state.timer}</p>
            <button className={style.endturn} onClick={this.endturn}>Endturn</button>
        </div>);
    }
}

export default Timer;