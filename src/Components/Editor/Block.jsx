import React, { useEffect, useRef } from 'react'

const Block = ({ selectedNote, setNotes, SelectedID, focusedBlockedId, setfocusedBlockedId, block, index }) => {

    const inputref = useRef(null)

    useEffect(() => {
        if (focusedBlockedId === block.id) {
            inputref.current?.focus();
        }
    }, [focusedBlockedId, block.id]);

    function handleEnter(e) {

        if (e.key === "Enter") {
            e.preventDefault();
            const ID = crypto.randomUUID()
            setNotes(prev =>
                prev.map(note =>
                    note.id === SelectedID
                        ? {
                            ...note,
                            content: [...note.content, { id: ID, text: "" }]
                        }
                        : note
                )
            )
            setfocusedBlockedId(ID)
            return
        }

        if (e.key === "Backspace" && e.target.value === "") {
            e.preventDefault();

            setNotes(prev =>
                prev.map(note => {
                    if (note.id !== SelectedID) return note;

                    const prevBlock = note.content[index - 1];
                    const newContent = note.content.filter(
                        b => b.id !== block.id
                    );

                    if (prevBlock) {
                        setfocusedBlockedId(prevBlock.id);
                    }

                    return {
                        ...note,
                        content: newContent
                    };
                })
            );
        }
    }

    function handleChange(e){
        const newvalue = e.target.value
        setNotes(prev => 
            prev.map(note => 
                note.id === SelectedID
                ? 
                {
                    ...note,
                    content: note.content.map(b => 
                        b.id  === block.id
                        ?
                        {
                            ...b,
                            text : newvalue
                        }
                        : b
                    )
                }
                : note
            )
        )
        
    }


    return (
        <div
            className="w-full px-2 py-1 hover:bg-gray-800 rounded"

        >
            <input
                className="w-full bg-transparent outline-none text-gray-100"
                placeholder="press ' / ' for more commands"
                ref={inputref}
                onKeyDown={(e) => handleEnter(e)}
                value={block.text || ""}
                onChange={handleChange}
            />

        </div>
    )
}

export default Block
