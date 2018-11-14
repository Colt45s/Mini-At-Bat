import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { compose, lifecycle } from 'recompose'
import { ThunkDispatch } from 'redux-thunk'
import { RootState } from '../reducers'
import { Actions } from '../types/Actions'

export default <P>(
  s: (state: RootState) => any,
  d: (dispatch: ThunkDispatch<RootState, {}, Actions>, ownProps: P) => any,
  ...hocs: any[]
) =>
  (compose as any)(
    withRouter,
    connect(
      s,
      d
    ),
    ...hocs
  )
