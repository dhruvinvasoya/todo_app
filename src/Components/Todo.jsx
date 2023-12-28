import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClipboardList,
  faPlus,
  faTrashCan,
  faPenToSquare,
  faEdit,
} from "@fortawesome/free-solid-svg-icons";

const Todo = ({
  inputData,
  setInputData,
  AddItems,
  items,
  deleteList,
  editList,
  toggleEditBtn,
  clearall,
}) => {
    
  return (
    <>
      <div className="main">
        <div className="hero-section">
          <div className="Clipboard-Icon">
            <FontAwesomeIcon icon={faClipboardList} />
          </div>
          <h1 className="Heading-1">Add Your List</h1>
          <div className="Input-Section">
            <input
              value={inputData}
              onChange={(e) => setInputData(e.target.value)}
              placeholder="✍️ Write your List Here"
              type="text"
            />
            <button onClick={AddItems}>
              {toggleEditBtn ? (
                <FontAwesomeIcon icon={faPenToSquare} />
              ) : (
                <FontAwesomeIcon icon={faPlus} />
              )}
            </button>
          </div>
          <div className="list-sec">
            {items.map((ele, index) => {
              return (
                <div className="List-Section" key={index}>
                  <h3 className="labels">{ele.name}</h3>
                  <div className="List-changes">
                    <FontAwesomeIcon
                      onClick={() => deleteList(ele.id)}
                      className="Trash"
                      icon={faTrashCan}
                    />
                    <FontAwesomeIcon
                      onClick={() => editList(ele.id)}
                      className="Edit"
                      icon={faPenToSquare}
                    />
                  </div>
                </div>
              );
            })}
          </div>
          <button onClick={clearall} className="delete-all">Delete All</button>
        </div>
      </div>
    </>
  );
};

export default Todo;
