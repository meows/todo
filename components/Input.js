import React       from 'react'
import PropTypes   from 'prop-types'
import { connect } from 'react-redux'
import A           from '../state/actions'

// -----------------------------------------------------------------------------
// Component

class Input extends React.Component {
   state   = { input: '' }
   onClick = this.props.onClick

   constructor(props) { super(props) }

   render() {
      return (
         <div>
            <input value={this.state.input} onChange={this.update} name="todo_add" />
            <button type="button" onClick={this.submit}>Submit</button>
         </div>
      )
   }

   update = (event) => this.setState({
      [event.target.name]: event.target.value,
   })

   submit = () => {
      const task = this.state.input
      if (task.length === 0) { return }

      this.onClick(task)
      this.setState({ input: '' })
   }
}

// ----------------------------------------------------------------------------
// React Typing

Input.PropTypes = {
   onClick: PropTypes.func.isRequired,
}

// -----------------------------------------------------------------------------
// Connection

const mapDispatch = (dispatch) => ({
   onClick: (task) => dispatch(A.todoAdd(task))
})

const Connection = connect(null, mapDispatch)(Input)

export default Connection
