import s from "./PrimaryButton.module.sass";

function PrimaryButton({ iconClass, text, onClick, modal, target }) {
  return (
    <div
      className={s.primary_btn}
      onClick={() => onClick()}
      data-bs-toggle={modal && "modal"}
      data-bs-target={modal && `#${target}`}
    >
      {iconClass && (
        <>
          <i className={iconClass}></i>
          &nbsp;{" "}
        </>
      )}
      {text}
    </div>
  );
}

export default PrimaryButton;
