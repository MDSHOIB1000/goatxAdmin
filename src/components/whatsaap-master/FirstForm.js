import Tabs from "./Tab"
export const FirstForm = ({ setState, state }) => {
    return (
        <div className="">
            <form className="tbl-captionn reoveExtr" >
                <div className="row">

                    <div className="col-xl-6 mb-3">
                        <div className={`form-group `}>
                            <label htmlFor="question">From ID*</label>
                            <select className="form-select" aria-label="Default select example">
                                <option selected="">Open this select menu</option>
                                <option value={1}>One</option>
                                <option value={2}>Two</option>
                                <option value={3}>Three</option>
                            </select>

                        </div>
                    </div>
                    <div className="col-xl-6 mb-3">
                        <div className={`form-group `}>
                            <label htmlFor="question">Campaign Name*</label>
                            <input
                                type="text"
                                id="question"
                                name="question"
                                className="form-control"
                            />
                        </div>
                    </div>
                </div>

            </form>
            <Tabs />
            <button style={{margin:"14px 0",float:"right"}} onClick={()=>{setState(2)}} className="btn btn-primary">Next</button>
        </div>
    )
}