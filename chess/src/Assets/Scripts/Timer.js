import React from "react";
import style from "../Style/timer.module.css";
class Timer extends React.Component{
    constructor(props) {
        super(props);
       
        this.state = {
            player1: "",
            player2: "",
            player:"",
            seconds:  0,
            times: []
        };
        this.endturn= this.endturn.bind(this);

    }

    componentWillReceiveProps(props) {
        this.setState({

            player: props.player
          
        });
        this.timerID = setInterval(()=>this.tick(),1000)
    } 
    tick(){
        this.setState({
            seconds:this.state.seconds+1
        })
    }
    endturn(){
        clearInterval(this.timerID);  
        this.state.times.push(this.state.seconds);
              this.setState({
                  seconds: 0
              })
              this.timerID =setInterval(()=>this.tick(),1000);
              console.log(this.state.times);
            }
    //<button className={style.endturn} onClick={this.endturn}>Endturn</button>
    render(){
        return(<div className={style.timer}>
            <h2>Time of player {this.state.player} turn   {this.state.seconds}</h2>
            
                 <ul>Times of players turns
                 {this.state.times.slice(-5).map((time)=>(
                   <li key={time.id}>{time}</li>
                   
                ))}
                </ul>
           
        </div>);
    }
}

export default Timer;