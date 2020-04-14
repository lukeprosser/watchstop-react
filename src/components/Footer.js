import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="container text-center">
          <p className="license">WatchStop © <span className="date">
            {new Date().getFullYear()}</span></p>
        </div>
      </footer>
    )
  }
}
