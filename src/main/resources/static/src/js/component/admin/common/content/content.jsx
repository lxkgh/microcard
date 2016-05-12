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
                {children[0]}
                <div style={{width:'100%',marginTop:'30px'}}>
                    {children[1]}
                </div>
            </div>
        )
    }
}
export default Content
