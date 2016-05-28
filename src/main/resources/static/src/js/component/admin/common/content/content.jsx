import React from 'react'
import cx from 'classnames'
import styles from './content.css'

class Content extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        const {children,className} = this.props
        return (
            <div className={cx(styles.content,className)}>
                {this.renderChildren(children)}
            </div>
        )
    }
    renderChildren(children){
        const childsNode=children.map((child,i)=>{
            if (i==1) {
                return (
                    <div key={i} style={{width:'100%',margin:'20px 0'}}>
                        {child}
                    </div>
                )
            }
            return child
        })
        return childsNode
    }
}
export default Content
