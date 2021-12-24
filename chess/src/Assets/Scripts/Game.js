import React from "react";

class Game extends React.Component{
<<<<<<< Updated upstream
    constructor(props){
        super(props);
    
    }
   
=======
    constructor(props) {
        super(props);   

        this.getPlayerNames = this.getPlayerNames.bind(this);
    }

    getPlayerNames(p1,p2){
        console.log(p1,p2);
    }

>>>>>>> Stashed changes
    render(){
        return('Game started')
    }   
}

export default Game;