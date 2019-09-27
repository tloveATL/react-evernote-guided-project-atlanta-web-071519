import React, { Component, Fragment } from 'react';
import Search from './Search';
import Sidebar from './Sidebar';
import Content from './Content';

class NoteContainer extends Component {
  state = {
      allNotes: [],
      selectedNote: [],
      noteToEdit: []
    }
  

  componentDidMount(){
    fetch("http://localhost:3000/api/v1/notes")
    .then(resp => resp.json())
    .then(noteData => 
      this.setState({
        allNotes: noteData
      }))
  }

  handleSelectNote = (e, note) => {
    e.persist()
    console.log("a note was selected!")
    this.setState({
      selectedNote: note
    })
  }

  handleEditNote = (e, note) => {
    e.persist()
    console.log("a note is being edited!")
    this.setState({
      noteToEdit: note
    })
  }

  handleSubmitEdits = (e, note) => {
    e.preventDefault()
    console.log("this edited note should be saved", note)
    fetch(`http://localhost:3000/api/v1/notes/${note.id}`, {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
    },
      body: JSON.stringify({
        title: note.title,
        body: note.body,
        user_id: note.user_id
      })
  })
  .then(response => response.json())
  .then(json => console.log(json))
}




  handleCancel = () => {
    console.log("these changes were not saved")
    this.setState({
      noteToEdit: []
    })
  }
  
  render() {
    return (
      <Fragment>
        <Search />
        <div className='container'>
          <Sidebar selectNote={this.handleSelectNote} allNotes={this.state.allNotes}/>
          <Content handleCancel={this.handleCancel} submitEdits={this.handleSubmitEdits} noteToEdit={this.state.noteToEdit} editNote={this.handleEditNote} selectedNote={this.state.selectedNote} id={this.state.selectedNote.id}/>
        </div>
      </Fragment>
    );
  }
}

export default NoteContainer;
