import React from "react";
import Menu from "./Menu";
import Game from "./Game";

class Engine extends React.Component{
    constructor(props) {
        super(props);  

        this.state = {
            player1: this.player1 = "player1",
            player2: this.player2 = "player2"
        }
    }

    componentDidMount(){
        
    }
    

    startGame(p1,p2){
        console.log(p1,p2);
    }

    render(){
        return(
            <Menu startGame={this.startGame}/>
        )
    }
}

export default Engine;