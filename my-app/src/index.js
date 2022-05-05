import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Square extends React.Component {
    render() {
      return (
        <button className="square">
          {/* TODO */}
        </button>
      );
    }
  }
  
  class Board extends React.Component {
    renderSquare(i) {
      return <Square />;
    }
  
    render() {
      const status = 'Next player: X';
  
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
  
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(<Game />);
  
  class ShoppingList extends React.Component {
    render() {
      return (
        <div className="shopping-list">
          <h1>Lista de compras para {this.props.name}</h1>
          <ul>
            <li>Instagram</li>
            <li>WhatsApp</li>
            <li>Oculus</li>
          </ul>
        </div>
      );
    }
  }
  
  // Uso de ejemplo: <ShoppingList name="Mark" />

  return React.createElement('div', {className: 'shopping-list'},
  React.createElement('h1', /* ... h1 children ... */),
  React.createElement('ul', /* ... ul children ... */)
);

class Board extends React.Component {
  renderSquare(i) {
    return <Square value={i} />;
  }
}

class Square extends React.Component {
  render() {
    return (
      <button className="square">
        {this.props.value}
      </button>
    );
  }
}

class Square extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null,
    };
  }

  render() {
    return (
      <button className="square" onClick={() => console.log('click')}>
        {this.props.value}
      </button>
    );
  }
}

class Square extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null,
    };
  }

  render() {
    return (
      <button
        className="square"
        onClick={() => this.setState({value: 'X'})}
      >
        {this.state.value}
      </button>
    );
  }
}

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
    };
  }

  renderSquare(i) {
    return <Square value={i} />;
  }
  [
    'O', null, 'X',
    'X', 'X', 'O',
    'O', null, null,
  ]
  renderSquare(i) {
    return <Square value={i} />;
  }
  renderSquare(i) {
    return <Square value={this.state.squares[i]} />;
  }
  renderSquare(i) {
    return (
      <Square
        value={this.state.squares[i]}
        onClick={() => this.handleClick(i)}
      />
    );
  }
  class Square extends React.Component {
    render() {
      return (
        <button
          className="square"
          onClick={() => this.props.onClick()}
        >
          {this.props.value}
        </button>
      );
    }
  }
  class Board extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        squares: Array(9).fill(null),
      };
    }
  
    handleClick(i) {
      const squares = this.state.squares.slice();
      squares[i] = 'X';
      this.setState({squares: squares});
    }
  
    renderSquare(i) {
      return (
        <Square
          value={this.state.squares[i]}
          onClick={() => this.handleClick(i)}
        />
      );
    }
  
    render() {
      const status = 'Next player: X';
  
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
  var player = {score: 1, name: 'Jeff'};
player.score = 2;
// Ahora `player` es {score: 2, name: 'Jeff'}
var player = {score: 1, name: 'Jeff'};

var newPlayer = Object.assign({}, player, {score: 2});
// Ahora `player` no ha cambiado, pero `newPlayer` es {score: 2, name: 'Jeff'}

// O si usas la sintaxis propuesta de propagación de objeto, puedes escribir:
// var newPlayer = {...player, score: 2};
function Square(props) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}
class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      xIsNext: true,
    };
  }
  handleClick(i) {
    const squares = this.state.squares.slice();
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      squares: squares,
      xIsNext: !this.state.xIsNext,
    });
  }
  render() {
    const status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');

    return (
      // el resto no ha cambiado

      class Board extends React.Component {
        constructor(props) {
          super(props);
          this.state = {
            squares: Array(9).fill(null),
            xIsNext: true,
          };
        }
      
        handleClick(i) {
          const squares = this.state.squares.slice();
          squares[i] = this.state.xIsNext ? 'X' : 'O';
          this.setState({
            squares: squares,
            xIsNext: !this.state.xIsNext,
          });
        }
      
        renderSquare(i) {
          return (
            <Square
              value={this.state.squares[i]}
              onClick={() => this.handleClick(i)}
            />
          );
        }
      
        render() {
          const status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
      
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
      
      function calculateWinner(squares) {
        const lines = [
          [0, 1, 2],
          [3, 4, 5],
          [6, 7, 8],
          [0, 3, 6],
          [1, 4, 7],
          [2, 5, 8],
          [0, 4, 8],
          [2, 4, 6],
        ];
        for (let i = 0; i < lines.length; i++) {
          const [a, b, c] = lines[i];
          if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
          }
        }
        return null;
      }
      render() {
        const winner = calculateWinner(this.state.squares);
        let status;
        if (winner) {
          status = 'Winner: ' + winner;
        } else {
          status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
        }
    
        return (
          // el resto del código no ha cambiado
          handleClick(i) {
            const squares = this.state.squares.slice();
            if (calculateWinner(squares) || squares[i]) {
              return;
            }
            squares[i] = this.state.xIsNext ? 'X' : 'O';
            this.setState({
              squares: squares,
              xIsNext: !this.state.xIsNext,
            });
          }
          history = [
            // Antes del primer movimiento
            {
              squares: [
                null, null, null,
                null, null, null,
                null, null, null,
              ]
            },
            // Luego del primer movimiento
            {
              squares: [
                null, null, null,
                null, 'X', null,
                null, null, null,
              ]
            },
            // Luego del segundo movimiento
            {
              squares: [
                null, null, null,
                null, 'X', null,
                null, null, 'O',
              ]
            },
            // ...
          ]
          class Game extends React.Component {
            constructor(props) {
              super(props);
              this.state = {
                history: [{
                  squares: Array(9).fill(null),
                }],
                xIsNext: true,
              };
            }
          
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
          class Board extends React.Component {
            handleClick(i) {
              const squares = this.state.squares.slice();
              if (calculateWinner(squares) || squares[i]) {
                return;
              }
              squares[i] = this.state.xIsNext ? 'X' : 'O';
              this.setState({
                squares: squares,
                xIsNext: !this.state.xIsNext,
              });
            }
          
            renderSquare(i) {
              return (
                <Square
                  value={this.props.squares[i]}
                  onClick={() => this.props.onClick(i)}
                />
              );
            }
          
            render() {
              const winner = calculateWinner(this.state.squares);
              let status;
              if (winner) {
                status = 'Winner: ' + winner;
              } else {
                status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
              }
          
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
          render() {
            const history = this.state.history;
            const current = history[history.length - 1];
            const winner = calculateWinner(current.squares);
            let status;
            if (winner) {
              status = 'Winner: ' + winner;
            } else {
              status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
            }
        
            return (
              <div className="game">
                <div className="game-board">
                  <Board
                    squares={current.squares}
                    onClick={(i) => this.handleClick(i)}
                  />
                </div>
                <div className="game-info">
                  <div>{status}</div>
                  <ol>{/* TODO */}</ol>
                </div>
              </div>
            );
          }
          render() {
            return (
              <div>
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
          handleClick(i) {
            const history = this.state.history;
            const current = history[history.length - 1];
            const squares = current.squares.slice();
            if (calculateWinner(squares) || squares[i]) {
              return;
            }
            squares[i] = this.state.xIsNext ? 'X' : 'O';
            this.setState({
              history: history.concat([{
                squares: squares,
              }]),
              xIsNext: !this.state.xIsNext,
            });
          }
          const numbers = [1, 2, 3];
const doubled = numbers.map(x => x * 2); // [2, 4, 6]
render() {
  const history = this.state.history;
  const current = history[history.length - 1];
  const winner = calculateWinner(current.squares);

  const moves = history.map((step, move) => {
    const desc = move ?
      'Go to move #' + move :
      'Go to game start';
    return (
      <li>
        <button onClick={() => this.jumpTo(move)}>{desc}</button>
      </li>
    );
  });

  let status;
  if (winner) {
    status = 'Winner: ' + winner;
  } else {
    status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
  }

  return (
    <div className="game">
      <div className="game-board">
        <Board
          squares={current.squares}
          onClick={(i) => this.handleClick(i)}
        />
      </div>
      <div className="game-info">
        <div>{status}</div>
        <ol>{moves}</ol>
      </div>
    </div>
  );
}
<li key={user.id}>{user.name}: {user.taskCount} tasks left</li>
const moves = history.map((step, move) => {
  const desc = move ?
    'Go to move #' + move :
    'Go to game start';
  return (
    <li key={move}>
      <button onClick={() => this.jumpTo(move)}>{desc}</button>
    </li>
  );
});
class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [{
        squares: Array(9).fill(null),
      }],
      stepNumber: 0,
      xIsNext: true,
    };
  }
  handleClick(i) {
    // este método no ha cambiado
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) === 0,
    });
  }

  render() {
    //  este método no ha cambiado
  }
  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      history: history.concat([{
        squares: squares
      }]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext,
    });
  }
  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);

    // el resto no ha cambiado
