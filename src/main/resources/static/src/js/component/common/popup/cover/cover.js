import React from 'react'

import styles from './cover.css'

var Cover=React.createClass({
  getInitialState: function() {
    return {
      display:false,
    }
  },
  render: function() {
    var className=cx(this.props.className,styles.cover,this.state.display?styles.show:styles.hide)
    return (
      <div onClick={this.clickCover} className={className} style={this.props.style}>
          {this.props.children}
      </div>
    )
  },
  clickCover:function(e){
    e.preventDefault()
    if (e.currentTarget==e.target) {
      this.setDisplay(false)
    }
  },
  setDisplay:function(bool) {
    this.setState({
      display:bool
    })
  },
})
export default Cover
