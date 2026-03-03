import React from 'react'
import Delbtn from './Delbtn'

const NewNote = ({ Notes, OpenId, setOpenId, setSelectedID, setNotes }) => {

  return (
    <>
      {Notes.map((note, index) => (
        <div
          key={index}
          className="relative h-8 bg-transparent hover:bg-[#2a2a30] rounded-md flex items-center justify-between text-[#a1a1aa] px-3"
          onClick={() => setSelectedID(note.id)}
        >
          {note.title}
          <button
            className=' text-3xl'
            onClick={() => setOpenId(note.id)}

          >...</button>
          {OpenId === note.id &&
            <div className='absolute right-0 mt-2 w-40 top-5 bg-white border border-gray-200 rounded-lg shadow-lg z-50'>
              <Delbtn
                id={note.id}
                Notes={Notes}
                setNotes={setNotes}

              />

            </div>
          }

        </div>
      ))}

    </>

  )
}

export default NewNote
