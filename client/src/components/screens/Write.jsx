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
      submitted: false
    };
    this.setDomEditorRef = ref => this.domEditor = ref;

  }
  // FOR CURSOR ON EDITOR
  componentDidMount() {
    this.domEditor.focus()
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
        <div className="submit" onClick={this.onSubmit}>
          <svg
            stroke={submitted ? "#0082E3" : null}
            fill={submitted ? "#0082E3" : null} width="58" height="72" viewBox="0 0 58 72" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M40.2439 22.0127C39.9416 22.0559 39.6628 22.1993 39.4528 22.4195C34.9268 26.924 31.5393 30.6412 27.2196 34.9891L22.3038 30.8647C22.1675 30.7498 22.0098 30.6626 21.8395 30.6083C21.6693 30.5541 21.49 30.5337 21.3118 30.5484C21.1336 30.5631 20.9601 30.6126 20.8013 30.694C20.6424 30.7754 20.5013 30.8872 20.386 31.0229C20.2707 31.1586 20.1835 31.3156 20.1295 31.4849C20.0754 31.6541 20.0556 31.8323 20.071 32.0092C20.0864 32.1861 20.1369 32.3582 20.2194 32.5157C20.302 32.6732 20.4151 32.8129 20.5521 32.9269L26.4286 37.865C26.6894 38.0825 27.0231 38.1946 27.3633 38.179C27.7036 38.1635 28.0254 38.0213 28.265 37.7808C33.1147 32.9542 36.5803 29.0843 41.374 24.3134C41.579 24.1156 41.716 23.8586 41.7653 23.579C41.8145 23.2994 41.7736 23.0115 41.6483 22.7564C41.523 22.5013 41.3197 22.292 41.0675 22.1584C40.8153 22.0249 40.527 21.9738 40.2439 22.0127Z" fill="#9CA7B0" />
          </svg>
        </div>
        <input
          id="title-input"
          value={this.state.poem.title}
          name="title"
          type="text"
          placeholder="Title"
          ref={this.setDomEditorRef}
          onChange={this.handleChange}
        />

        <Editor
          editorState={this.state.editorState}
          onChange={this.onChange}
          placeholder="Body"
        />
        {/* <button className="submit" onClick={this.onSubmit}>Submit</button> */}
      </div>
    );
  }
}

export default Write;
