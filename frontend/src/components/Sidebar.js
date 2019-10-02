import React, { Component } from 'react';
import NoteList from './NoteList';
// import Sort from './Sort'

class Sidebar extends Component {

  

  render() {
    return (
      <div className='master-detail-element sidebar'>
        {/* <Sort handleSort={this.props.handleSort} notes={this.props.notes}/> */}
        <NoteList selectNote={this.props.selectNote} notes={this.props.notes}/>
        <button onClick={(e) => this.props.createNote(e)}>New</button>
      </div>
    );
  }
}

export default Sidebar;
