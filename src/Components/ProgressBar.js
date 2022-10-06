import React, { Component } from 'react';

class ProgressBar extends Component {
    render() {
        return (
            <div className='container d-flex'>
                <div className='border2 rounded-circle text-center' 
                style={{color:`${this.props.c1}`,backgroundColor:`${this.props.bg1}`}}>1</div>
                <div className='progress2'>
                    <div className='progress1 d-flex' style={{width:`${this.props.w1}`}}>    
                    </div>
                </div>
                <div className='border2 rounded-circle text-center'
                style={{color:`${this.props.c2}`,backgroundColor:`${this.props.bg2}`}}>2</div>
                <div className='progress2'>
                    <div className='progress1 d-flex' style={{width:`${this.props.w2}`}}>    
                    </div>
                </div>
                <div className='border2 rounded-circle text-center'
                style={{color:`${this.props.c3}`,backgroundColor:`${this.props.bg3}`}}>3</div>
                <div className='progress2'>
                    <div className='progress1 d-flex' style={{width:`${this.props.w3}`}}>    
                    </div>
                </div>
                <div className='border2 rounded-circle text-center'
                style={{color:`${this.props.c4}`,backgroundColor:`${this.props.bg4}`}}>4</div>
            </div>
        );
    }
}

export default ProgressBar;