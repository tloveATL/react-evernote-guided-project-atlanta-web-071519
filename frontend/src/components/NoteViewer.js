import React, { Fragment } from 'react';

const NoteViewer = (props) => {
  return (
    <Fragment>
      <h2>{props.selectedNote.title}</h2>
      <p>{props.selectedNote.body}</p>
      <button id={props.id} onClick={(e) => props.editNote(e, props.selectedNote)}>Edit</button>
    </Fragment>
  );
}

export default NoteViewer;
