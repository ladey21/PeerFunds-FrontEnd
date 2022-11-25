import Modal from "components/modal/Modal";
import s from "./css/Button.module.sass";

function Button({
  btnType,
  type,
  text,
  onClick,
  iconClass,
  modal,
  modalTarget,
  modalLabel,
  modalHeaderTitle,
  modalHasHeaderCancelBtn,
  modalContext,
  modalFooterBtn,
}) {
  return (
    <>
      <button
        className={btnType === "primary" ? s.primary_btn : s.secondary_btn}
        type={type}
        onClick={() => onClick()}
        data-bs-toggle={modal && "modal"}
        data-bs-target={modal && `#${modalTarget}`}
      >
        {iconClass && (
          <>
            <i className={iconClass}></i>&nbsp;
          </>
        )}
        {text}
      </button>

      {modal && (
        <Modal
          label={modalLabel}
          headerTitle={modalHeaderTitle}
          target={modalTarget}
          hrClBtn={modalHasHeaderCancelBtn}
          modalContext={modalContext}
          modalFooterBtn={modalFooterBtn}
        />
      )}
    </>
  );
}

Button.defaultProps = {
  text: "Button",
  btnType: "primary",
  onClick: () => {
    console.log("You have clicked button");
  },
};

export default Button;
