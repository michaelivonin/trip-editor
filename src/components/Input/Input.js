import React from 'react';
import './Input.sass';

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.props.onInputChange(event);
  }

  handleSubmit(event) {
    this.props.onInputSubmit();
    event.preventDefault();
  }

  render() {
    const className = this.props.className;
    const placeholder = this.props.placeholder;
    const value = this.props.value;

    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          <input
            className={className}
            type="text"
            placeholder={placeholder}
            value={value}
            onChange={this.handleChange}
          />
        </label>
      </form>

    );
  }
}

export default Input;