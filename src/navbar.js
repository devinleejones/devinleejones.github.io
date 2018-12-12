import React, { Component } from 'react'

export default class Navbar extends Component {
  render() {
    return (
      <nav>
        <a href="#">Devin Lee-Jones</a>
        <a href="resources/devinleejones.pdf" download>
          Resume
        </a>
      </nav>
    )
  }
}
