import React,{PropTypes} from 'react'

import styles from './button.css'
import cx from 'classnames'

class Button extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        const {bstyle, size, children,style,onClick} = this.props
        const classes = cx(styles.btn,styles[bstyle],styles[size])
        return (
            <button className={classes} style={style} onClick={onClick}>{children}</button>
        )
    }
}

Button.defaultProps={
    bstyle:'default',
    size:'default'
}

Button.propTypes={
    bstyle:PropTypes.oneOf(['default','primary','success','info','warning','danger']),
    size:PropTypes.oneOf(['lg','default','sm','xs']),
    onClick:PropTypes.func
}

export default Button
