import React from 'react'

const NewNoteBtn = ({ setNotes, setSelectedID }) => {

  function handleClick() {
    const blockId  = crypto.randomUUID()
    const newnote = {
      id: crypto.randomUUID(),
      title: "Undefined",
      content: [
        { id: blockId, text: ""}
      ],
      createdAt: Date.now()
    }

    setNotes(prev => [newnote, ...prev])
    setSelectedID(newnote.id)



  }
  return (
    <>

      <button onClick={handleClick}>
        +
      </button>

    </>
  )
}

export default NewNoteBtn
