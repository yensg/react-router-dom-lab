import React, { useState } from "react";
import { use } from "react";
import { useNavigate } from "react-router-dom";

const LetterForm = (props) => {
  const [recepient, setRecepient] = useState("");
  const [message, setMessage] = useState("");
  const [mailboxId, setMailboxId] = useState(1);
  const navigate = useNavigate();

  const updateAllState = (event) => {
    setRecepient(event.target.value);
    setMailboxId(event.target.id);
    setMessage(event.target.value);
  };

  const submitMessage = (event) => {
    const newLetter = { recepient, message, mailboxId };
    props.addLetter(newLetter);
    setRecepient("");
    setMailboxId(1);
    setMessage("");

    navigate(`/mailboxes/${mailboxId}`);
  };

  return (
    <div>
      {/* {props.mailBoxes[0]["_id"]} */}
      {/* {JSON.stringify(props[0])} */}
      <div>
        <label>Select a Mailbox</label>
        <select>
          {props.mailBoxes.map((mailBox, idx) => {
            return (
              <option
                onChange={updateAllState}
                // name={mailBox.boxOwner}
                id={mailBox._id}
              >{`Mailbox ${mailBox._id}`}</option>
            );
          })}
        </select>
      </div>
      <div>
        <label>Recepient</label>
        <input
          //   value={recepient}
          //   placeholder={recepient}
          onChange={updateAllState}
        ></input>
      </div>
      <div>
        <label>Message</label>
        <textarea onChange={updateAllState}></textarea>
      </div>
      <div>
        <button onClick={submitMessage}>Submit</button>
      </div>
      {message}
      {recepient}
      {mailboxId}
    </div>
  );
};

export default LetterForm;
