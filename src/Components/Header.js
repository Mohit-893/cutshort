import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div className='container d-flex text-center'>   
                <img src='https://cdn.pixabay.com/photo/2017/03/16/21/18/logo-2150297_960_720.png' alt=''
                 style={{height:75,width:75,paddingBottom:'18px'}}/>
                 <h1>Eden</h1>    
            </div>
        );
    }
}

export default Header;