import React from 'react'

const styles={
    sidenav:{
        width:'20%',
        backgroundColor:'#f0f0f0'
    }
}


class SideNav extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div style={styles.sidenav}>
                {this.props.children}
            </div>
        )
    }
}
export default SideNav
