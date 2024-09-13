import { useState } from 'react'
import './App.css'
import Education from './Education.jsx';

function App() {
  const [jobTitle, setJobTitle] = useState('Web Developer')
  const [firstName, setFirstName] = useState('Aleks')
  const [lastName, setLastName] = useState('Michalak')
  const fullName = `${firstName} ${lastName}`
  const [email, setEmail] = useState('email@aleksmichalak.pl')
  const [phone, setPhone] = useState('123456789')
  const [address, setAddress] = useState('Poznan, Poland')
  const [notes, setNotes] = useState('Hi')

  return(
    <div>
      <h1>Job Application</h1>
      <form>
        <div>
          <label>Job: </label>
          <input type="text" value={jobTitle} onChange={(e) => setJobTitle(e.target.value)} />
        </div>
        <div>
          <label htmlFor="">First Name: </label>
          <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
        </div>
        <div>
          <label htmlFor="">Last Name: </label>
          <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
        </div>
        <div>
          <label htmlFor="">Email</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <label htmlFor="">Phone</label>
          <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} />
        </div>
        <div>
          <label htmlFor="Address"></label>
          <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
        </div>
        <div>
          <label htmlFor="Notes"></label>
          <textarea value={notes} onChange={(e) => setNotes(e.target.value)} />
        </div>
        <Education />
      </form>
    </div>
  )
}

export default App
