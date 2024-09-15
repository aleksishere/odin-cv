import React from 'react';
import { useState } from 'react';

const Education = () => {
  const [school, setSchool] = useState({ schoolName: "", schoolStart: "", schoolEnd: "" });
  const [schoolList, setSchoolList] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  const addToArray = (e) => {
    e.preventDefault();
    if (school.schoolName === "" || school.schoolStart === "" || school.schoolEnd === "") return false;

    if (isEditing) {
      let newSchoolList = [...schoolList];
      newSchoolList[editIndex] = school;
      setSchoolList(newSchoolList);
      setIsEditing(false);
      setEditIndex(null);
      setSchool({ schoolName: "", schoolStart: "", schoolEnd: "" });
      return;
    }

    setSchoolList([...schoolList, school]);
    setSchool({ schoolName: "", schoolStart: "", schoolEnd: "" })
  }

  const editSchool = (index) => {
    setIsEditing(true);
    setEditIndex(index);
    setSchool(schoolList[index]);
  }

  const deleteSchool = (index) => {
    let newSchoolList = [...schoolList];
    newSchoolList.splice(index, 1);
    setSchoolList(newSchoolList);
  }

  return (
    <div>
      <form>
        <label htmlFor="schoolName">School Name</label>
        <input id='schoolName' type="text" value={school.schoolName} onChange={(e) => setSchool({...school, schoolName: e.target.value})} required/>
        <label htmlFor="schoolStart">School started</label>
        <input id='schoolStart' type="date" value={school.schoolStart} onChange={(e) => setSchool({...school, schoolStart: e.target.value})} required/>
        <label htmlFor="schoolEnd">School ended</label>
        <input id='schoolEnd' type="date" value={school.schoolEnd} onChange={(e) => setSchool({...school, schoolEnd: e.target.value})} required/>
        <button type='submit' onClick={addToArray}>{isEditing ? "Update" : "Submit"}</button>
      </form>
      <ul>
        {schoolList.map((school, index) => (
          <div key={index}>
             <li>{school.schoolName} ({school.schoolStart} - {school.schoolEnd})</li>
             <button type='button' onClick={() => editSchool(index)}>Edit</button>
             <button type='button' onClick={() => deleteSchool(index)}>Delete</button>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Education;