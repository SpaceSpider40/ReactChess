import React from "react";
import Menu from "./Menu";
import Game from "./Game";

class Engine extends React.Component{
    constructor(props) {
        super(props);  

        this.state = {
            player1: "",
            player2: "",
        }

        this.startGame = this.startGame.bind(this);
    }

    componentDidMount(){
        
    }
    
    startGame(p1,p2){
        this.setState({
            player1: p1,
            player2: p2
        })
    }

    render(){
        return(
            <div>
            <Menu startGame={this.startGame}/>
            <Game player1={this.state.player1} player2={this.state.player2}/>
            </div>
        )
    }
}

export default Engine;