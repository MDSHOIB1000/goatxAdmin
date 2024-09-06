function Comments() {
    return <div className="container mt-4">
        <div className="row">
            <div className="col-12">
                <div className="card p-3">
                    <div className="row">
                        <div className="col-12 mb-2">
                            <div className="form-floating">
                                <textarea
                                    className="form-control"
                                    placeholder="Leave a comment here"
                                    id="floatingTextarea"
                                    defaultValue={""}
                                />
                                <label htmlFor="floatingTextarea">Comments</label>
                                <button className="btn btn-primary mt-2">Post</button>
                            </div>

                        </div>
                        <div className="col-12">
                            No Comments
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
}
export default Comments;