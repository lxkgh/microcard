import React from 'react'


var styles={
    navitem:{
        height:'30px',
        width:'100%',
        backgroundColor:'#80dcff'
    }
}

class NavItem extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div style={styles.navitem}>
                {this.props.children}
            </div>
        )
    }
}
export default NavItem
