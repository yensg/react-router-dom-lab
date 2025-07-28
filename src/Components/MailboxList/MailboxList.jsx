import React from "react";
import MailboxDetails from "../MailboxDetails/MailboxDetails";

const MailboxList = (props) => {
  return (
    <>
      <div>
        {props.mailBoxes.map((mailBox, id) => {
          console.log(mailBox);
          return (
            <MailboxDetails mailBoxes={props.mailBoxes} key={id}>
              Mailbox {mailBox._id} {mailBox.boxOwner}
            </MailboxDetails>
          );
        })}
        <MailboxDetails mailBoxes={props.mailBoxes} />
      </div>
      {/* <div>{JSON.stringify(props)}</div>
      <div>{JSON.stringify(props.mailBoxes)}</div> */}
    </>
  );
};

export default MailboxList;
