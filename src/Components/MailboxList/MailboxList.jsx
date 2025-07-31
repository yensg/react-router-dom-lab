import React from "react";
import MailboxDetails from "../MailboxDetails/MailboxDetails";
import { Link, Navigate } from "react-router-dom";

const MailboxList = (props) => {
  // here i should spilt the each mailboxes into each link?

  // we will use id to put into key at jsx tag
  return (
    <div>
      {props.mailBoxes.map((mailBox) => {
        return (
          <div key={mailBox._id}>
            {/* <Link to={`/mailboxes/${idx + 1}`}>Mailbox {idx + 1}</Link> */}
            <Link key={mailBox._id} to={`/mailboxes/${mailBox._id}`}>
              Mailbox {mailBox._id}
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default MailboxList;
