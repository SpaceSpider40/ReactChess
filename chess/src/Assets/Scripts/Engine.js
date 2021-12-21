import React from "react";
import Menu from "./Menu";
import Game from "./Game";

class Engine extends React.Component{
    constructor(props) {
        super(props);  

        this.state = {
            page: this.page = <Menu startGame = {this.startGame}/>
        }
    }

    componentDidMount(){
        
    }
    

    startGame(){
        this.setState({
            page: this.page = <Game />
        })
    }

    render(){
        return(
            <div>{this.page}</div>
        )
    }
}

export default Engine;