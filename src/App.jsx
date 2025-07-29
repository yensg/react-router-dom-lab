import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import MailboxList from "./Components/MailboxList/MailboxList";
import MailboxForm from "./Components/MailboxForm/MailboxForm";
import MailboxDetails from "./Components/MailboxDetails/MailboxDetails";
import "./index.css";
import NavBar from "./Components/NavBar";
import LetterForm from "./Components/MailboxForm/LetterForm";

const App = () => {
  const [mailBoxes, setMailboxes] = useState([
    { boxOwner: "Alex", boxSize: "Small", _id: 1 },
  ]);

  const [letters, setLetters] = useState([
    { recipient: "Alex", message: "hello", _id: 1 },
  ]);

  const addBox = (newMailBox) => {
    setMailboxes((prevState) => {
      return [...prevState, newMailBox];
    });
    console.table(mailBoxes);
  };

  const addLetter = (newLetter) => {
    setLetters((prevState) => {
      return [...prevState, newLetter];
    });
    console.table(letters);
  };

  //cannot have duplicated components at route and div
  return (
    <div>
      <NavBar />
      <h2>Mailbox List</h2>
      {/* {JSON.stringify(letters)} */}
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
        <Route
          path="/mailboxes/:mailboxId"
          element={<MailboxDetails letters={letters} mailBoxes={mailBoxes} />}
        />
        <Route
          path="/new-letter"
          element={<LetterForm addLetter={addLetter} mailBoxes={mailBoxes} />}
        />
      </Routes>
    </div>
  );
};

export default App;
