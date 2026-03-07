import React from 'react'
import WorkSpace from './WorkSpace'
import NotionList from './NoteList'

const Sidebar = ({Notes, setNotes, setSelectedID, setOpenTabsId}) => {
  return (

    <div className='w-64 flex flex-col flex-shrink-0 bg-zinc-900 border-r border-zinc-800'>
      <div className='h-10'></div>
      <WorkSpace setNotes={setNotes} setSelectedID={setSelectedID} setOpenTabsId={setOpenTabsId}/>
      <NotionList Notes={Notes} setSelectedID={setSelectedID} setNotes={setNotes} setOpenTabsId={setOpenTabsId}/>
    </div>
  )
}

export default Sidebar
