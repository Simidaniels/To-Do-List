import React, { useState } from 'react';

function TodoList() {
  const [items, setItems] = useState([]); // Current state for task names
  const [newItem, setNewItem] = useState(''); // Input for new task name

  const [descriptions, setDescriptions] = useState([]); // Task descriptions
  const [newText, setNewText] = useState(''); // Input for new task description

  const [showInput, setShowInput] = useState(false);
  const [visibleIndex, setVisibleIndex] = useState(null); // Tracks which description is visible

  // Function to add a task
  const addItem = () => {
    if (newItem.trim() !== '' && newText.trim() !== '') {
      setItems([...items, newItem]);
      setDescriptions([...descriptions, newText]);
      setNewItem('');
      setNewText('');
    }
  };

  // Function to delete a task
  const deleteItem = (index) => {
    const updatedItems = items.filter((_, i) => i !== index);
    const updatedDescriptions = descriptions.filter((_, i) => i !== index);
    setItems(updatedItems);
    setDescriptions(updatedDescriptions);
  };

  // Toggles visibility for each description
  const toggleVisibility = (index) => {
    setVisibleIndex(visibleIndex === index ? null : index);
  };












  // const editItem = (index) =>


















  return (
    <div className="content-container">
      <div className="content-wrapper">
        <div className="main-context">
          <h1 className="header">
            Hello, <span>Daniel</span>
          </h1>
          <p className="hd-txt">
            Lorem ipsum dolor sit amet consectetur. Aliquam habitat aliquam non
            aliquet. Consequat in integer orci ultrices nibh mattis.
          </p>

          <button className="task" onClick={() => setShowInput(!showInput)}>
            Create Task
          </button>
        </div>

        <div className="img-wrapper">
          <img src={require('./dread.png')} alt="Profile" className="img" />
        </div>
      </div>

      {showInput && (
        <div className="inputs-wrapper">
          <p>Task Name</p>
          <textarea
            className="task-name"
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
            maxLength={25}
          />

          <p>Task Description</p>
          <textarea
            className="task-description fill"
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
            maxLength={80}
            rows={4}
            cols={50}
          />

          <p>
            <button className="task" onClick={addItem}>
              Create Task
            </button>
          </p>
        </div>
      )}

      <div className="task-wrapper">
        <table>
          <thead>
            <tr>
              <th className="sub_header">Tasks</th>
            </tr>
          </thead>

          <tbody className="output-container">
            {items.map((item, index) => (
              <tr className='para' key={index}>
                <td className="content" onClick={() => toggleVisibility(index)}>
                  {item}
                </td>
                <td>
                  <button className="dlt_btn" onClick={() => deleteItem(index)}>
                    <img src={require('./trash.png')} alt="Delete" className="icn" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {visibleIndex !== null && (
        <div className="description-wrapper">
          <p>Description</p>
          <div className="dsc-fld">{descriptions[visibleIndex]}</div>

          <p>
            <button className="close-btn" onClick={() => setVisibleIndex(null)}>
              Close
            </button>
          </p>
        </div>
      )}
    </div>
  );
}

export default TodoList;



// Home.js..........
// Composition of the Index, Navigation, Rating....



// MAKE YOUR DESRIPTION FIELD RE-EDITABLE....