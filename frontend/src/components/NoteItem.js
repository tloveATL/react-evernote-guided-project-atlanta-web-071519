import React, { Component } from 'react'

export class NoteItem extends Component {

  truncate = () => this.props.note.body.length > 15 ? `${this.props.note.body.substring(0, 15)}...` : this.props.note.body

  render() {
    return (
    <li onClick={this.props.selectNote} id={this.props.id}>
    <h2 id={this.props.id}>{this.props.note.title}</h2>
    <p id={this.props.id}>{this.truncate()}</p>
    </li>
    )
  }
}

export default NoteItem


