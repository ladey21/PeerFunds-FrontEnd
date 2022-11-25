import s from "./css/Modal.module.sass";

function Modal({ headerTitle, hrClBtn, modalContext, target, modalFooterBtn }) {
  return (
    <>
      <div
        className="modal fade"
        id={target}
        aria-hidden="true"
        data-bs-backdrop="static"
      >
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">{headerTitle}</h5>
              {hrClBtn ? (
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              ) : (
                ""
              )}
            </div>
            <div className="modal-body">{modalContext}</div>
            <div className="modal-footer">
              {modalFooterBtn ? (
                modalFooterBtn
              ) : (
                <>
                  <button
                    type="button"
                    data-bs-dismiss="modal"
                    className={s.secondary_btn}
                  >
                    Close
                  </button>
                  <button type="button" className={s.primary_btn}>
                    Save changes
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Modal;
