import React from 'react'


const styles={
    opcolumn:{
        height:'50px',
        width:'100%',
        backgroundColor:'#f5f5f5',
        borderRadius: '3px',
        border: '1px solid #ccc',
        lineHeight:'46px',
        padding:'0 16px'
    }
}

class OpColumn extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        const {className} = this.props
        return (
            <div style={styles.opcolumn} className={className}>
                {this.props.children}
            </div>
        )
    }
}
export default OpColumn
