import React, { Component } from 'react';
import ProgressBar from './ProgressBar';
import HeadText from './HeadText';
import Button from './Button';


class Page1 extends Component {
    render() {
        return (
            <div>
                <ProgressBar w1='50%' w2='0%' w3='0%' c1='white' c2='black' c3='black' c4='black' bg1='purple' bg2='white' bg3='white' bg4='white'/>
                    <div className='container text-center'>
                        <HeadText head="Welcome! First things first..." text="You can always change them later."/>    
                    </div>
                    <div className='mainbody'>
                        <label>Full Name</label><br/>
                        <input type='text' placeholder='Steve Jobs' /><br/>
                        <label>Display Name</label><br/>
                        <input type='text' placeholder='Steve' /><br/>
                    </div>
                    <div>
                    <Button text="Create Workspace" redirec="2"/>
                    </div>
                        
            </div>
        );
    }
}

export default Page1;