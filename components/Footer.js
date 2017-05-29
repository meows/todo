import React       from 'react'
import { connect } from 'react-redux'

import T           from '../state/types'
import A           from '../state/actions'
import D           from '../state/derive'

// -----------------------------------------------------------------------------
// Components

function Footer({ all, current, done, clear, view, all_done }) {
   const same = (fn) => fn.name === view
   const clearButton = <button type="button" onClick={clear} disabled={same(clear)}>Clear</button>

   return (
      <footer>
         <button type="button" onClick={all}     disabled={same(all)}>All</button>
         <button type="button" onClick={current} disabled={same(current)}>Current</button>
         <button type="button" onClick={done}    disabled={same(done)}>Done</button>
         {
            all_done && view === 'done' ? clearButton : null
         }
      </footer>
   )
}

// -----------------------------------------------------------------------------
// Connection

const mapProps = (state) => ({
   view: D.footerVisibility(state.view),
   all_done: state.todos.filter(todo => todo.done).length !== 0
})

const mapDispatch = (dispatch) => ({
   all     : () => dispatch(A.goSee(T.VIEW_ALL)),
   current : () => dispatch(A.goSee(T.VIEW_CURRENT)),
   done    : () => dispatch(A.goSee(T.VIEW_DONE)),
   clear   : () => dispatch(A.todoClear())
})

const Connected = connect(mapProps, mapDispatch)(Footer)

export default Connected