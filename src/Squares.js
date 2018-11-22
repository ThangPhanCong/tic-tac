import React, { PureComponent } from "react";
import {Col} from "reactstrap";

class Squares extends PureComponent {
    render() {
        const { value, handleClick } = this.props;

        return(
            <Col sm={4} className={"squares-item"} onClick={() => handleClick()}>
                {value}
            </Col>
        )
    }
}

export default Squares;
