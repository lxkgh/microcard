import React,{PropTypes} from 'react'

import cx from 'classnames'

import styles from './warnmsg.css'

class WarnMsg extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        const {msg,style} = this.props
        const classes=cx(styles.msg,msg?styles.show:styles.hide)
        return (
            <div style={style} className={classes}>{msg}</div>
        )
    }
}
WarnMsg.propTypes={
    msg:PropTypes.string
}
export default WarnMsg
