import React, { Component } from 'react';
import ProgressBar from './ProgressBar';
import Button from './Button';

class Page4 extends Component {
    render() {
        return (
            <div>
                <ProgressBar w1='100%' w2='100%' w3='100%' c1='white' c2='white' c3='white' c4='white' bg1='purple' bg2='purple' bg3='purple' bg4='purple'/>
                    <div className='container text-center'>
                        <div className='container'>
                            <div className='circle rounded-circle text-center'><span style={{fontSize:'40px'}}>&#x2713;</span></div>
                            <div style={{marginBottom:'25px'}}>
                                <h1>Congratulations, Eren!</h1>
                                <span>You have completed onboarding, you can start using the Eden!</span>
                            </div>                           
                        </div>
                        <Button text="Launch Eden" redirec="4"/>
                    </div>
            </div>
        );
    }
}

export default Page4;