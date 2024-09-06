import React from 'react';
import './WhatsaapMaster.css';
import { Steps } from "antd";
import { FirstForm } from './FirstForm';
import { SecStep } from './SecStep';
import mobile from '../../assets/icons/mobile.png'
import Breadcrumbs from '../../common/breadcrumb/Breadcrumbs';
const items = [
    { title: "Step 1" },
    { title: "Step 1" },
];
function WhatsaapMaster() {
    const breadCrumbsTitle= {
        title_1:"WhatsApp",
        title_2:"Create Campaingn",
        
    }
    const [state, setState] = React.useState(1);
    return (
        <>
        <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle}/>
        <div className="container card">
            <div className='row'>
                <div className='col-8'>
                    <Steps current={state} labelPlacement="vertical" items={items} />
                    {state === 1 && <FirstForm setState={setState} state={state}/>}
                    {state === 2 && <SecStep setState={setState} state={state}/>}
                </div>
                <div className='col-4'>
                    <img src={mobile} alt="mobile" className='whatsaapMobile' />
                </div>
            </div>


        </div>
        </>
    );
}

export default WhatsaapMaster;
