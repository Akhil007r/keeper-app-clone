import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [items, setItem] = useState([]);

  function add(note) {
    console.log(note);
    setItem((previtem) => {
      return [...previtem, note];
    });
  }
  function dele(id) {
    console.log("i got clicked" + id);
    setItem((prevVal) => {
      return prevVal.filter((items, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea additem={add} />
      {items.map((note, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={note.title}
            content={note.content}
            ondelete={dele}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
