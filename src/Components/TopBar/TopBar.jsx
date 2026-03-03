import React from 'react'
import FileTab from './FileTab'

const TopBar = ({ setIsSideBarOpen, Notes, isSideBarOpen, setSelectedID }) => {
    function handleclick() {
        setIsSideBarOpen(prev => !prev)
    }
    return (
        <div
            className={`bg-gray-500 h-10 flex min-w-0 ${isSideBarOpen ? "pl-0" : "pl-13"
                }`}
        >
            <button
                onClick={handleclick}
                className='absolute top-2 left-3 z-50 border-2 border-amber-200 bg-amber-200'
            >
                IIIIII
            </button>

            {Notes.map((note, index) =>
                <FileTab
                    key={index}
                    note={note}
                    setSelectedID={setSelectedID}
                />

    )}

                </div>
            )
            }

            export default TopBar
