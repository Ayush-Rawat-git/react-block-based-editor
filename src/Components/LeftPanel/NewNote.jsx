import React, { useEffect, useRef, useState } from 'react'
import Delbtn from './Delbtn'
import { MoreHorizontal, MoveDownRight } from 'lucide-react'
import RenameBtn from './RenameBtn'
import ChangeColor from './ChangeColor'


const NewNote = ({ Notes, OpenId, setOpenId, setSelectedID, setNotes, setOpenTabsId }) => {

  const menuref = useRef(null)
  const [renameId, setRenameId] = useState(null)

  useEffect(() => {
    function handleOutsideClick(e) {
      if (menuref.current && !menuref.current.contains(e.target)) {
        setOpenId(null)
      }
    }
    document.addEventListener("mousedown", handleOutsideClick)

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick)
    }
  }, [])

  function handleRename(value, id) {

    setNotes(prev =>
      prev.map((note) =>
        note.id === id
          ? { ...note, title: value }
          : note
      )
    )
  }

  function openNoteTab(id){
    setOpenTabsId(prev => [...prev, id])
  }

  return (
    <>
      {Notes.map((note, index) => (
        <div
          key={index}
          className={`h-8 px-4 text-sm font-medium text-zinc-300 rounded-md cursor-pointer transition-colors duration-150  hover:text-white flex justify-between items-center ${note.bgcolor || "bg-zinc-900"}`}
          onClick={() =>{ 
            setSelectedID(note.id)
            openNoteTab(note.id)
          }}
        >
          <div className='h-full flex items-center '>

            {renameId === note.id ? (
              <input type="text"
                className='outline-none  '
                value={note.title}
                onChange={(e) => handleRename(e.target.value, note.id)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    setRenameId(null)
                  }
                }}
              />
            ) :
              (
                note.title
              )}

          </div>

          <div  className='relative flex items-center'>

            <button
              className=' text-flex items-center justify-center '
              onClick={() => setOpenId(note.id)}

            >
              <MoreHorizontal className="w-5 h-5 text-white" />
            </button>

            {OpenId === note.id &&
              <div className='absolute left-0 top-0 p-1.5 h-60 w-50 bg-white border border-gray-200 rounded-lg shadow-lg z-50'
              ref={menuref}
              >
                <Delbtn
                  id={note.id}
                  Notes={Notes}
                  setNotes={setNotes}
                  setOpenTabsId={setOpenTabsId}
                />
                <RenameBtn
                  setRenameId={setRenameId}
                  id={note.id}
                />
                <button className='text-black hover:bg-gray-300 rounded'>Pin</button>
                <br />
                <button className='text-black hover:bg-gray-300 rounded'>Duplicate</button>

                <ChangeColor
                  id={note.id}
                  setNotes={setNotes}
                />

              </div>
            }
          </div>


        </div>
      ))}

    </>

  )
}

export default NewNote
