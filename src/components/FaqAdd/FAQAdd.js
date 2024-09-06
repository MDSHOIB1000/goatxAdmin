import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Breadcrumbs from '../../common/breadcrumb/Breadcrumbs';
import { collegeListss, getFaqById, postFaq, updateFaq } from '../../api/login/Login';
import { toast, ToastContainer } from 'react-toastify';
import Loadar from '../../common/loader/Loader';

const FAQAdd = () => {
    const breadCrumbsTitle = {
        id: "1",
        title_1: "Master",
        title_2: "FAQ",
        title_3: "FAQ Master",
    };

    const [formValues, setFormValues] = useState({
        question: '',  // Question field
        answer: '',  // Answer field
    });

    const [errors, setErrors] = useState({});
    const [loader, setLoader] = useState(false);

    const params = useParams();

    const getDataById = async (id) => {
        try {
            const data = await getFaqById(id);
            setFormValues(data.data);
        } catch (error) {
            console.error(error);
        }
    };
    const [college, setCollege] = useState([]);
    const GetCollege = async (id) => {
        try {
            const data = await collegeListss();
            setCollege(data);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        GetCollege()
        if (params?.id) {
            getDataById(params?.id);
        }
    }, [params?.id]);

    const validate = () => {
        let errors = {};

        if (!formValues.question) {
            errors.question = "Question is required";
        }
        if (!formValues.answer) {
            errors.answer = "Answer is required";
        }

        setErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const toastSuccessMessage = () => {
        toast.success(`${params?.id ? "Update" : "Add"} FAQ Successfully.`, {
            position: "top-center",
        });
    };

    const toastErrorMessage = () => {
        toast.error(`${params?.id ? "Update" : "Add"} FAQ Failed.`, {
            position: "top-center",
        });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validate()) return;

        setLoader(true);
        try {
            const res = await postFaq(formValues);
            if (res?.statusCode == 200) {
                toastSuccessMessage();
            } else {
                toastErrorMessage();
            }
        } catch (error) {
            toastErrorMessage();
        }
        setLoader(false);
    };

    const handleSubmitUpdate = async (e) => {
        e.preventDefault();

        if (!validate()) return;

        setLoader(true);
        try {
            const res = await updateFaq({ data: formValues, id: params?.id });
            if (res?.statusCode == 200) {
                toastSuccessMessage();
            } else {
                toastErrorMessage();
            }
        } catch (error) {
            toastErrorMessage();
        }
        setLoader(false);
    };

    return (
        <>
            <ToastContainer />
            {loader && <Loadar />}
            <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
            <div className="row m-4">
                <div className="col-xl-12">
                    <div className="card">
                        <div className="card-body p-0">
                            <div className="table-responsive active-projects style-1">
                                <div className="tbl-caption tbl-caption-2">
                                    <h4 className="heading mb-0">{params?.id ? "Edit FAQ" : "Add FAQ"}</h4>
                                </div>
                                <form className="tbl-captionn" onSubmit={params?.id ? handleSubmitUpdate : handleSubmit}>
                                    <div className="row">
                                        <div className="col-xl-6 mb-3">
                                            <div className={`form-group ${errors.question ? 'has-error' : ''}`}>
                                                <label htmlFor="question">College</label>
                                                <select  onChange={handleChange} name='college_id' value={formValues?.college_id} className="form-select" aria-label="Default select example">
                                                    <option selected="">Open this select menu</option>
                                                  {college?.data?.map((item, index) => (
                                                        <option value={item._id} key={index}>{item.name}</option>
                                                    ))}
                                                </select>

                                            </div>
                                        </div>
                                        <div className="col-xl-6 mb-3">
                                            <div className={`form-group ${errors.question ? 'has-error' : ''}`}>
                                                <label htmlFor="question">Question</label>
                                                <textarea
                                                    id="question"
                                                    name="question"
                                                    value={formValues.question}
                                                    onChange={handleChange}
                                                    className="form-control"
                                                    placeholder="Enter Question"
                                                />
                                                {errors.question && (
                                                    <div className="error">{errors.question}</div>
                                                )}
                                            </div>
                                        </div>
                                        <div className="col-xl-6 mb-3">
                                            <div className={`form-group ${errors.answer ? 'has-error' : ''}`}>
                                                <label htmlFor="answer">Answer</label>
                                                <textarea
                                                    id="answer"
                                                    name="answer"
                                                    value={formValues.answer}
                                                    onChange={handleChange}
                                                    className="form-control"
                                                    placeholder="Enter Answer"
                                                />
                                                {errors.answer && (
                                                    <div className="error">{errors.answer}</div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <button className="btn btn-primary me-1" type="submit">Submit</button>
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

export default FAQAdd;
