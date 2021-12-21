import React from "react";
import style from "../Style/menu.module.css";

class Menu extends React.Component{
    createPage(){
        const page = <div className={style.menuContainer}>
            <div className={style.label}>
                <div className={style.title}>Chess</div>
            </div>
            <div className={style.buttonsContainer}>
                <div className={style.inputPlayerNames}>
                    Player1 Name:<input className={style.inputPlayerName}/><br/>
                    Player2 Name:<input className={style.inputPlayerName}/>
                </div>
                <button className={style.btnStart} onClick={()=>this.props.startGame()}>Start Game</button>
            </div>
        </div>;

        return page;
    }

    render(){
        return(this.createPage());
    }
}

export default Menu;