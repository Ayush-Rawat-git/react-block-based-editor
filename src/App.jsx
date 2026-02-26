import React, { useEffect, useState } from 'react'
import Sidebar from './Components/LeftPanel/Sidebar'
import Editor from './Components/Editor/Editor'

const App = () => {

  const [SelectedID, setSelectedID] = useState(null)
  const [Notes, setNotes] = useState(() => {
    const stored = localStorage.getItem("notes")
    if(stored){
      return JSON.parse(stored)
    }else {
      return []
    }
  })

  useEffect(() => {
    let stringNotes = JSON.stringify(Notes)
    localStorage.setItem("notes",stringNotes)
  
  }, [Notes])
  
  return (
    <div className='flex h-screen 
'>
      <Sidebar Notes={Notes} setNotes={setNotes} setSelectedID={setSelectedID} />
      <Editor SelectedID={SelectedID} Notes={Notes} setNotes={setNotes}/>
    </div>
  )
}

export default App
