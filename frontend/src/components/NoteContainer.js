import React, { Component, Fragment } from 'react';
import Search from './Search';
import Sidebar from './Sidebar';
import Content from './Content';

class NoteContainer extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      allNotes: [],
      filteredNotes: [],
      selectedNote: [],
      noteToEdit: [],
      selectedNoteID: null,
      searchInput: ""
    }
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
      selectedNote: note,
      noteToEdit: [],
      selectedNoteID: note.id
    })
  }

  findNote = () => {
    return this.state.allNotes.find(note => note.id === this.state.selectedNoteID)
  }

  handleSearchInput = (e) => {
    console.log("search results", e.target.value)
    this.setState({
      searchInput: e.target.value
    })
  }

  filteredDisplay = () => {
    return this.state.allNotes.filter(note =>
      note.title.toLowerCase().includes(this.state.searchInput.toLowerCase()) || 
      note.body.toLowerCase().includes(this.state.searchInput.toLowerCase())
    )
  }

  handleCreateNewNote = (e) => {
    e.persist()
    console.log("a new note should be created!", e)
    debugger;
    const blankNote = {
      title: "Post Title",
      body: "Click to select and then click 'Edit'",
      user_id: this.state.selectedNoteID
      }
    fetch("http://localhost:3000/api/v1/notes", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
    },
      body: JSON.stringify(blankNote)
  })
  .then(response => response.json())
  .then(newNote => {
    this.setState({
    allNotes: [...this.state.allNotes, newNote]
  })
  })
  }
  handleEditNote = (e, note) => {
    e.persist()
    console.log("a note is being edited!")
    this.setState({
      noteToEdit: note,
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
  .then(newNote => {
    const copyNotes = [...this.state.allNotes]
    const findEditedNote = this.findNote()
    const index = copyNotes.indexOf(findEditedNote)
    copyNotes[index] = newNote
    this.setState({
    allNotes: copyNotes,
    selectedNote: newNote,
    noteToEdit: []
  })
})
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
        <Search handleSearchInput={this.handleSearchInput}/>
        <div className='container'>
          <Sidebar createNote={this.handleCreateNewNote} selectNote={this.handleSelectNote} notes={this.filteredDisplay()}/>
          <Content selectedNoteID={this.state.selectedNoteID} handleCancel={this.handleCancel} submitEdits={this.handleSubmitEdits} noteToEdit={this.state.noteToEdit} editNote={this.handleEditNote} selectedNote={this.state.selectedNote} id={this.state.selectedNote.id}/>
        </div>
      </Fragment>
    );
  }
}

export default NoteContainer;
