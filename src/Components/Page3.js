import React, { Component } from 'react';
import ProgressBar from './ProgressBar';
import HeadText from './HeadText';
import Button from './Button';



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
                                <img src='https://w7.pngwing.com/pngs/405/50/png-transparent-computer-icons-web-development-user-business-search-engine-optimization-myself-child-face-search-engine-optimization-thumbnail.png' alt='' style={{height:'45px',width:'45px',margin:'5px'}}></img>
                                <h4>For myself</h4>
                                <span>Write better. Think</span><br/>
                                <span>more clearly. Stay</span><br/>
                                <span>organized.</span>
                            </div>
                            <div className='divi container'>
                            <img src='https://w7.pngwing.com/pngs/413/180/png-transparent-computer-icons-team-team-miscellaneous-silhouette-black-thumbnail.png' alt='' style={{height:'45px',width:'45px',margin:'5px'}}></img>
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