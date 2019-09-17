import React from 'react';
import './Places.sass';
import { List } from 'react-movable';

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
        renderList={({ children, props, isDragged }) => (
          <ol
            className={this.props.className}
            {...props}
            style={{cursor: isDragged ? 'grabbing' : 'inherit'}}
          >
            {children}
          </ol>
        )}
        renderItem={({ value, props, isDragged, index }) => (
          <li
            className='App__places-item'
            {...props}
            style={{
              ...props.style,
              cursor: isDragged ? 'grabbing' : 'grab',
            }}
          >
            <div className='App__value-wrapper'>
              <div>{value.address}</div>{' '}
              <button
                className='App__places-button'
                onClick={() => this.handleRemove(index)}
              >
                &#10006;
              </button>
            </div>
          </li>
        )}
      />
    );
  }
}

export default Places;