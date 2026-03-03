import React from 'react'

const Title = ({ SelectedID, Notes, setNotes }) => {

    const selectedNote = Notes.find(n => n.id === SelectedID)
    function handlechange(e){
      const newtitle = e.target.value
      setNotes(prev => 
        prev.map(note => 
          note.id === SelectedID
          ? 
           {
            ...note,
            title: newtitle
           }
           : note
        )
      )
    }


  return (
    <div className="text-4xl font-bold text-[#e4e4e7] mb-4">

      <input
         className=' px-2 text-6xl inline-block w-auto outline-none'
         value={selectedNote?.title || ""}
         onChange={handlechange}
         placeholder='New Page'
      />

      
    </div>
  )
}

export default Title
