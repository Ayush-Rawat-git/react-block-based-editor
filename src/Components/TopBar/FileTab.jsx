import React from 'react'

const FileTab = ({note, setSelectedID, setOpenTabsId}) => {

    function handleClick(){
        setSelectedID(note.id)
    }

    function removeTab(){
        setOpenTabsId(prev =>
            prev.filter((tabId) => tabId !== note.id)
        )
    }

    return (
        <div 
        className="w-32 px-3 py-1.5 text-sm text-zinc-400  cursor-pointer transition-colors duration-150 hover:bg-zinc-800 hover:text-white border-r border-gray-300 flex justify-between"
        onClick={handleClick}
        >
            <div>
               {note.title || "undefined"}
            </div>
            
            <div>
                <button 
                onClick={removeTab}
                >
                   X
                </button>
            </div>
            
        </div>
    )   
}

export default FileTab
