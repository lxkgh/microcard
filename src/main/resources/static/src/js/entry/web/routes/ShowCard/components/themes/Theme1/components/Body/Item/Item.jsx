import React from 'react'

import styles from './Item.css'
import cx from 'classnames'

class Item extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        const {children,className,style,onClick} = this.props
        return (
            <div className={cx(styles.item,className)} style={style}
                onClick={(e)=>{this.onClick(e,onClick)}}>
                <div>{children[0]}</div>
                <div style={{flex:1}}/>
                <div>{children[1]}</div>
                <div>{children[2]}</div>
            </div>
        )
    }
    onClick=(e,onClick)=>{
        if (onClick) {
            onClick(e)
        }
    }
}
module.exports=Item
