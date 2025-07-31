import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";

const MailboxForm = (props) => {
  // taking kvp in the state takes longer bceause spread syntax iterates the kvp
  //   const [newBoxOwner, setNewBoxOwner] = useState({ boxOwner: "" });
  //   const [newBoxSize, setNewBoxSize] = useState({ boxSize: "" });

  const [newBoxOwner, setNewBoxOwner] = useState("");
  const [newBoxSize, setNewBoxSize] = useState("Small");
  const navigate = useNavigate(); // how this works?

  const updateNewBoxOwner = (event) => {
    setNewBoxOwner(event.target.value);
  };

  const updateNewBoxSize = (event) => {
    setNewBoxSize(event.target.value);
  };

  const submitNewMailBox = (event) => {
    // why when i click submit button will disappear? form will refresh the page by default
    event.preventDefault();

    // Combine all new details into one kvp before pass to parent
    //     const newMailBox = {
    //       ...newBoxOwner,
    //       ...newBoxSize,
    //       ["_id"]: props.currMailBoxesLength + 1,
    //     };
    //     props.addBox(newMailBox);
    //     //controlled form
    //     setNewBoxOwner({ boxOwner: "" });
    //     // no need to clear setNewBoxSize
    //   };

    const newMailBox = {
      ["boxOwner"]: newBoxOwner,
      ["boxSize"]: newBoxSize,
      ["_id"]: props.currMailBoxesLength + 1,
    };
    props.addBox(newMailBox);
    //controlled form
    setNewBoxOwner("");
    // no need to clear setNewBoxSize
    navigate("/mailboxes");
  };

  return (
    <div>
      <form>
        <label htmlFor="boxOwner">Enter a Boxholder</label>
        <input
          type="text"
          placeholder="Boxholder name"
          id="boxOwner"
          onChange={updateNewBoxOwner}
          value={newBoxOwner}
        ></input>
        <label>Select a Box Size</label>
        <select id="boxSize" value={newBoxSize} onChange={updateNewBoxSize}>
          <option value="Small">Small</option>
          <option value="Medium">Medium</option>
          <option value="Large">Large</option>
        </select>
        <button onClick={submitNewMailBox}>
          {/* <Navigate replace to="/mailboxes" /> */}
          Submit
        </button>
      </form>
    </div>
  );
};

export default MailboxForm;
