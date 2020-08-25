import React, { Component } from "react";
import { EditorState, Editor, convertToRaw } from "draft-js";
import { createPoem } from "../../services/poem-helpers";
import "../../styles/Write.css";

class Write extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editorState: EditorState.createEmpty(),
      poem: {
        text: "",
        user_id: props.currentUser.id,
        title: '',
        username: props.currentUser.username,
        poem_json: {},
      },
    };
  }

  handleChange = (event) => {
    const updatedField = { [event.target.name]: event.target.value };
    const editedPoem = Object.assign(this.state.poem, updatedField);
    this.setState({ poem: editedPoem });
  };
  
  onChange = (editorState) => {
    const contentState = editorState.getCurrentContent();
    const updatedField = { text: JSON.stringify(convertToRaw(contentState)) };
    Object.assign(this.state.poem, updatedField);
    this.setState({
      editorState,
    });
  };

  onSubmit = (event) => {
    event.preventDefault();
    createPoem(this.state.poem);
    this.props.history.push('/')
    window.location.reload()
  };

  render() {
    return (
      <div className='write'>
        <input id="title-input"
          value={this.state.poem.title}
          name="title"
          type="text"
          placeholder="Title"
          onChange={this.handleChange}
        />
        {console.log(this.state.poem)}
        <div className='cursor'></div>
        <Editor editorState={this.state.editorState} onChange={this.onChange} />
        <button onClick={this.onSubmit}>Submit</button>
      </div>
    );
  }
}

export default Write;
