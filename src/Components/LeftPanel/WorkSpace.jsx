import React from 'react'
import NewNoteBtn from './NewNoteBtn'

const WorkSpace = ({setNotes, setSelectedID}) => {
  return (
    <div className="bg-[#242429] border-b border-[#2f2f35] flex justify-between items-center h-10 px-2 text-[#d4d4d8]"
>
      <p>WorkSpace</p>
      <NewNoteBtn setNotes={setNotes} setSelectedID={setSelectedID}/>
    </div>
  )
}

export default WorkSpace
