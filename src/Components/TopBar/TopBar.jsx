import React from 'react'
import FileTab from './FileTab'

const TopBar = ({ setIsSideBarOpen, Notes, isSideBarOpen, setSelectedID, setOpenTabsId, openTabsId }) => {
    function handleclick() {
        setIsSideBarOpen(prev => !prev)
    }
    return (
        <div
            className={`bg-zinc-900 h-12 border-b border-zinc-800 flex items-center min-w-0 transition-all duration-200 ${isSideBarOpen ? "pl-0" : "pl-13"
                }`}
        >
            <button
                onClick={handleclick}
                className='p-2 text-zinc-400 rounded-md transition-colors duration-150 hover:bg-zinc-800 hover:text-white'
            >
                IIIIII
            </button>

            {openTabsId.map((id, index) => {
                const note = Notes.find(n => n.id === id)
                  if (!note) return null

                return (
                    <FileTab
                        key={index}
                        note={note}
                        setSelectedID={setSelectedID}
                        setOpenTabsId={setOpenTabsId}
                    />
                )
            })}

        </div>
    )
}

export default TopBar
