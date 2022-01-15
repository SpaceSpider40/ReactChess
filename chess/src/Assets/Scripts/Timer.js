import React from "react";
import style from "../Style/timer.module.css";
class Timer extends React.Component{
    constructor(props) {
        super(props);
       
        this.state = {
            seconds:  0,
            times: []
        }
        this.endturn= this.endturn.bind(this);
        this.table =this.table.bind(this);
    }

    componentDidMount(){
        this.timerID = setInterval(()=>this.tick(),1000)
    }

    tick(){
        this.setState({
            seconds:this.state.seconds+1
        })
    }
    endturn(){
        clearInterval(this.timerID);
       let num = this.state.seconds;
       console.log(num);
       
        this.setState(previousState => ({
            times: [previousState.times,num ]
        }));
              
              this.setState({
                  seconds: 0
              })
              this.clock =setInterval(()=>this.tick(),1000);
             
            }
        table(){
            
            return(<ol>
            {this.times.map((time)=>(
                <li>{time}</li>
            ))}
        </ol>
            );
            
        }
    render(){
        return(<div>
            <h2>Czas tury</h2>
            <p> 
                {this.state.seconds}
            </p>
            <button className={style.endturn} onClick={this.endturn}>Endturn</button>
         <p>{this.times}</p>
        </div>);
    }
}

export default Timer;