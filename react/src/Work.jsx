import React from 'react';
import { useState } from 'react';

const Work = () => {
  const [work, setWork] = useState({ workName: "", workPosition: "", workStart: "", workEnd: "" });
  const [workList, setWorkList] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  const addToArray = (e) => {
    e.preventDefault();
    if (work.workName === "" || work.workPosition === "" || work.workStart === "" || work.workEnd === "") return false;

    if (isEditing) {
      let newWorkList = [...workList];
      newWorkList[editIndex] = work;
      setWorkList(newWorkList);
      setIsEditing(false);
      setEditIndex(null);
      setWork({ workName: "", workPosition: "", workStart: "", workEnd: "" });
      return;
    }

    setWorkList([...workList, work]);
    setWork({ workName: "", workPosition: "", workStart: "", workEnd: "" });
  }

  const editWork = (index) => {
    setIsEditing(true);
    setEditIndex(index);
    setWork(workList[index]);
  }

  const deleteWork = (index) => {
    let newWorkList = [...workList];
    newWorkList.splice(index, 1);
    newWorkList(newWorkList);
  }

  return (
    <div>
      <form>
        <label htmlFor="workName">Company</label>
        <input id='workName' type="text" value={work.workName} onChange={(e) => setWork({...work, workName: e.target.value})} required/>
        <label htmlFor="workPosition">Position</label>
        <input id='workPosition' type="text" value={work.workPosition} onChange={(e) => setWork({...work, workPosition: e.target.value})} required/>
        <label htmlFor="workStart">Work started</label>
        <input id='workStart' type="date" value={work.workStart} onChange={(e) => setWork({...work, workStart: e.target.value})} required/>
        <label htmlFor="workEnd">Work ended</label>
        <input id='workEnd' type="date" value={work.workEnd} onChange={(e) => setWork({...work, workEnd: e.target.value})} required/>
        <button type='submit' onClick={addToArray}>{isEditing ? "Update" : "Submit"}</button>
      </form>
      <ul>
        {workList.map((work, index) => (
          <div key={index}>
             <li>{work.workName} {work.workPosition} ({work.workStart} - {work.workEnd})</li>
             <button type='button' onClick={() => editWork(index)}>Edit</button>
             <button type='button' onClick={() => deleteWork(index)}>Delete</button>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Work;