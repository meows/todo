import React       from 'react'
import PropTypes   from 'prop-types'
import { connect } from 'react-redux'

import Derive from '../state/derive'
import Action from '../state/actions'

// -----------------------------------------------------------------------------
// Components

function Todo({ todo, onClick }) {
   return (
      <li className='Todo'>
         {todo.task} {todo.done ?  ' (done)' : null}
         <button type="button" onClick={() => onClick(todo.id)}>Toggle</button>
      </li>
   )
}

function Todos({ todos, onClick }) {
   return (
      <ul id='Todos'>
         { todos.map((todo, index) => <Todo todo={todo} onClick={onClick} key={index} />) }
      </ul>
   )
}

// -----------------------------------------------------------------------------
// React Typing

Todo.PropTypes = {
   todo: PropTypes.object.isRequired,
   onClick: PropTypes.func.isRequired,
}

Todos.PropTypes = {
   todos: PropTypes.array.isRequired,
   onClick: PropTypes.func.isRequired,
}

// -----------------------------------------------------------------------------
// Connection

const mapState = (state) => ({
   todos : Derive.todoVisibility(state.todos, state.view),
   view  : state.view,
})

const mapDispatch = (dispatch) => ({
   onClick: (id) => dispatch(Action.todoToggle(id)),
})

const Connected = connect(mapState, mapDispatch)(Todos)

export default Connected