import React from 'react'


const styles={
    button:{
        position: 'relative',
        display: 'inline-block',
        marginRight: '3px',
        padding: '5px 8px',
        border: '1px solid #999',
        cursor: 'pointer',
        color: '#000',
        borderRadius: '2px',
        boxShadow: '1px 1px 3px #ccc',
        backgroundColor:'#fff'
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
