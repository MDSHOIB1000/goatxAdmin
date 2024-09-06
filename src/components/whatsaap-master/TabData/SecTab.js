export const SecTab = () => {
    return (
        <div className="form-floating">
            <div style={{display:"flex" , justifyContent:"space-between"}}>
                <div className="form-check">
                    <input
                        className="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                    />
                    <label className="form-check-label" htmlFor="flexRadioDefault1">
                        Group
                    </label>
                </div>
                <div className="form-check">
                    <input
                        className="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault2"
                        defaultChecked=""
                    />
                    <label className="form-check-label" htmlFor="flexRadioDefault2">
                        Category
                    </label>
                </div>
                <div className="form-check">
                    <input
                        className="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault2"
                        defaultChecked=""
                    />
                    <label className="form-check-label" htmlFor="flexRadioDefault2">
                        Tag
                    </label>
                </div>
            </div>
            <div className="form-floating">
                <select className="form-select" aria-label="Default select example">
                    <option selected="">Open this select menu</option>
                    <option value={1}>One</option>
                    <option value={2}>Two</option>
                    <option value={3}>Three</option>
                </select>
                <div for="floatingSelect" className="form-div">Total Numbers: 70</div>

            </div>
        </div>
    )
}