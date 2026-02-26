import React, { useState } from 'react'
import Title from './Title'
import Content from './Content'

const Editor = ({SelectedID, Notes, setNotes}) => {



  return (
    <div className='flex flex-col flex-1 bg-gradient-to-br from-[#1e1e1e] to-[#191919] p-20'>
      <Title SelectedID={SelectedID} Notes={Notes}/>
      <Content SelectedID={SelectedID} Notes={Notes} setNotes={setNotes} />
    </div>
  )
}

export default Editor
