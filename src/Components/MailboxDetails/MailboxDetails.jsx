import React from "react";
import { Link, useParams } from "react-router-dom";

const MailboxDetails = (props) => {
  const params = useParams();
  const selectedBox = props.mailBoxes.find(
    (mailbox) => mailbox._id === Number(params.mailboxId)
  );

  const selectedLetter = props.letters.find(
    (letter) => letter._id === Number(params.mailboxId)
  );
  // App => MailboxList => MailboxDetails
  // App => MailboxDetails
  // must props 2 ways?

  //why when i type 3, everything disappeared?
  if (!selectedBox) {
    return <div>Mailbox not found!</div>;
  } else {
    return (
      <>
        <h1>Mailbox {selectedBox._id}</h1>
        <h2>Details</h2>
        <p>Boxholder: {selectedBox.boxOwner}</p>
        <p>Box Size: {selectedBox.boxSize}</p>
        <h2>Letters</h2>
        <p>Dear {selectedLetter.recipient},</p>
        <p>{selectedLetter.message}</p>
      </>
    );
  }
};

export default MailboxDetails;
