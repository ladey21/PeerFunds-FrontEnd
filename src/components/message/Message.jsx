import './css/Message.sass'

function Message({ msg, status }) {
  return (
    <div id="Message_Main_Container">
      <div className={`message ${status}`}>{msg}</div>
    </div>
  );
}

Message.defaultProps = {
  msg: "Message Component",
  status: "error",
};

export default Message;
