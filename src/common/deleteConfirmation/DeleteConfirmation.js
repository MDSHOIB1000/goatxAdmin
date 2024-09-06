function DeleteConfirmation({ message, onDelete }) {
    return (
        <>
            <div className="toast">
                <p>{message}</p>
                <div className="toast-actions">
                    <button onClick={onDelete}>Delete</button>
                    <button onClick={() => console.log('Cancelled')}>Cancel</button>
                </div>
            </div>
        </>
    )
}
export default DeleteConfirmation