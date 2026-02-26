import React, { useState } from 'react'
import Block from './Block'

const Content = ({Notes, SelectedID, setNotes}) => {
  
  const [focusedBlockedId, setfocusedBlockedId] = useState(null)
  const selectedNote = Notes.find((n) => n.id === SelectedID) 
  if(!selectedNote){
    return (
      <div>
        Not selected
      </div>
    )
  }
  return (
    <div className="text-lg text-[#a1a1aa] flex-1 leading-relaxed outline-none">
      {selectedNote.content.map((block, index) => (
         <Block
         block={block}
         key={block.id}
         index={index}
         selectedNote={selectedNote}
         setNotes={setNotes}
         SelectedID={SelectedID}
         focusedBlockedId={focusedBlockedId}
         setfocusedBlockedId={setfocusedBlockedId}
         />
      ))}
     
     

 
    </div>
  )
}

export default Content
