import React, { Component } from 'react';
import {Link } from 'react-router-dom';

class Button extends Component {
    render() {
        return (
            <div>
                <button type="button" className='button'><Link to={`/${this.props.redirec}`} style={{textDecoration:'none',color:'white'}} >{this.props.text}</Link></button>
            </div>
        );
    }
}

export default Button;