import React, { Component } from 'react';

export default class Default extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto text-center pt-5">
            <h2 className="display-4 text-title">404</h2>
            <h3 className="text-title">Error</h3>
            <h4>Page Not Found</h4>
            <p>The requested URL <span className="text-danger">'{this.props.location.pathname}'</span> does not exist</p>
          </div>
        </div>
      </div>
    )
  }
}
