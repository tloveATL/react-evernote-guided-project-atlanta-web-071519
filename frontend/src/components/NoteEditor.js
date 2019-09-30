import React, { Component } from 'react'

export class NoteEditor extends Component {
 state = {
    id: this.props.noteToEdit.id,
    title: this.props.noteToEdit.title,
    body: this.props.noteToEdit.body,
    // user_id: this.props.noteToEdit.user.id
    }
  

  handleTitleChange = (e) => {
    console.log("someone is changing the title!")
    this.setState({
      title: e.target.value
    })
  }

  handleBodyChange = (e) => {
    console.log("someone is changing the body!")
    this.setState({
      body: e.target.value
    })
  }

  render(){
    return (
      <form className="note-editor">
        <input type="text" name="title" onChange={(e) => this.handleTitleChange(e)} value={this.state.title}/>
        <textarea name="body" onChange={(e) => this.handleBodyChange(e)} value={this.state.body}/>
        <div className="button-row">
          <input onClick={(e) => {this.props.submitEdits(e, this.state)}} className="button" type="submit" value="Save" />
          <button onClick= {(e) => this.props.handleCancel(e, this.props.noteToEdit.id)} type="button">Cancel</button>
          <button onClick= {(e) => this.props.deleteNote(e, this.props.noteToEdit)} type="button">Delete</button>
        </div>
      </form>
    );
  }
}

export default NoteEditor;
