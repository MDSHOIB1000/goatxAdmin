import React, { useState } from 'react';
import CustomInputField from '../../common/CustomInputField';

function PackagesSearch({ initialValues, submitForm, resetData }) {
    const [values, setValues] = useState(initialValues);

    const handleChange = (e) => {
        const { id, value } = e.target;
        setValues({
            ...values,
            [id]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        submitForm(values);
    };

    const handleReset = () => {
        setValues(initialValues);
        resetData();
    };

    return (
        <>
            <div className="row m-4">
                <div className="col-xl-12">
                    <div className="card">
                        <div className="card-body p-0">
                            <div className="table-responsive active-projects style-1">
                                <div className="tbl-caption tbl-caption-2">
                                    <h4 className="heading mb-0"><b>Package Search</b></h4>
                                </div>
                                <form className="tbl-captionn" onSubmit={handleSubmit}>
                                    <div className="row">
                                        <div className="col-xl-4 mb-3">
                                            <CustomInputField
                                                type="text"
                                                placeholder="Package Name"
                                                value={values.subject}
                                                onChange={handleChange}
                                                id="subject"
                                            />
                                        </div>

                                        <div className="col-lg-12 col-md-12">
                                            <div className='d-flex justify-content-start'>
                                                <button className="btn btn-primary pd-x-20 color2" type="submit">
                                                    <i className="fas fa-search"></i> Search
                                                </button>
                                                <button className="btn btn-primary pd-x-20 color2" type="button" onClick={handleReset}>
                                                    <i className="fas fa-refresh"></i> Reset
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default PackagesSearch;
