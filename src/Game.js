import React, { Component } from 'react';
import Borad from './Board';
import Square from'./Square';
import style from './style.css';

class Game extends Component {
    render(){
        return(
            <div className="game">
                <div className="game-borad">
                    <Borad/>
                </div>
            </div>
        )
    }
}

export default Game;