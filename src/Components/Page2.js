import React, { Component } from 'react';
import ProgressBar from './ProgressBar';
import HeadText from './HeadText';
import Button from './Button';

class Page2 extends Component {
    render() {
        return (
            <div>
                <ProgressBar w1='100%' w2='50%' w3='0%' c1='white' c2='white' c3='black' c4='black' bg1='purple' bg2='purple' bg3='white' bg4='white'/>
                    <div className='container text-center'>
                        <HeadText head="Let's set up a home for all your work" text="You can always create  another workspace later." />
                    </div>
                    <div className='mainbody'>
                        <label>Workspace Name</label><br/>
                        <input type='text' placeholder='Eden' /><br/>
                        <label>Display URL</label><br/>
                        {/* <input type='text' placeholder='Steve' /><br/> */}
                        {/* <table style={{borderCollapse:'collapse'}}>
                            <tr><td className='input1'><input type='text' placeholder='www.eden.com/' style={{backgroundColor:'#D3D3D3',width:'220px'}} /></td>
                            <td style={{width:'400px'}}><input type='text' placeholder='Example'/></td></tr>
                        </table> */}
                        <div className='progress3 d-flex'>
                            <div>
                                <input type='text' placeholder='www.eden.com/' className='progress4'/>
                            </div>
                            <input type='text' placeholder='Example'/>
                        </div>
                    </div>
                    <div>
                        <Button text="Create Workspace" redirec="3"/>
                    </div>
            </div>
        );
    }
}

export default Page2;