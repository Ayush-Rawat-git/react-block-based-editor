import React, { useEffect, useState } from 'react'
import Sidebar from './Components/LeftPanel/SideBar'
import Editor from './Components/Editor/Editor'
import TopBar from './Components/TopBar/TopBar'

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
  const [isSideBarOpen, setIsSideBarOpen] = useState(true)

  useEffect(() => {
    let stringNotes = JSON.stringify(Notes)
    localStorage.setItem("notes",stringNotes)
  
  }, [Notes])
  
  return (
    <div className='flex h-screen '>
            {isSideBarOpen && <Sidebar Notes={Notes} setNotes={setNotes} setSelectedID={setSelectedID} />}

      <div className='flex flex-col flex-1'>
              <TopBar setIsSideBarOpen={setIsSideBarOpen} Notes={Notes} isSideBarOpen={isSideBarOpen} setSelectedID={setSelectedID}/>

      <Editor SelectedID={SelectedID} Notes={Notes} setNotes={setNotes}/>
      </div>
    </div>
  )
}

export default App
