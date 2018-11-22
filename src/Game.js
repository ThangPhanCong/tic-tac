import React, {PureComponent} from "react";
import Board from "./Board";
import {Badge, Button} from "reactstrap";

class Game extends PureComponent {
    state = {
        history: [{squares: Array(9).fill(null)}],
        isNext: true,
        stepNumber: 0
    };

    _calculateWinner(squares) {
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

    _handleClick(i) {
        const {isNext} = this.state;
        const history = this.state.history.slice(0, this.state.stepNumber + 1)
        const current = history[history.length - 1];

        const squares = [...current.squares];

        if (this._calculateWinner(squares) || squares[i]) {
            return;
        }

        squares[i] = isNext ? 'X' : 'O';

        this.setState({
            history: history.concat([{squares}]),
            stepNumber: history.length,
            isNext: !isNext
        });
    }

    _jumpTo(stepNumber) {
        console.log("stepNumber:", stepNumber)
        this.setState({stepNumber, isNext: (stepNumber % 2) === 0})
    }

    _renderStatus() {
        const {isNext, history, stepNumber} = this.state;
        const current = history[stepNumber];
        const winner = this._calculateWinner(current.squares);
        let status;

        if (winner) {
            status = `Winner: ${winner}`;
        } else {
            status = `Next player: ${isNext ? 'X' : 'O'}`;
        }

        return (
            <Badge color="success badge-player">
                {status}
            </Badge>
        )
    }

    render() {
        const {history, stepNumber} = this.state;
        const current = history[stepNumber];
        const moves = history.map((step, move) => {
            const desc = move ? 'Go to move #' + move : 'Go to game start';

            return (
                <li key={move} className={'item-move'}>
                    <Button onClick={() => this._jumpTo(move)}>{desc}</Button>
                </li>
            )
        })
        return (
            <div>
                {this._renderStatus()}
                <Board squares={current.squares} handleClick={(i) => this._handleClick(i)} moves={moves}/>
            </div>
        )
    }
}

export default Game;
