import React, { useState } from 'react'
import NewNote from './NewNote'

const NoteList = ({Notes, setSelectedID, setNotes}) => {

  const [OpenId, setOpenId] = useState(null)

  return (
    <div className='flex-1 '>
      <NewNote Notes={Notes} OpenId={OpenId} setOpenId={setOpenId} setSelectedID={setSelectedID} setNotes={setNotes}/>
    </div>
  )
}

export default NoteList
