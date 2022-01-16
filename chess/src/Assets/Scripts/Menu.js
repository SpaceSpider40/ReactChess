import React from "react";
import style from "../Style/menu.module.css";

class Menu extends React.Component{
    constructor(props) {
        super(props);

        this.state ={
            player1: this.player1 = "",
            player2: this.player2 = "",
            pageStyle: style.menuContainer
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
          });
    }

    handleClick(){
        this.props.startGame(this.state.player1, this.state.player2);
        this.setState({
            pageStyle: style.menuContainerHidden
        })
    }

    createPage(){
        const page = <div className={this.state.pageStyle}>
            <div className={style.label}>
                <div className={style.title}>Chess</div>
            </div>
            <div className={style.buttonsContainer}>
                <div className={style.inputPlayerNames}>
                    Player1 Name: <input type="text" name="player1" value={this.state.player1} onChange={this.handleChange} className={style.inputPlayerName}/><br/>
                    Player2 Name: <input type="text" name="player2" value={this.state.player2} onChange={this.handleChange} className={style.inputPlayerName}/>
                </div>
                <button className={style.btnStart} onClick={()=>this.handleClick()}>Start Game</button>
            </div>
        </div>;

        return page;
    }

    render(){
        return(this.createPage());
    }
}

export default Menu;