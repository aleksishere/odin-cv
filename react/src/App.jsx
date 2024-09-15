import { useState } from 'react'
import './App.css'

function App() {
  const [jobTitle, setJobTitle] = useState('Web Developer')
  const [firstName, setFirstName] = useState('Aleks')
  const [lastName, setLastName] = useState('Michalak')
  const fullName = `${firstName} ${lastName}`
  const [email, setEmail] = useState('email@aleksmichalak.pl')
  const [phone, setPhone] = useState('123456789')
  const [address, setAddress] = useState('Poznan, Poland')
  const [notes, setNotes] = useState('Hi')

  // School State
  const [school, setSchool] = useState({ schoolName: "", schoolStart: "", schoolEnd: "" });
  const [schoolList, setSchoolList] = useState([]);
  const [isEditingSchool, setIsEditingSchool] = useState(false);
  const [editIndexSchool, setEditIndexSchool] = useState(null);

  // Work State
  const [work, setWork] = useState({ workName: "", workPosition: "", workStart: "", workEnd: "" });
  const [workList, setWorkList] = useState([]);
  const [isEditingWork, setIsEditingWork] = useState(false);
  const [editIndexWork, setEditIndexWork] = useState(null);

  // School functions

  const addToSchoolArray = (e) => {
    e.preventDefault();
    if (school.schoolName === "" || school.schoolStart === "" || school.schoolEnd === "") return false;

    if (isEditingSchool) {
      let newSchoolList = [...schoolList];
      newSchoolList[editIndexSchool] = school;
      setSchoolList(newSchoolList);
      setIsEditingSchool(false);
      setEditIndexSchool(null);
      setSchool({ schoolName: "", schoolStart: "", schoolEnd: "" });
      return;
    }

    setSchoolList([...schoolList, school]);
    setSchool({ schoolName: "", schoolStart: "", schoolEnd: "" })
  }

  const editSchool = (index) => {
    setIsEditingSchool(true);
    setEditIndexSchool(index);
    setSchool(schoolList[index]);
  }

  const deleteSchool = (index) => {
    let newSchoolList = [...schoolList];
    newSchoolList.splice(index, 1);
    setSchoolList(newSchoolList);
  }

  // Work functions

  const addToArrayWork = (e) => {
    e.preventDefault();
    if (work.workName === "" || work.workPosition === "" || work.workStart === "" || work.workEnd === "") return false;

    if (isEditingWork) {
      let newWorkList = [...workList];
      newWorkList[editIndexWork] = work;
      setWorkList(newWorkList);
      setIsEditingWork(false);
      setEditIndexWork(null);
      setWork({ workName: "", workPosition: "", workStart: "", workEnd: "" });
      return;
    }

    setWorkList([...workList, work]);
    setWork({ workName: "", workPosition: "", workStart: "", workEnd: "" });
  }

  const editWork = (index) => {
    setIsEditingWork(true);
    setEditIndexWork(index);
    setWork(workList[index]);
  }

  const deleteWork = (index) => {
    let newWorkList = [...workList];
    newWorkList.splice(index, 1);
    setWorkList(newWorkList);
  }









  return(
    <div>
      <main>
        {/* ////////////////////////////////////////// */}
        {/* Main info component */}
        {/* ////////////////////////////////////////// */}
        <div className="box">
          <div>
            <input type="text" className="input" placeholder='Job' value={jobTitle} onChange={(e) => setJobTitle(e.target.value)} />
          </div>
          <div>
            <input type="text" className="input" placeholder='First Name' value={firstName} onChange={(e) => setFirstName(e.target.value)} />
          </div>
          <div>
            <input type="text" className="input" placeholder='Last Name' value={lastName} onChange={(e) => setLastName(e.target.value)} />
          </div>
          <div>
            <input type="email" className="input" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div>
            <input type="tel" className="input" placeholder='Phone' value={phone} onChange={(e) => setPhone(e.target.value)} />
          </div>
          <div>
            <input type="text" className="input" placeholder='Address' value={address} onChange={(e) => setAddress(e.target.value)} />
          </div>
          <div className="pb-3">
            <textarea value={notes} className="input" placeholder='Notes' onChange={(e) => setNotes(e.target.value)} />
          </div>
          {/* ////////////////////////////////////////// */}
          {/* Education component */}
          {/* ////////////////////////////////////////// */}
          <div className="box">
            <form>
              <input id='schoolName' placeholder='School Name' className="input" type="text" value={school.schoolName} onChange={(e) => setSchool({...school, schoolName: e.target.value})} required/>
              <div className="dates"> 
                <div>
                  <label htmlFor="schoolStart">School started</label>
                  <input id='schoolStart' className="input" placeholder='School started' type="date" value={school.schoolStart} onChange={(e) => setSchool({...school, schoolStart: e.target.value})} required/>
                </div>
                <div>
                  <label htmlFor="schoolEnd">School ended</label>
                  <input id='schoolEnd' className="input" placeholder='School ended' type="date" value={school.schoolEnd} onChange={(e) => setSchool({...school, schoolEnd: e.target.value})} required/>
                </div>
              </div>
              <button type='submit' className="button" onClick={addToSchoolArray}>{isEditingSchool ? "Update" : "Submit"}</button>
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
          {/* ////////////////////////////////////////// */}
          {/* Work component */}
          {/* ////////////////////////////////////////// */}
          <div className="box">
            <form>
              <input id='workName' className="input" placeholder='Company' type="text" value={work.workName} onChange={(e) => setWork({...work, workName: e.target.value})} required/>
              <input id='workPosition' className="input" placeholder='Position' type="text" value={work.workPosition} onChange={(e) => setWork({...work, workPosition: e.target.value})} required/>
              <div className="dates">
                <div>
                  <label htmlFor="workStart">Work started</label>
                  <input id='workStart' className="input" type="date" value={work.workStart} onChange={(e) => setWork({...work, workStart: e.target.value})} required/>
                </div>
                <div>
                  <label htmlFor="workEnd">Work ended</label>
                  <input id='workEnd' className="input" type="date" value={work.workEnd} onChange={(e) => setWork({...work, workEnd: e.target.value})} required/>
                </div>
              </div>
              <button className="button" type='submit' onClick={addToArrayWork}>{isEditingWork ? "Update" : "Submit"}</button>
            </form>
            <ul>
              {workList.map((work, index) => (
                <div key={index}>
                  <li>{work.workName} {work.workPosition} ({work.workStart} - {work.workEnd})</li>
                  <button type='button' class="button" onClick={() => editWork(index)}>Edit</button>
                  <button type='button' class="button" onClick={() => deleteWork(index)}>Delete</button>
                </div>
              ))}
            </ul>
          </div>
        </div>

        <aside>
        <p>
          <strong>Job Title:</strong> {jobTitle}</p>
          <p><strong>Name:</strong> {firstName} {lastName}</p>
          <p><strong>Email:</strong> {email}</p>
          <p><strong>Phone:</strong> {phone}</p>
          <p><strong>Address:</strong> {address}</p>
          <p><strong>Notes:</strong> {notes}</p>
        </aside>
      </main>
    </div>
  )
}

export default App
