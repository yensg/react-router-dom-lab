import React, { useState } from "react";
import { Link } from "react-router-dom";

const MailboxForm = (props) => {
  //   const [newMailBox, setNewMailBox] = useState({
  //     boxOwner: "",
  //     boxSize: "",
  //     _id: 0,
  //   });

  const [newBoxOwner, setNewBoxOwner] = useState({});
  const [newBoxSize, setNewBoxSize] = useState({});

  const updateNewBoxOwner = (event) => {
    setNewBoxOwner((prevState) => {
      console.log("updateNewBoxOwner: " + event.target.id);
      console.log("updateNewBoxOwner: " + event.target.value);
      return { ...prevState, [event.target.id]: event.target.value };
    });
  };

  const updateNewBoxSize = (event) => {
    setNewBoxSize((prevState) => {
      console.log("updateNewBoxSize: " + event.target.id);
      console.log("updateNewBoxSize: " + event.target.value);
      return { ...prevState, [event.target.id]: event.target.value };
    });
  };

  const submitNewMailBox = (event) => {
    console.log("submit: " + event.target.id);
    console.log("submit: " + { ["_id"]: props.currMailBoxesLength + 1 });
    //why when i click submit console.log disappeared?

    // Combine all new details into one kvp before pass to parent
    const newMailBox = {
      ...newBoxOwner,
      ...newBoxSize,
      ["_id"]: props.currMailBoxesLength + 1,
    };
    props.addBox(newMailBox);
  };

  return (
    <div>
      <form>
        <label htmlFor="boxHolder">Enter a Boxholder</label>
        <input
          type="text"
          placeholder="Boxholder name"
          id="boxOwner"
          onChange={updateNewBoxOwner}
        ></input>
        <label>Select a Box Size</label>
        <select id="boxSize" onChange={updateNewBoxSize}>
          <option value="Small">Small</option>
          <option value="Medium">Medium</option>
          <option value="Large">Large</option>
        </select>
        <button onClick={submitNewMailBox}>
          {<Link to="/mailboxes">Submit</Link>}
        </button>
      </form>
    </div>
  );
};

export default MailboxForm;
