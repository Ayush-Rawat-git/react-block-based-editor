import React from 'react'
import WorkSpace from './WorkSpace'
import NotionList from './NoteList'

const Sidebar = ({Notes, setNotes, setSelectedID}) => {
  return (
    <div className='w-64 flex flex-col flex-shrink-0 bg-[#1f1f23] border-r border-[#2f2f35]'>
      <WorkSpace setNotes={setNotes} setSelectedID={setSelectedID}/>
      <NotionList Notes={Notes} setSelectedID={setSelectedID}/>
    </div>
  )
}

export default Sidebar
