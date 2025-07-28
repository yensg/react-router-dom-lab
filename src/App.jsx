import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import MailboxList from "./Components/MailboxList/MailboxList";
import MailboxForm from "./Components/MailboxForm/MailboxForm";
import MailboxDetails from "./Components/MailboxDetails/MailboxDetails";
import "./index.css";
import NavBar from "./Components/NavBar";

//

const App = () => {
  const [mailBoxes, setMailboxes] = useState([
    { boxOwner: "Alex", boxSize: "Small", _id: 1 },
  ]);

  const addBox = (newMailBox) => {
    console.log("mailBoxes: " + mailBoxes);
    setMailboxes((prevState) => {
      return [...prevState, newMailBox];
    });
  };

  return (
    <div>
      <NavBar />
      <h2>Mailbox List</h2>
      <Routes>
        <Route
          path="/"
          element={
            <main>
              <h1>Post Office</h1>
            </main>
          }
        />

        <Route
          path="/mailboxes"
          element={<MailboxList mailBoxes={mailBoxes} />}
        />
        <Route
          path="/new-mailbox"
          element={
            <MailboxForm
              currMailBoxesLength={mailBoxes.length}
              addBox={addBox}
            />
          }
        />
        <Route path="/mailboxes/:mailboxId" element={<MailboxDetails />} />
      </Routes>
      {/* {JSON.stringify(mailBoxes)} */}
    </div>
  );
};

export default App;
