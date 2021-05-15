import React from 'react';

class FileInput extends React.Component {
  constructor(props) {
    super(props)
    this.onChange = this.onChange.bind(this)
  }

  onChange(e) {
    const { input: { onChange } } = this.props
    onChange(e.target.files[0])
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