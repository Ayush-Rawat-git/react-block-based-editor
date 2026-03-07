import React from 'react'

const Delbtn = ({id, Notes, setNotes, setOpenTabsId}) => {
    function handleclick(){
        setNotes(prev => 
            prev.filter(note => note.id !== id)
        )
        setOpenTabsId(prev => 
          prev.filter(tabId => tabId !== id)
        )
    }
  return (
    <div className='text-black hover:bg-gray-300 rounded'>
      <button
        onClick={handleclick}
      >
        Delete
      </button>
    </div>
  )
}

export default Delbtn
