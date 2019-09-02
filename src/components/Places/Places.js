import React from 'react';
import './Places.sass';
import { List } from "react-movable";

class Places extends React.Component {
  constructor(props) {
    super(props);
    this.handleMove = this.handleMove.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
  }

  handleMove(args) {
    this.props.onPointMove(args);
  }

  handleRemove(args) {
    this.props.onButtonDelete(args);
  }

  render() {
    return (
      <List
        values={this.props.places}
        onChange={({ oldIndex, newIndex }) =>
          this.handleMove({ oldIndex, newIndex })
        }
        renderList={({ children, props }) => (
          <ol
            className={this.props.className}
            {...props}
          >
            {children}
          </ol>
        )}
        renderItem={({ value, props, index }) => (
          <li
            className="App__places-item"
            {...props}
            onMouseDown={(event) => event.target.classList.add('App__places-item_grabbing')}
            onMouseUp={(event) => event.target.classList.remove('App__places-item_grabbing')}
          >
            {value.address}
            <button
              className="App__places-button"
              onClick={() => this.handleRemove(index)}
            >
              &#10006;
            </button>
          </li>
        )}
      />
    );
  }
}

export default Places;