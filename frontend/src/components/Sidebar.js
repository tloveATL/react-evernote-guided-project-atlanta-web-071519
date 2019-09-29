import React, { Component } from 'react';
import NoteList from './NoteList';

class Sidebar extends Component {
  render() {
    return (
      <div className='master-detail-element sidebar'>
        <NoteList selectNote={this.props.selectNote} notes={this.props.notes}/>
        <button onClick={(e) => this.props.createNote(e)}>New</button>
      </div>
    );
  }
}

export default Sidebar;
