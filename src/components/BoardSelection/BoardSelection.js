import React, { Component, PropTypes } from 'react';
import s from './BoardSelection.css';

class BoardSelection extends Component {
  static propTypes = {
    board: PropTypes.array,
  }

	render(){
    console.log(this.props.board)
		return(
      <div className={s.BoardComp}>
        <select>
          <option>Selection</option>
          {this.props.board.map(item => (
            <option key={item.board} value={item.board}>/{item.board}/ - {item.title}</option>
          ))}
        </select>
      </div>
		);
	}	
}


export default BoardSelection;