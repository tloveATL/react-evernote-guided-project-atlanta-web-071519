import React, { Fragment } from 'react';
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'

const NoteViewer = (props) => {
  dayjs.extend(relativeTime)

  return (
    <Fragment>
      <h2>{props.selectedNote.title}</h2>
      <p>{props.selectedNote.body}</p>
      <p style={{fontStyle: 'italic', color: "#646ECB"}} >created:{ " " }
      {dayjs(props.selectedNote.created_at).fromNow()}
      </p>
      <p style={{fontStyle: 'italic', color: "#646ECB"}} >last edited:{ " " }
      {dayjs(props.selectedNote.updated_at).fromNow()}
      </p>
      <button id={props.id} onClick={(e) => props.editNote(e, props.selectedNote)}>Edit</button>
    </Fragment>
  );
}

export default NoteViewer;
