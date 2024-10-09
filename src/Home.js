import React from 'react';
import { useState } from 'react';




function TodoList() {
  const [items, setItems] = useState([]);         //The current state
  const [newItem, setNewItem] = useState('');     //Function to  update the current state


  const [text, setText] = useState([]);
  const [newText, setNewText] = useState('');




  //Add and Delete statement,l., 
const addItem = () => {
  if (newItem.trim() !== '') {
    setItems([...items, newItem]);
    setNewItem('');
  }
};
//Add function
const deleteItem = (index) => {
  const updatedItems = [...items];
  updatedItems.splice(index, 1);
  setItems(updatedItems);
}
//Delete function


const addText = () => {
  if (newText.trim() !== '') {
    setText([...text, newText]);
    setNewText('');
  }
};
// eslint-disable-next-line no-unused-vars
const deleteText = (index) => {
  const updatedText = [...text];
  updatedText.splice(index, 1);
  setText(updatedText);
};


const handleBothClicks = () => {
  addItem();
  addText();
};




  const [showInput, setShowInput] = useState(false);
  // const [] = useState('');
  const toggleInputVisibility = () => {
    setShowInput(!showInput);
  };
  const handleInputBlur = () => {
    setShowInput(false);
  }




  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

   const handleVisibilityBlur = () => {
    setIsVisible(false);
  }




  // const addTimeDate = () => {
  //   const currentDate = new Date();
  //   const dateTimeString = currentDate.toLocaleString();
  //   setInputValue(prevValue => prevValue + dateTimeString + '\n');
  // };
return (      //JSX function
<div className='content-container'>
  <div className='content-wrapper'>
    <div className='main-context'>
        <h1 className='header'>Hello, <span>Daniel</span></h1>
        <p className='hd-txt'>Lorem ipsum dolor sit amet consecteur. Aliquam habitat aliquam non alrticies nini parasent ipsumsum. consequat in integer orci ultrices nibh mattis. Ultrices at</p>          
      <div>
       <button 
            className='task'
            onClick={toggleInputVisibility}>Create Task</button>        {/* onClick={addItem} */}
            {/* {showInput && (
              <input
                type='text'
                value={inputValue}
                onChange={handleInputChange}
                onBlur={handleInputBlur}
                />
            )} */}
      </div>
    </div>
    <div className='img-wrapper'>
        <img src={require('./dread.png')} alt='' className='img' />
    </div>
    </div>




{showInput && (
<div className='inputs-wrapper'>
        <p>Task Name</p>
              <textarea
                className='task-name'
                type='text'
                value={newItem}
                onChange={(e) => setNewItem(e.target.value)}
                maxLength={25}
                />

          <p>Task Description</p>
        <textarea
             className='task-description fill'
             type="text"
            //  placeholder='Type an item'
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
            maxLength={80}
          rows={4}
            cols={50}
          />



 
            <p>
              <button 
                className='task' 
                onClick={handleBothClicks}
                onBlur={handleInputBlur}
                >Create Task</button>
            </p>
  </div>
 )}

<div className='task-wrapper'>
  <table>
    <thead>
      <tr>
        <th className='sub_header'>Tasks</th>
      </tr>  
    </thead>




    <tbody className='output-container'>
      {items.map((item, index) => (
        <tr key={index}>


        <div className='para'>
        <div onClick={toggleVisibility}>
          <td className='content'>
            {item}
          </td>
        </div>
           <button className='dlt_btn' onClick={() => deleteItem()}><img src={require('./trash.png')} alt='' className='icn'/></button>
        </div>



        </tr>
      ))}
    </tbody>



        



{isVisible && (
  <div className='description-wrapper'>
    
        <p>Description</p>
            <div
              
              className='dsc-fld'>{text}</div>


            <p>
              <button 
              className='close-btn'
              onBlur={toggleVisibility}
              onClick={handleVisibilityBlur}
                >Close</button>
            </p>
  </div>
)}












    </table> 
</div>
</div>
  );
}


export default TodoList;