import React, { Component } from 'react';
import './validation.css';

class validationComponent extends Component {
    render(props) {
        let el = '';

        if (this.props.textSize != 0 && this.props.textSize < 5) {
            el = <span className="small"> Text is small! </span>;
        } else if (this.props.textSize >= 5 && this.props.textSize < 12) {
            el = <span className="good">Text is in Good Size!</span>;
        } else if (this.props.textSize >= 12) {
            el = <span className="large">Text is Big!</span>;
        }

        return (
            <div className="validationComponent">
                {el}
            </div>
        );
    }
}

export default validationComponent;