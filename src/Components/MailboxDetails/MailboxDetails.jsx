import React from "react";
import { Link, useParams } from "react-router-dom";

const MailboxDetails = (props) => {
  const params = useParams();
  // const selectedBox = props.mailBoxes.find(
  //   (mailbox) => mailbox._id === Number(params)
  // );

  // how to pass down the entire kvp from App.jsx to MailboxList to MailboxDetails?
  return (
    <>
      {/* <div>
        {props.mailBoxes.map((mailBox, id) => {
          console.log(mailBox);
          return (
            <Link to={`/mailboxes/${mailBox._id}`}>
              Mailbox {mailBox._id} {mailBox.boxOwner}
            </Link>
          );
        })}
      </div> */}

      {/* <div>{selectedBox.boxOwner}</div>
      <div>{selectedBox.boxSize}</div> */}
      {/* <div>{JSON.stringify(props)}</div> */}
      <div>{params.mailboxId}</div>
    </>
  );
};

export default MailboxDetails;
