import React from 'react'
import CustomInputField from '../../../../common/CustomInputField'

function MarkupDiscount({ handleChange }) {
    return (
        <>
            <div className="table-responsive active-projects style-1 mb-3">
                <div className="tbl-caption">
                    <h4 className="heading mb-0"><b>Markup And Discount
                    </b></h4>
                </div>
            </div>

            <div className='card'>
                <div className='row'>

                    <div className="col-xl-4 mb-3">
                        <select
                            className="form-select"
                            aria-label="displaymarkup"
                            name={`displaymarkup`}
                            value={""}
                            onChange={(e) => handleChange(e,)}
                        >
                            <option>Display Markup</option>
                            <option value="1">In Tax</option>
                            <option value="2">In Service Charge</option>
                        </select>
                    </div>

                    <div className="col-xl-4 mb-3">
                        <CustomInputField
                            type="text"
                            placeholder="Markup(per pax)"
                            name="markup"
                            value={""}
                            onChange={handleChange}
                            id="markup"
                        />
                    </div>
                    <div className="col-xl-4 mb-3">
                        <CustomInputField
                            type="text"
                            placeholder="Discount"
                            name="discount"
                            value={""}
                            onChange={handleChange}
                            id="discount"
                        />
                    </div>
                </div>
            </div>


        </>
    )
}

export default MarkupDiscount