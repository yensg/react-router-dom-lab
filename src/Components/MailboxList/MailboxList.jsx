import React from "react";
import MailboxDetails from "../MailboxDetails/MailboxDetails";
import { Link, Navigate } from "react-router-dom";

const MailboxList = (props) => {
  // here i should spilt the each mailboxes into each link?

  return (
    <div>
      {props.mailBoxes.map((mailBox, idx) => {
        return (
          <div key={idx}>
            <Link to={`/mailboxes/${idx + 1}`}>Mailbox {idx + 1}</Link>
          </div>
        );
      })}
    </div>
  );
};

export default MailboxList;
