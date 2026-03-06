import React from 'react'

const FileTab = ({note, setSelectedID}) => {

    function handleClick(){
        setSelectedID(note.id)
    }

    return (
        <div 
        className="px-3 py-1.5 text-sm text-zinc-400 rounded-md cursor-pointer transition-colors duration-150 hover:bg-zinc-800 hover:text-white"
        onClick={handleClick}
        >
            {note.title}
        </div>
    )   
}

export default FileTab
