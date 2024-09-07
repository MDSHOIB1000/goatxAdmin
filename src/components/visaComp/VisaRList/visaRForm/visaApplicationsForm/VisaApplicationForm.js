import JoditEditor from 'jodit-react';
import React, { useState } from 'react'

function VisaApplicationForm({ handleChange }) {
    const [content, setContent] = useState('');


    return (
        <>

            <div className="table-responsive active-projects bg-primary text-uppercase mb-3">
                <div className="tbl-caption">
                    <h4 className="heading mb-0"><b>Visa Application Form
                    </b></h4>
                </div>
            </div>
            <div className="table-responsive active-projects style-1 mb-3">
                <div className="tbl-caption">
                    <h4 className="heading mb-0"><b>Visa Documents
                    </b></h4>
                </div>
            </div>

            <div className='card'>
                <div className='row'>
                    <div className="col-xl-12 mb-3">
                        <JoditEditor
                            value={content}
                            onChange={handleChange}
                            tabIndex={1} 
                            config={{
                                readonly: false, 
                                toolbarSticky: false,
                                toolbarAdaptive: false,
                            }}
                        />
                    </div>
                </div>
            </div>
            <div className="table-responsive active-projects style-1 mb-3">
                <div className="tbl-caption">
                    <h4 className="heading mb-0"><b>Visa Notes
                    </b></h4>
                </div>
            </div>

            <div className='card'>
                <div className='row'>
                    <div className="col-xl-12 mb-3">
                        <JoditEditor
                            value={content}
                            onChange={handleChange}
                            tabIndex={1} 
                            config={{
                                readonly: false, 
                                toolbarSticky: false,
                                toolbarAdaptive: false,
                            }}
                        />
                    </div>
                </div>
            </div>


        </>
    )
}

export default VisaApplicationForm
