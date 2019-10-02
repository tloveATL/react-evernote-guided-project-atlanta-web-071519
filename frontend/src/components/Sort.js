import React, { Component } from 'react'

export class Sort extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            selectedOption: ""
        }
    }

    handleOptionChange = (e) => {
        this.setState({
        selectedOption: e.target.value
        })
    }



    render() {
        return (
    <form >

        <div className="form-check">
            <label>
                <input
                type="radio"
                name="sort-options"
                value="alphabetical"
                checked={this.state.selectedOption === "alphabetical"}
                onChange={this.handleOptionChange}
                className="form-check-input"
                />
                Alphabetical
            </label>
            </div>
    
            <div className="form-check">
            <label>
                <input
                type="radio"
                name="sort-options"
                value="updated"
                checked={this.state.selectedOption === "updated"}
                onChange={this.handleOptionChange}
                className="form-check-input"
                />
                Updated
            </label>
            </div>
    
            <div className="form-check">
            <label>
                <input
                type="radio"
                name="sort-options"
                value="created"
                checked={this.state.selectedOption === "created"}
                onChange={this.handleOptionChange}
                className="form-check-input"
                />
                Created 
            </label>
            </div>
            <div>
                <button onClick={(e) => this.props.handleSort(e, this.state.selectedOption)} type="button" className="sort-submit">
                Sort Notes
                </button>
            </div>
    </form>
            
        )
    }
}

export default Sort
