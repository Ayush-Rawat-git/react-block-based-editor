import React from 'react'
import NewNoteBtn from './NewNoteBtn'

const WorkSpace = ({ setNotes, setSelectedID }) => {
  return (
    <div className="flex items-center justify-between px-4 py-3 border-b border-zinc-800"
    >
      <h2 className="text-sm font-semibold tracking-wide text-zinc-400 uppercase">
        Workspace
      </h2>
      <NewNoteBtn setNotes={setNotes} setSelectedID={setSelectedID} />

    </div>
  )
}

export default WorkSpace
