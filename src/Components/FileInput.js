import React from 'react';

class FileInput extends React.Component {
  constructor(props) {
    super(props)
    this.onChange = this.onChange.bind(this)
  }

  getBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });
  }

  onChange = async (e) => {
    const { input: { onChange } } = this.props
    var targetFile = e.target.files[0];
    if(targetFile) {
      const val = await this.getBase64(targetFile);
      onChange(val);
    } else {
      onChange(null);
    }
  }

  render() {

    return (
      <input
        type="file"
        value={undefined}
        onChange={this.onChange}
        accept = ".pdf"
        required
      />
    )
  }
}

export default FileInput;