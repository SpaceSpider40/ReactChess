import React from "react";
import style from "../Style/board.module.css";

class GenerateBoard extends React.Component{
   constructor(props){  
        super(props);
        this.board=this.board.bind(this);
    }
    board(){
        const board =<div className={style.board}><grid>
            <item><button id="8c" className={style.white}></button></item>
            <item><button id="8b" className={style.black}></button></item>
            <item><button id="8c" className={style.white}></button></item>
            <item><button id="8d" className={style.black}></button></item>
            <item><button id="8e" className={style.white}></button></item>
            <item><button id="8f" className={style.black}></button></item>
            <item><button id="8g" className={style.white}></button></item>
            <item><button id="8h" className={style.black}></button></item>
        </grid> <grid>
            <item><button id="7c" className={style.black}></button></item>
            <item><button id="7b" className={style.white}></button></item>
            <item><button id="7c" className={style.black}></button></item>
            <item><button id="7d" className={style.white}></button></item>
            <item><button id="7e" className={style.black}></button></item>
            <item><button id="7f" className={style.white}></button></item>
            <item><button id="7g" className={style.black}></button></item>
            <item><button id="7h" className={style.white}></button></item>
        </grid><grid>
            <item><button id="6c" className={style.white}></button></item>
            <item><button id="6b" className={style.black}></button></item>
            <item><button id="6c" className={style.white}></button></item>
            <item><button id="6d" className={style.black}></button></item>
            <item><button id="6e" className={style.white}></button></item>
            <item><button id="6f" className={style.black}></button></item>
            <item><button id="6g" className={style.white}></button></item>
            <item><button id="6h" className={style.black}></button></item>
        </grid><grid>
            <item><button id="5c" className={style.black}></button></item>
            <item><button id="5b" className={style.white}></button></item>
            <item><button id="5c" className={style.black}></button></item>
            <item><button id="5d" className={style.white}></button></item>
            <item><button id="5e" className={style.black}></button></item>
            <item><button id="5f" className={style.white}></button></item>
            <item><button id="5g" className={style.black}></button></item>
            <item><button id="5h" className={style.white}></button></item>
        </grid> <grid>
            <item><button id="4c" className={style.white}></button></item>
            <item><button id="4b" className={style.black}></button></item>
            <item><button id="4c" className={style.white}></button></item>
            <item><button id="4d" className={style.black}></button></item>
            <item><button id="4e" className={style.white}></button></item>
            <item><button id="4f" className={style.black}></button></item>
            <item><button id="4g" className={style.white}></button></item>
            <item><button id="4h" className={style.black}></button></item>
        </grid><grid>
            <item><button id="3c" className={style.black}></button></item>
            <item><button id="3b" className={style.white}></button></item>
            <item><button id="3c" className={style.black}></button></item>
            <item><button id="3d" className={style.white}></button></item>
            <item><button id="3e" className={style.black}></button></item>
            <item><button id="3f" className={style.white}></button></item>
            <item><button id="3g" className={style.black}></button></item>
            <item><button id="3h" className={style.white}></button></item>
        </grid> <grid>
            <item><button id="2c" className={style.white}></button></item>
            <item><button id="2b" className={style.black}></button></item>
            <item><button id="2c" className={style.white}></button></item>
            <item><button id="2d" className={style.black}></button></item>
            <item><button id="2e" className={style.white}></button></item>
            <item><button id="2f" className={style.black}></button></item>
            <item><button id="2g" className={style.white}></button></item>
            <item><button id="2h" className={style.black}></button></item>
        </grid><grid>
            <item><button id="1c" className={style.black}></button></item>
            <item><button id="1b" className={style.white}></button></item>
            <item><button id="1c" className={style.black}></button></item>
            <item><button id="1d" className={style.white}></button></item>
            <item><button id="1e" className={style.black}></button></item>
            <item><button id="1f" className={style.white}></button></item>
            <item><button id="1g" className={style.black}></button></item>
            <item><button id="1h" className={style.white}></button></item>
        </grid>
         </div>;
         return(board);
    }

render(){
    return(this.board());

}
}
export default GenerateBoard;