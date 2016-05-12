import React from 'react'


class Content extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className={this.props.className}
                style={{
                    padding:'20px'
                }}>
                {this.props.children}
            </div>
        )
    }
}
export default Content
