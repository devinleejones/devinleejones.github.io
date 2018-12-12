import React, { Fragment } from 'react'
import WOW from 'wowjs'
import Header from './header.js'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    const wow = new WOW.WOW({ live: false })
    wow.init()
  }
  render() {
    return (
      <Fragment>
        <Header />
      </Fragment>
    )
  }
}
