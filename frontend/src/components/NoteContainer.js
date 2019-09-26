import React, { Component, Fragment } from 'react';
import Search from './Search';
import Sidebar from './Sidebar';
import Content from './Content';

class NoteContainer extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      allNotes: [],
      selectedNote: []
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
  
  render() {
    return (
      <Fragment>
        <Search />
        <div className='container'>
          <Sidebar allNotes={this.state.allNotes}/>
          <Content />
        </div>
      </Fragment>
    );
  }
}

export default NoteContainer;
