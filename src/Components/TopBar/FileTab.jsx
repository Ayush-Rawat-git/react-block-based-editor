import React from 'react'

const FileTab = ({note, setSelectedID}) => {

    function handleClick(){
        setSelectedID(note.id)
    }

    return (
        <div 
        className='w-30 h-full bg-gray-700 border-x border-amber-100'
        onClick={handleClick}
        >
            {note.title}
        </div>
    )   
}

export default FileTab
