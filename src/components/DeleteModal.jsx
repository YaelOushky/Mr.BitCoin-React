export function DeleteModal({ onHandleDelete, contactId }) {
    return (
        <section>
            <div id="myModal" className="modal">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1>Delete this item?</h1>
                    </div>
                    <div className="modal-body">
                        <div className="btn-cancel" onClick={() => onHandleDelete(false)}>Cancel</div>
                        <div className="btn-delete" onClick={() => onHandleDelete(true)}>Delete</div>
                    </div>
                </div>
            </div>
        </section >
    )
}