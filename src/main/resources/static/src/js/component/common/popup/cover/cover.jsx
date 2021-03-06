import React,{PropTypes} from 'react'

import cx from 'classnames'
import styles from './Cover.css'

class Cover extends React.Component {
    constructor(props) {
        super(props)
        this.state={}
    }
    render() {
        const {className,children,style} = this.props
        const {show} = this.state
        const classes=cx(className,styles.cover,show?styles.show:styles.hide)
        return (
            <div onClick={(e)=>{this.onClick(e)}}
                className={classes}
                style={style}>
                {children}
            </div>
        )
    }
    onClick=(e)=>{
        if(e.currentTarget==e.target&&this.props.autoHide){
            this.setState({
                show:false
            })
        }
    }
}
Cover.defaultProps={
    autoHide:true
}
Cover.propTypes={
    autoHide:PropTypes.bool
}
export default Cover
