import React, { useState } from 'react'

const ChangeColor = ({ id, setNotes }) => {
    const [isColorMenu, setIsColorMenu] = useState(false)
    function OpenColors() {
        setIsColorMenu(prev => !prev)
    }
    function changeColor(id, bgcolor) {
        setNotes(prev =>
            prev.map((note) =>
                note.id === id
                    ? { ...note, bgcolor }
                    : note
            )
        )
    }
    return (
        <div className='text-black hover:bg-gray-300 rounded relative'>
            <button onClick={OpenColors}>
                Color
            </button>

            {isColorMenu && (
                <div className='absolute left-48 top-0 py-1.5 px-2 h-50 w-50 bg-white border border-gray-200 rounded-lg shadow-lg z-50'>
                    <p className='pb-1'>Background Color</p>
                    <button
                        className="flex items-center gap-2 py-0.5 w-full text-left"
                        onClick={() => changeColor(id, "bg-red-700")}
                    >
                        <div className="w-8 h-8 bg-red-200 rounded"></div>
                        <p>red Background</p>
                    </button>
                    <button
                        className="flex items-center gap-2 py-0.5 w-full text-left"
                        onClick={() => changeColor(id, "bg-pink-700")}
                    >
                        <div className="w-8 h-8 bg-pink-200 rounded"></div>
                        <p>pink Background</p>
                    </button>
                     <button
                        className="flex items-center gap-2 py-0.5 w-full text-left"
                        onClick={() => changeColor(id, "bg-orange-700")}
                    >
                        <div className="w-8 h-8 bg-orange-200 rounded"></div>
                        <p>orange Background</p>
                    </button>

                </div>
            )}


        </div>
    )
}

export default ChangeColor
