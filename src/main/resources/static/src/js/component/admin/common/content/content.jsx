import React from 'react'


class Content extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        const {children} = this.props
        return (
            <div className={this.props.className}
                style={{
                    padding:'20px',
                    overflow:'auto'
                }}>
                {this.renderChildren(children)}
            </div>
        )
    }
    renderChildren(children){
        const childsNode=children.map((child,i)=>{
            if (i==1) {
                return (
                    <div key={i} style={{width:'100%',marginTop:'30px'}}>
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
