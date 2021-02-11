import React from "react";
import axios, { post } from "axios";

class CreateProj extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      file: null,
    };
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
    this.fileUpload = this.fileUpload.bind(this);
  }
  onFormSubmit(e) {
    e.preventDefault(); // Stop form submit
    this.fileUpload(this.state.file).then((response) => {
      console.log(response.data);
    });
  }
  onChange(e) {
    this.setState({ file: e.target.files[0] });
  }
  fileUpload(file) {
    const url = "http://localhost:5000/project/v2/upload";
    const formData = new FormData();
    formData.append("zip", file);
    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };
    return post(url, formData, config, console.log(file));
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit} method="POST">
        <h1>File Upload</h1>
        <input type="file" onChange={this.onChange} name="zip" />
        <button type="submit">Upload</button>
      </form>
    );
  }
}

export default CreateProj;
