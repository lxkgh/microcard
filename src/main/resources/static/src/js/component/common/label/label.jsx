import React from 'react'

const styles={
    label:{
        display: 'inline-block',
        width: '100%',
        fontWeight: '700',
        height: '34px',
        paddingLeft:'10px',
        lineHeight: '34px'
    }
}

class Label extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <label style={styles.label}>{this.props.children}</label>
        )
    }
}
export default Label
