import React from "react";
import style from "../Style/board.module.css";
import Bpawn from "../Sprites/pawns/Bpawn.png"

class GenerateBoard extends React.Component{
   constructor(props){  
        super(props);
        this.board=this.board.bind(this);
        this.state = {srcs: []};
    }
    board(){
        const srcs = this.state.srcs.slice();
        const board =<div className={style.board}><div className={style.row}>
            <button onClick={()=>this.props.handleOnClick(1)} className={style.white}><img src={srcs[0]} alt=""/></button>
            <button onClick={()=>this.props.handleOnClick(2)} className={style.black}><img src={srcs[1]} alt=""/></button>
            <button onClick={()=>this.props.handleOnClick(3)} className={style.white}><img src={srcs[2]} alt=""/></button>
            <button onClick={()=>this.props.handleOnClick(4)} className={style.black}><img src={srcs[3]} alt=""/></button>
            <button onClick={()=>this.props.handleOnClick(5)} className={style.white}><img src={srcs[4]} alt=""/></button>
            <button onClick={()=>this.props.handleOnClick(6)} className={style.black}><img src={srcs[5]} alt=""/></button>
            <button onClick={()=>this.props.handleOnClick(7)} className={style.white}><img src={srcs[6]} alt=""/></button>
            <button onClick={()=>this.props.handleOnClick(8)} className={style.black}><img src={srcs[7]} alt=""/></button>
        </div><div className={style.row}>
            <button onClick={()=>this.props.handleOnClick(9)} className={style.black}><img src={srcs[8]} alt=""/></button>
            <button onClick={()=>this.props.handleOnClick(10)} className={style.white}><img src={srcs[9]} alt=""/></button>
            <button onClick={()=>this.props.handleOnClick(11)} className={style.black}><img src={srcs[10]} alt=""/></button>
            <button onClick={()=>this.props.handleOnClick(12)} className={style.white}><img src={srcs[11]} alt=""/></button>
            <button onClick={()=>this.props.handleOnClick(13)} className={style.black}><img src={srcs[12]} alt=""/></button>
            <button onClick={()=>this.props.handleOnClick(14)} className={style.white}><img src={srcs[13]} alt=""/></button>
            <button onClick={()=>this.props.handleOnClick(15)} className={style.black}><img src={srcs[14]} alt=""/></button>
            <button onClick={()=>this.props.handleOnClick(16)} className={style.white}><img src={srcs[15]} alt=""/></button>
        </div><div className={style.row}>
            <button onClick={()=>this.props.handleOnClick(17)} className={style.white}></button>
            <button onClick={()=>this.props.handleOnClick(18)} className={style.black}></button>
            <button onClick={()=>this.props.handleOnClick(19)} className={style.white}></button>
            <button onClick={()=>this.props.handleOnClick(20)} className={style.black}></button>
            <button onClick={()=>this.props.handleOnClick(21)} className={style.white}></button>
            <button onClick={()=>this.props.handleOnClick(22)} className={style.black}></button>
            <button onClick={()=>this.props.handleOnClick(23)} className={style.white}></button>
            <button onClick={()=>this.props.handleOnClick(24)} className={style.black}></button>
        </div><div className={style.row}>
            <button onClick={()=>this.props.handleOnClick(25)} className={style.black}></button>
            <button onClick={()=>this.props.handleOnClick(26)} className={style.white}></button>
            <button onClick={()=>this.props.handleOnClick(27)} className={style.black}></button>
            <button onClick={()=>this.props.handleOnClick(28)} className={style.white}></button>
            <button onClick={()=>this.props.handleOnClick(29)} className={style.black}></button>
            <button onClick={()=>this.props.handleOnClick(30)} className={style.white}></button>
            <button onClick={()=>this.props.handleOnClick(31)} className={style.black}></button>
            <button onClick={()=>this.props.handleOnClick(32)} className={style.white}></button>
        </div><div className={style.row}>
            <button onClick={()=>this.props.handleOnClick(33)} className={style.white}></button>
            <button onClick={()=>this.props.handleOnClick(34)} className={style.black}></button>
            <button onClick={()=>this.props.handleOnClick(35)} className={style.white}></button>
            <button onClick={()=>this.props.handleOnClick(36)} className={style.black}></button>
            <button onClick={()=>this.props.handleOnClick(37)} className={style.white}></button>
            <button onClick={()=>this.props.handleOnClick(38)} className={style.black}></button>
            <button onClick={()=>this.props.handleOnClick(39)} className={style.white}></button>
            <button onClick={()=>this.props.handleOnClick(40)} className={style.black}></button>
        </div><div className={style.row}>
            <button onClick={()=>this.props.handleOnClick(41)} className={style.black}></button>
            <button onClick={()=>this.props.handleOnClick(42)} className={style.white}></button>
            <button onClick={()=>this.props.handleOnClick(43)} className={style.black}></button>
            <button onClick={()=>this.props.handleOnClick(44)} className={style.white}></button>
            <button onClick={()=>this.props.handleOnClick(45)} className={style.black}></button>
            <button onClick={()=>this.props.handleOnClick(46)} className={style.white}></button>
            <button onClick={()=>this.props.handleOnClick(47)} className={style.black}></button>
            <button onClick={()=>this.props.handleOnClick(48)} className={style.white}></button>
        </div><div className={style.row}>
            <button onClick={()=>this.props.handleOnClick(49)} className={style.white}></button>
            <button onClick={()=>this.props.handleOnClick(50)} className={style.black}></button>
            <button onClick={()=>this.props.handleOnClick(51)} className={style.white}></button>
            <button onClick={()=>this.props.handleOnClick(52)} className={style.black}></button>
            <button onClick={()=>this.props.handleOnClick(53)} className={style.white}></button>
            <button onClick={()=>this.props.handleOnClick(54)} className={style.black}></button>
            <button onClick={()=>this.props.handleOnClick(55)} className={style.white}></button>
            <button onClick={()=>this.props.handleOnClick(56)} className={style.black}></button>
        </div><div className={style.row}>
            <button onClick={()=>this.props.handleOnClick(57)} className={style.black}></button>
            <button onClick={()=>this.props.handleOnClick(58)} className={style.white}></button>
            <button onClick={()=>this.props.handleOnClick(59)} className={style.black}></button>
            <button onClick={()=>this.props.handleOnClick(60)} className={style.white}></button>
            <button onClick={()=>this.props.handleOnClick(61)} className={style.black}></button>
            <button onClick={()=>this.props.handleOnClick(62)} className={style.white}></button>
            <button onClick={()=>this.props.handleOnClick(63)} className={style.black}></button>
            <button onClick={()=>this.props.handleOnClick(64)} className={style.white}></button>
        </div>
         </div>;
         return(board);
    }

    UpdateGraphic(field, img){
        this.state.srcs[field]=img;
    }

    render(){
        return(this.board());
    }
}
export default GenerateBoard;