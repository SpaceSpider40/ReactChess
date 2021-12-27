import React from "react";
import style from "../Style/menu.module.css";
class GenerateBoard extends React.Component{
   constructor(props){
        super(props);
        this.board=this.board.bind(this);
    }
 board(){
        const board =<div id="board"><grid>
            <item id="8a" className={style.white}></item>
            <item id="8b" className={style.black}></item>
            <item id="8c" className={style.white}></item>
            <item id="8d" className={style.black}></item>
            <item id="8e" className={style.white}></item>
            <item id="8f" className={style.black}></item>
            <item id="8g" className={style.white}></item>
            <item id="8h" className={style.white}></item>
        </grid>
        <grid>
            <item id="7a" className={style.white}></item>
            <item id="7b" className={style.black}></item>
            <item id="7c" className={style.white}></item>
            <item id="7d" className={style.black}></item>
            <item id="7e" className={style.white}></item>
            <item id="7f" className={style.black}></item>
            <item id="7g" className={style.white}></item>
            <item id="7h" className={style.white}></item>
        </grid>

        <grid>
            <item id="6a" className={style.white}></item>
            <item id="6b" className={style.black}></item>
            <item id="6c" className={style.white}></item>
            <item id="6d" className={style.black}></item>
            <item id="6e" className={style.white}></item>
            <item id="6f" className={style.black}></item>
            <item id="6g" className={style.white}></item>
            <item id="6h" className={style.white}></item>
        </grid>
        <grid>
            <item id="5a" className={style.white}></item>
            <item id="5b" className={style.black}></item>
            <item id="5c" className={style.white}></item>
            <item id="5d" className={style.black}></item>
            <item id="5e" className={style.white}></item>
            <item id="5f" className={style.black}></item>
            <item id="5g" className={style.white}></item>
            <item id="5h" className={style.white}></item>
        </grid>
        <grid>
            <item id="4a" className={style.white}></item>
            <item id="4b" className={style.black}></item>
            <item id="4c" className={style.white}></item>
            <item id="4d" className={style.black}></item>
            <item id="4e" className={style.white}></item>
            <item id="4f" className={style.black}></item>
            <item id="4g" className={style.white}></item>
            <item id="4h" className={style.white}></item>
        </grid>
        <grid>
            <item id="3a" className={style.white}></item>
            <item id="3b" className={style.black}></item>
            <item id="3c" className={style.white}></item>
            <item id="3d" className={style.black}></item>
            <item id="3e" className={style.white}></item>
            <item id="3f" className={style.black}></item>
            <item id="3g" className={style.white}></item>
            <item id="3h" className={style.white}></item>
        </grid>
        <grid>
            <item id="2a" className={style.white}></item>
            <item id="2b" className={style.black}></item>
            <item id="2c" className={style.white}></item>
            <item id="2d" className={style.black}></item>
            <item id="2e" className={style.white}></item>
            <item id="2f" className={style.black}></item>
            <item id="2g" className={style.white}></item>
            <item id="2h" className={style.white}></item>
        </grid>
        <grid>
            <item id="1a" className={style.white}></item>
            <item id="1b" className={style.black}></item>
            <item id="1c" className={style.white}></item>
            <item id="1d" className={style.black}></item>
            <item id="1e" className={style.white}></item>
            <item id="1f" className={style.black}></item>
            <item id="1g" className={style.white}></item>
            <item id="1h" className={style.white}></item>
        </grid>
         </div>;
    }

render(){
    return(this.board());

}
}
export default GenerateBoard;