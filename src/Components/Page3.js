import React, { Component } from 'react';
import ProgressBar from './ProgressBar';
import HeadText from './HeadText';
import Button from './Button';
import logo from './'

class Page3 extends Component {
    render() {
        return (
            <div>
                <ProgressBar w1='100%' w2='100%' w3='50%' c1='white' c2='white' c3='white' c4='black' bg1='purple' bg2='purple' bg3='purple' bg4='white'/>
                    <div className='container text-center'>
                        <div>
                        <HeadText head="How are you planning to use Eden?" text="We'll streamline your setup experience accordingly." />
                        </div>
                        <div className='d-flex hover'>
                            <div className='divi container'>
                                <img src='.logo.svg' alt='' style={{height:'10px',width:'10px'}}></img>
                                <h4>For myself</h4>
                                <span>Write better. Think</span><br/>
                                <span>more clearly. Stay</span><br/>
                                <span>organized.</span>
                            </div>
                            <div className='divi container'>
                            <img src='' alt=''></img>
                            <h3>With my team</h3>
                            <span>Wikis, docs, tasks &amp;</span><br/>
                            <span>projects, all in one</span><br/>
                            <span>place.</span>
                            </div>
                        </div>
                        <div>
                        <Button text="Create Workspace" redirec="4" />
                        </div>
                        
                    </div>
            </div>
        );
    }
}

export default Page3;