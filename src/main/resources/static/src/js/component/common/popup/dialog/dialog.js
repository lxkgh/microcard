import React from 'react'
import ReactDOM from 'react-dom'

import styles from './dialog.css'

import Attrs from 'Attrs'

var Dialog=React.createClass({
  render: function() {
    return (
      <div ref='dialog' className={Attrs(styles.dialog,this.props.className)} style={this.props.style}>
        {this.props.children}
      </div>
    )
  },
})
export default Dialog
