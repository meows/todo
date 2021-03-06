import React       from 'react'
import { connect } from 'react-redux'
import A           from '../state/actions'

// -----------------------------------------------------------------------------
// Component

const Todo = ({ todo, onToggle, onDelete }) => (
   <li className="Todo">
      {todo.task} {todo.done ?  ' (done) ' : null}
      <button type="button" onClick={onToggle(todo.id)}>Toggle</button>
      <button type="button" onClick={onDelete(todo.id)}>Delete</button>
   </li>
)

// -----------------------------------------------------------------------------
// Connection

const mapDispatch = (dispatch) => ({
   onToggle: (id) => () => dispatch(A.todoToggle(id)),
   onDelete: (id) => () => dispatch(A.todoDelete(id)),
})

const Connected = connect(null, mapDispatch)(Todo)

export default Connected