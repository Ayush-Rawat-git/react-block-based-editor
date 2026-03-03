import React from 'react'

const Delbtn = ({id, Notes, setNotes}) => {
    function handleclick(){
        setNotes(prev => 
            prev.filter(note => note.id !== id)
        )
    }
  return (
    <div>
      <button
        onClick={handleclick}
      >
        Delete
      </button>
    </div>
  )
}

export default Delbtn
