export const FirstTab = () => {
    return (
        <div className="form-floating">
            <textarea
                className="form-control"
                placeholder="Insert numbers here with Country Code (Mandatory Ex (+91))"
                id="floatingTextarea2"
                style={{ height: "20rem" }}
                defaultValue={""}
            />
            <label htmlFor="floatingTextarea2" style={{fontSize:"12px"}}>Insert numbers here with Country Code (Mandatory Ex (+91))</label>
        </div>

    );
};