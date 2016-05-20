import React from 'react'


var styles={
    navitem:{
        height:'30px',
        width:'100%',
        backgroundColor:'#80dcff',
        marginTop:'-1px',
        border:'solid 1px #009547'
    }
}

class NavItem extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div style={styles.navitem} className="flexbox flex-center items-center">
                {this.props.children}
            </div>
        )
    }
}
export default NavItem
