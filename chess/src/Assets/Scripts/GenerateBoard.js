import React from "react";
import style from "../Style/board.module.css";

class GenerateBoard extends React.Component{
   constructor(props){  
        super(props);
        this.board=this.board.bind(this);
    }
    board(){
        const board =<div className={style.board}><div className={style.row}>
            <button className={style.white}></button>
            <button className={style.black}></button>
            <button className={style.white}></button>
            <button className={style.black}></button>
            <button className={style.white}></button>
            <button className={style.black}></button>
            <button className={style.white}></button>
            <button className={style.black}></button>
        </div><div className={style.row}>
            <button className={style.black}></button>
            <button className={style.white}></button>
            <button className={style.black}></button>
            <button className={style.white}></button>
            <button className={style.black}></button>
            <button className={style.white}></button>
            <button className={style.black}></button>
            <button className={style.white}></button>
        </div><div className={style.row}>
            <button className={style.white}></button>
            <button className={style.black}></button>
            <button className={style.white}></button>
            <button className={style.black}></button>
            <button className={style.white}></button>
            <button className={style.black}></button>
            <button className={style.white}></button>
            <button className={style.black}></button>
        </div><div className={style.row}>
            <button className={style.black}></button>
            <button className={style.white}></button>
            <button className={style.black}></button>
            <button className={style.white}></button>
            <button className={style.black}></button>
            <button className={style.white}></button>
            <button className={style.black}></button>
            <button className={style.white}></button>
        </div><div className={style.row}>
            <button className={style.white}></button>
            <button className={style.black}></button>
            <button className={style.white}></button>
            <button className={style.black}></button>
            <button className={style.white}></button>
            <button className={style.black}></button>
            <button className={style.white}></button>
            <button className={style.black}></button>
        </div><div className={style.row}>
            <button className={style.black}></button>
            <button className={style.white}></button>
            <button className={style.black}></button>
            <button className={style.white}></button>
            <button className={style.black}></button>
            <button className={style.white}></button>
            <button className={style.black}></button>
            <button className={style.white}></button>
        </div><div className={style.row}>
            <button className={style.white}></button>
            <button className={style.black}></button>
            <button className={style.white}></button>
            <button className={style.black}></button>
            <button className={style.white}></button>
            <button className={style.black}></button>
            <button className={style.white}></button>
            <button className={style.black}></button>
        </div><div className={style.row}>
            <button className={style.black}></button>
            <button className={style.white}></button>
            <button className={style.black}></button>
            <button className={style.white}></button>
            <button className={style.black}></button>
            <button className={style.white}></button>
            <button className={style.black}></button>
            <button className={style.white}></button>
        </div>
         </div>;
         return(board);
    }

render(){
    return(this.board());

}
}
export default GenerateBoard;