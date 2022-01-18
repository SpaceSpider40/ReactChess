import React from "react";
import style from "../Style/timer.module.css";
class Timer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            player1: "",
            player2: "",
            player: "",
            seconds: 0,
            times: [],
            num: 1,
            nums: []
        };
        this.endturn = this.endturn.bind(this);

    }

    componentWillReceiveProps(props) {

    }

    start(player) {
        this.timerID = setInterval(() => this.tick(), 1000)
        this.setState({

            player: player

        });
    }
    tick() {
        this.setState({
            seconds: this.state.seconds + 1
        })
    }
    addNum() {
        this.state.num++;
        this.state.nums[this.state.num]=this.state.num;
    }
    endturn() {
        clearInterval(this.timerID);
        this.state.times.push(this.state.seconds);
        this.setState({
            seconds: 0
        })
        this.timerID = setInterval(() => this.tick(), 1000);
        console.log(this.state.times);
    }
    //<button className={style.endturn} onClick={this.endturn}>Endturn</button>
    render() {;
        var lastNum = this.state.nums.slice(-1);
        return (<div className={style.timer}>
            <h2>Akutalny czas tury: {this.state.seconds}s</h2>
            <ul>Tabela czasów:{this.state.times.slice(-10).map((time) => (
                <li key={time.id}>Tura {--lastNum}: {time}s</li>

            ))}
            </ul>

        </div>);
    }
}

export default Timer;