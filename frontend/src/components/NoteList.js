import React from 'react';
import NoteItem from './NoteItem';

const NoteList = (props) => {
  return (
    <ul>
      {props.allNotes.map(note => <NoteItem onClick={(e) => console.log("someone wants to see/edit a note", e)} note={note} />)}
      
    </ul>
  );
}

export default NoteList;
