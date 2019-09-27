import React, { Component } from 'react'

export class NoteEditor extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
    postTitle: props.noteToEdit.title,
    postBody: props.noteToEdit.body
    }
  }

  handleTitleChange = (e) => {
    console.log("someone is changing the title!")
    this.setState({
      postTitle: e.target.value
    })
  }

  handleBodyChange = (e) => {
    console.log("someone is changing the body!")
    this.setState({
      postBody: e.target.value
    })
  }

  render() {
    return (
      <form className="note-editor">
        <input type="text" name="title" onChange={(e) => this.handleTitleChange(e)} value={this.state.postTitle}/>
        <textarea name="body" onChange={(e) => this.handleBodyChange(e)} value={this.state.postBody}/>
        <div className="button-row">
          <input onClick={(e) => this.props.submitEdits(e, this.props.noteToEdit.id)} className="button" type="submit" value="Save" />
          <button onClick= {(e) => this.props.handleCancel(e, this.props.noteToEdit.id)} type="button">Cancel</button>
        </div>
      </form>
    );
  }
}

export default NoteEditor;
