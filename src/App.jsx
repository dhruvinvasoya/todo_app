import React from "react";
import "./Components/Main.css";
import Todo from "./Components/Todo";
import { useState } from "react";
import { useEffect } from "react";

const localStoragedata = () => {
  const lists = localStorage.getItem("myTodoList");

  console.log("list" + lists);
  if (lists) {
    return JSON.parse(lists);
  } else {
    return [];
  }
};
const App = () => {
  const [inputData, setInputData] = useState("");
  const [items, setItems] = useState(localStoragedata());
  const [editListdata, setEditListdata] = useState("");
  const [toggleEditBtn, setToggleEditBtn] = useState(false);

  const AddItems = () => {
    if (!inputData) {
      alert("Please Enter Something");
    } else if (inputData && toggleEditBtn) {
      setItems(
        items.map((elem) => {
          if (elem.id === editListdata) {
            setInputData("");
            setToggleEditBtn(false);

            return { ...elem, name: inputData };
          } else {
            return elem;
          }
        })
      );
    } else {
      const newInputData = {
        id: new Date().getTime().toString(),
        name: inputData,
      };
      setItems([...items, newInputData]);
      setInputData("");
    }
  };
  const deleteList = (id) => {
    let txt = "Are You Sure?";
    const updatedLists = items.filter((ele) => {
      return ele.id !== id;
    });
    if (confirm(txt) == true) {
      setItems(updatedLists);
    }
  };
  const editList = (id) => {
    const editList = items.find((ele) => {
      return ele.id === id;
    });
    setInputData(editList.name);
    setEditListdata(id);
    setToggleEditBtn(true);
  };

  useEffect(() => {
    localStorage.setItem("myTodoList", JSON.stringify(items));
  }, [items]);

  const clearall = () => {
    let txt = "Are You Sure?";
    if (confirm(txt) == true) {
      setItems([]);
    }
  };
  return (
    <>
      <Todo
        inputData={inputData}
        setInputData={setInputData}
        items={items}
        setItems={setItems}
        AddItems={AddItems}
        deleteList={deleteList}
        editList={editList}
        toggleEditBtn={toggleEditBtn}
        clearall={clearall}
      />
    </>
  );
};

export default App;
