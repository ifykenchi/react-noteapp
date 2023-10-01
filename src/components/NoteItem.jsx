import React from 'react'
import { Link } from 'react-router-dom'

const NoteItem = ({note}) => {
  return (
    <Link to={`/edit-note/${note.id}`}></Link>
  )
}

export default NoteItem