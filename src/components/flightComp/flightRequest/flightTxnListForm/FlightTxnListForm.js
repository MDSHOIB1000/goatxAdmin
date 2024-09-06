import { Formik } from 'formik';
import React from 'react'
import { Button } from 'react-bootstrap';
import CustomInputField from '../../../../common/CustomInputField';

function FlightTxnListForm({ initialValues, submitForm, params, cancelBtn, validate }) {
    return (
        <section className="ListDistributer">
            <div className='row m-4'>
                <div className='col-lg-12'>
                    <div className="card">
                        <div className="card-body p-0">
                            <div className="table-responsive active-projects style-1">
                                <div className="tbl-caption tbl-caption-2">
                                    <h4 className="heading mb-0">
                                        {params?.id ? "UPDATE" : "ADD"}
                                        Flight TXN LIST
                                    </h4>
                                </div>
                                <Formik
                                    initialValues={initialValues}
                                    validate={validate}
                                    onSubmit={submitForm}
                                    enableReinitialize
                                >
                                    {(formik) => {
                                        const {
                                            values,
                                            handleChange,
                                            handleSubmit,
                                            errors,
                                            touched,
                                            handleBlur,
                                            isValid,
                                            dirty,
                                        } = formik;
                                        return (
                                            <form className="tbl-captionn" onSubmit={handleSubmit}>
                                                <div className="row">
                                                    <div className="col-xl-4 mb-3">
                                                        <select className="form-select" aria-label="Default select example" onChange={handleChange} value={values?.isActive} name="isActive">
                                                            <option>Select Journey Type</option>
                                                            <option value={true}>One Way</option>
                                                            <option value={false}>Round Trip</option>
                                                        </select>
                                                    </div>
                                                    <div className="col-xl-4 mb-3">
                                                        <select className="form-select" aria-label="Default select example" onChange={handleChange} value={values?.isActive} name="isActive">
                                                            <option>Select Travel Sector</option>
                                                            <option value={true}>Domestic</option>
                                                            <option value={false}>International</option>
                                                        </select>
                                                    </div>
                                                    <div className="col-xl-4 mb-3">
                                                        <CustomInputField
                                                            type="text"
                                                            value={values?.origin}
                                                            // hasError={errors.origin && touched.origin}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            // errorMsg={errors.origin}
                                                            autoFocus={true}
                                                            id="origin"
                                                            name="origin"
                                                            placeholder="Origin"
                                                        />
                                                    </div>
                                                    <div className="col-xl-4 mb-3">
                                                        <CustomInputField
                                                            type="text"
                                                            value={values?.destination}
                                                            // hasError={errors.destination && touched.destination}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            // errorMsg={errors.destination}
                                                            autoFocus={true}
                                                            id="destination"
                                                            name="destination"
                                                            placeholder="Destination"
                                                        />
                                                    </div>
                                                    <div className="col-xl-4 mb-3">
                                                        <CustomInputField
                                                            type="date"
                                                            value={values?.origin}
                                                            // hasError={errors.origin && touched.origin}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            // errorMsg={errors.origin}
                                                            autoFocus={true}
                                                            id="origin"
                                                            name="origin"
                                                            placeholder="Origin"
                                                        />
                                                    </div>
                                                    <div className="col-xl-4 mb-3">
                                                        <CustomInputField
                                                            type="text"
                                                            value={values?.depaturedate}
                                                            // hasError={errors.depaturedate && touched.depaturedate}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            // errorMsg={errors.depaturedate}
                                                            autoFocus={true}
                                                            id="depaturedate"
                                                            name="depaturedate"
                                                            placeholder="Depature Date"
                                                        />
                                                    </div>
                                                    <div className="col-xl-4 mb-3">
                                                        <select className="form-select" aria-label="Default select example" onChange={handleChange} value={values?.isActive} name="isActive">
                                                            <option>Preferred Class</option>
                                                            <option value={true}>ANY</option>
                                                            <option value={false}>ECONOMY</option>
                                                            <option value={false}>Premium Economy</option>
                                                            <option value={false}>Premium Business</option>
                                                            <option value={false}>First</option>
                                                        </select>
                                                    </div>
                                                    <div className="col-xl-4 mb-3">
                                                        <CustomInputField
                                                            type="number"
                                                            value={values?.numberofadult}
                                                            // hasError={errors.numberofadult && touched.numberofadult}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            // errorMsg={errors.numberofadult}
                                                            autoFocus={true}
                                                            id="numberofadult"
                                                            name="numberofadult"
                                                            placeholder="No. Of Adult"
                                                        />
                                                    </div>
                                                    <div className="col-xl-4 mb-3">
                                                        <CustomInputField
                                                            type="number"
                                                            value={values?.numberofChild}
                                                            // hasError={errors.numberofChild && touched.numberofChild}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            // errorMsg={errors.numberofChild}
                                                            autoFocus={true}
                                                            id="numberofChild"
                                                            name="numberofChild"
                                                            placeholder="No. Of Child"
                                                        />
                                                    </div>
                                                    <div className="col-xl-4 mb-3">
                                                        <CustomInputField
                                                            type="number"
                                                            value={values?.numberofInfant}
                                                            // hasError={errors.numberofInfant && touched.numberofInfant}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            // errorMsg={errors.numberofInfant}
                                                            autoFocus={true}
                                                            id="numberofInfant"
                                                            name="numberofInfant"
                                                            placeholder="No. Of Infant"
                                                        />
                                                    </div>
                                                    <div className="col-xl-4 mb-3">
                                                        <CustomInputField
                                                            type="text"
                                                            value={values?.remark}
                                                            // hasError={errors.remark && touched.remark}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            // errorMsg={errors.remark}
                                                            autoFocus={true}
                                                            id="remark"
                                                            name="remark"
                                                            placeholder="Remark"
                                                        />
                                                    </div>
                                                    <h3 className=''>Onward Flight Details</h3>

                                                    <div className="col-xl-3 mb-3">
                                                        <CustomInputField
                                                            type="text"
                                                            value={values?.airlinepreference}
                                                            // hasError={errors.airlinepreference && touched.airlinepreference}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            // errorMsg={errors.airlinepreference}
                                                            autoFocus={true}
                                                            id="airlinepreference"
                                                            name="airlinepreference"
                                                            placeholder="Airline Preference "
                                                        />
                                                    </div>
                                                    <div className="col-xl-3 mb-3">
                                                        <CustomInputField
                                                            type="text"
                                                            value={values?.flightNumber}
                                                            // hasError={errors.flightNumber && touched.flightNumber}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            // errorMsg={errors.flightNumber}
                                                            autoFocus={true}
                                                            id="flightNumber"
                                                            name="flightNumber"
                                                            placeholder="Flight Number"
                                                        />
                                                    </div>
                                                    <div className="col-xl-3 mb-3">
                                                        <CustomInputField
                                                            type="text"
                                                            value={values?.departureTime}
                                                            // hasError={errors.departureTime && touched.departureTime}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            // errorMsg={errors.departureTime}
                                                            autoFocus={true}
                                                            id="departureTime"
                                                            name="departureTime"
                                                            placeholder="Departure Time"
                                                        />
                                                    </div>
                                                    <div className="col-xl-3 mb-3">
                                                        <CustomInputField
                                                            type="text"
                                                            value={values?.arrivalTime}
                                                            // hasError={errors.arrivalTime && touched.arrivalTime}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            // errorMsg={errors.arrivalTime}
                                                            autoFocus={true}
                                                            id="arrivalTime"
                                                            name="arrivalTime"
                                                            placeholder="Arrival Time"
                                                        />
                                                    </div>

                                                    <div className="col-xl-2 mb-3">
                                                        {/* <Link to='/floor-master' type='submit' className="btn btn-danger light ms-1">Cancel</Link> */}
                                                        <Button className="btn btn-danger light ms-1" onClick={() => cancelBtn()}>Cancel</Button>
                                                        <button
                                                            className="btn btn-primary me-1"
                                                            type="submit"
                                                            disabled={!isValid || !dirty}
                                                        >
                                                            {params?.id ? "Update" : "Submit"}
                                                        </button>
                                                    </div>
                                                </div>
                                            </form>
                                        );
                                    }}
                                </Formik>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FlightTxnListForm