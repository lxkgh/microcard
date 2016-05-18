import React from 'react'


const styles={
    button:{
        position: 'relative',
        display: 'inline-block',
        marginLeft: '6%',
        marginRight: '6%',
        padding: '5px 8px',
        border: '1px solid #999',
        cursor: 'pointer',
        color: '#fff',
        height:'44px',
        borderRadius: '2px',
        boxShadow: '1px 1px 3px #ccc',
        backgroundColor:'#0079fe',
        width: '87.5%',
        maxHeight:'50px'
    }
}

class Button extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <button style={styles.button} {...this.props}>
                {this.props.children}
            </button>
        )
    }
}
export default Button
