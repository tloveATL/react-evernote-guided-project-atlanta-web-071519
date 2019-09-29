import React from 'react';
import NoteItem from './NoteItem';

const NoteList = (props) => {
  return (
    <ul>
      {props.notes.map(note => <NoteItem key={note.id} selectNote={(e) => props.selectNote(e, note)} note={note} id={note.id} user={false} />)}
      
    </ul>
  );
}

export default NoteList;
