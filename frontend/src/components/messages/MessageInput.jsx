import { useState } from "react";
import { BsSend } from "react-icons/bs";
import useSendMessage from "../../hooks/useSendMessage";
import "./Messages.css";
const MessageInput = () => {
  const [message, setMessage] = useState("");
  const { loading, sendMessage } = useSendMessage();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message) return;
    await sendMessage(message);
    setMessage("");
  };

  return (
    <form className="message-input-form" onSubmit={handleSubmit}>
      <div className="message-input-wrapper">
        <input
          type="text"
          className="message-input-field"
          placeholder="Send a message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button type="submit" className="message-send-button">
          {loading ? <div className="loading-spinner"></div> : <BsSend />}
        </button>
      </div>
    </form>
  );
};
export default MessageInput;
