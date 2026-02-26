import React from 'react'

const Title = ({ SelectedID, Notes }) => {

    const selectedNote = Notes.find(n => n.id === SelectedID)

  return (
    <div className="text-4xl font-bold text-[#e4e4e7] mb-4">

      
      {selectedNote?.title}
      
    </div>
  )
}

export default Title
