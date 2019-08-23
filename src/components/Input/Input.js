import React from 'react';
import './Input.sass';

function Input(props) {
  return (
    <button
      className={props.className}
      onClick={() => alert('It\'s alive, alive!')}
    >
      {props.value}
    </button>
  );
}

export default Input;