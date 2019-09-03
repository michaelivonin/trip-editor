import React from 'react';
import './Input.sass';

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(args) {
    this.props.onInputChange(args);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onInputSubmit();
  }

  render() {
    return (
      <form
        className="App__form"
        onSubmit={this.handleSubmit}
      >
        <label>
          <input
            className={this.props.className}
            type="text"
            autoFocus
            placeholder={this.props.placeholder}
            value={this.props.value}
            onChange={this.handleChange}
          />
        </label>
      </form>
    );
  }
}

export default Input;