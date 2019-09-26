import React, { Component, Fragment } from 'react';
import Search from './Search';
import Sidebar from './Sidebar';
import Content from './Content';

class NoteContainer extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      allNotes: [],
      selectedNote: [],
      noteToEdit: []
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
  
  render() {
    return (
      <Fragment>
        <Search />
        <div className='container'>
          <Sidebar selectNote={this.handleSelectNote} allNotes={this.state.allNotes}/>
          <Content noteToEdit={this.state.noteToEdit} editNote={this.handleEditNote} selectedNote={this.state.selectedNote} id={this.state.selectedNote.id}/>
        </div>
      </Fragment>
    );
  }
}

export default NoteContainer;
