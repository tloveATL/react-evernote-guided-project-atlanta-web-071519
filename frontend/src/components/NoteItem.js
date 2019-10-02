import React, { Component } from 'react'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'

export class NoteItem extends Component {

  truncate = () => this.props.note.body.length > 25 ? `${this.props.note.body.substring(0, 25)}...` : this.props.note.body

  render() {
  dayjs.extend(relativeTime)



    return (
    <li onClick={this.props.selectNote} id={this.props.id}>
    <h2 id={this.props.id}>{this.props.note.title}</h2>
    <p id={this.props.id}>{this.truncate()}</p>
    <p style={{fontStyle: 'italic', color: "#646ECB"}} >last edited:{ " " }
      {dayjs(this.props.note.updated_at).fromNow()}
    </p>
    </li>
    )
  }
}

export default NoteItem


