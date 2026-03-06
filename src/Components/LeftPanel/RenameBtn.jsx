import React from 'react'

const RenameBtn = ({ setRenameId, id}) => {

    function handleclick() {
        setRenameId(id)
    }

    return (
        <div className='text-black hover:bg-gray-300 rounded'>
            <button
                onClick={handleclick}
            >
                Rename
            </button>
        </div>
    )
}

export default RenameBtn
