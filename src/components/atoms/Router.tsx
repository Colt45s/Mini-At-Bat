import * as React from 'react'
import { withRouter } from 'react-router-dom'

type Props = {
  search: () => void
  location: any
}

const Router: any = (Component: any) => {
  return class extends React.Component<Props> {
    componentDidUpdate(prevProps: Props) {
      if (prevProps.location !== this.props.location) {
        this.props.search()
      }
    }

    componentDidMount() {
      this.props.search()
    }

    render() {
      return <Component {...this.props} />
    }
  }
}

export default withRouter(Router)
