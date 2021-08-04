import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

/*
  the Square components receive values from the Board component and inform the Board component 
  when they're clicked, in other words, the Square components are now controlled components. The Board
  has full control over them
**/
function Square (props) {
  return (
    <button 
      className="square" 
      onClick={props.onClick}
    >
      {props.value}
    </button>
  );
}

/*
  Board class that initializes all the squares
**/
class Board extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      squares: Array(9).fill(null),
      xIsNext: true,
    };
  }

  /*
    onClick function when square component is clicked.
    get the squares state from Boad.....
  **/
  handleClick(i){
    const squares = this.state.squares.slice();
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      squares: squares,
      xIsNext: !this.state.xIsNext,
    });
    

  }

  /* 
    create a square with an initial 'value' prop and an onClick handler function prop. 
  **/
  renderSquare(i) {
    return (
      <Square 
        value={this.state.squares[i]}
        onClick = {()=>this.handleClick(i)} 
      />
    );
  }

  render() {
    const status = this.state.xIsNext ?'Next player: X': 'Next player: O';

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);

