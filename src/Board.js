import React, {Component} from 'react';
import './App.css';
import {Card, Row, Col, CardBody, Container, CardSubtitle, Button} from 'reactstrap';
import Squares from "./Squares";

class Board extends Component {
    _renderCardContainer() {
        return (
            <Container>
                <Row className={"col-sm-7 squares-container"}>
                    {this._renderSquares(0)}
                    {this._renderSquares(1)}
                    {this._renderSquares(2)}
                    {this._renderSquares(3)}
                    {this._renderSquares(4)}
                    {this._renderSquares(5)}
                    {this._renderSquares(6)}
                    {this._renderSquares(7)}
                    {this._renderSquares(8)}
                </Row>
            </Container>

        )
    }



    _renderSquares(i) {
        const { squares, handleClick } = this.props;

        return (
            <Squares value={squares[i]} handleClick={() => handleClick(i)}/>
        )
    }

    render() {
        const { moves } = this.props;

        return (
            <Row>
                <Col sm={6}>
                    {this._renderCardContainer()}
                </Col>

                <Col sm={3}>
                    <ul>
                        {moves}
                    </ul>
                </Col>

            </Row>
        );
    }
}

export default Board;
