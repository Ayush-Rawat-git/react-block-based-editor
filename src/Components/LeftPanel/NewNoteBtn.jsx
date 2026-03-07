import { Columns3Cog } from 'lucide-react'
import React from 'react'

const NewNoteBtn = ({ setNotes, setSelectedID, setOpenTabsId }) => {

  function handleClick() {
    const blockId  = crypto.randomUUID()
    const newnote = {
      id: crypto.randomUUID(),
      title: "",
      bgcolor : "bg-transparent",
      content: [
        { id: blockId, text: ""}
      ],
      createdAt: Date.now()
    }

    setNotes(prev => [newnote, ...prev])
    setSelectedID(newnote.id)
    setOpenTabsId(prev => [...prev, newnote.id])



  }
  return (
    <>

      <button className='text-zinc-500 transition-colors duration-150 hover:text-white' onClick={handleClick}>
        +
      </button>

    </>
  )
}

export default NewNoteBtn
