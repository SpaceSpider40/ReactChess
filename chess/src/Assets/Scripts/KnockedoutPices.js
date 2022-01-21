import React from "react";
import Field from "./Field";
import style from "../Style/knocked.module.css"

export default class KnockedoutBlock extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            redKnockedoutPieces: [],
            blueKnockedoutPieces: []
        }
    }
    createField(field, spot, colour){
        //console.log("styl fielda: ", field.style)

        return <Field key={spot} keyVal={spot} piece={field} style={field.style}/>
    }
    
    knockedR(tab){
        this.state.redKnockedoutPieces.push(tab);
        //console.log("Zbite czerwone: ", tab);
        
    }
    knockedB(tab){
        this.state.blueKnockedoutPieces.push(tab);
        //console.log("Zbite niebieskie: ", tab);
    }
    
    render(){
        //console.log("Zbite czerowne Local: ", this.state.redKnockedoutPieces);
        //console.log("Zbite niebieskie Local: ", this.state.blueKnockedoutPieces);
        return( 
            <div className={style.container}>
                <h1>Zbite</h1>
                <div className={style.red}>{this.state.redKnockedoutPieces.map((rs,index)=>this.createField(rs,index))}</div>
                <div className={style.blue}>{this.state.blueKnockedoutPieces.map((bs,index)=>this.createField(bs,index))}</div>
            </div>
        )
    }

                
}