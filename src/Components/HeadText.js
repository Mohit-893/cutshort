import React, { Component } from 'react';

class HeadText extends Component {
    render() {
        return (
            <div className='container'>
                <h2>{this.props.head}</h2>
                <span>{this.props.text}</span>
            </div>
        );
    }
}

export default HeadText;