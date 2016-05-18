import React,{PropTypes} from 'react'

var styles={
    input:{
        WebkitAppearance: 'none',
        appearance: 'none',
        outline: 'none',
        border: 0,
        background: '#fff',
        width: '100%',
        padding: '15px 10px 15px 110px',
        fontSize: '1.4rem'
    },
    button:{
        position: 'absolute',
        top: '3px',
        right: '1px',
        paddingRight: '10px',
        height: '38px',
        color: '#1f8ff3',
        outline: 'none',
        border: 'none',
        backgroundColor: '#fff',
        borderRadius: '0 5px 5px 0',
        fontSize: '1.4rem'
    },
    li:{
        listStyle:'none',
        outside:'none',
        position: 'relative',
        background: '#fff',
        width: '100%',
        borderBottom: 'solid 1px #eaeaea'
    },
    label:{
        color: '#000',
        fontSize: '1.4rem',
        position: 'absolute',
        left: '12px',
        top: '50%',
        marginTop: '-7px'
    }
}

class Input extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value:''
        }
    }

    render() {
        return (
            <li style={styles.li}>
                <label style={styles.label}>{this.props.tagName}</label>
                <input style={styles.input}
                    placeholder={this.props.defaultInfo}
                    type = {this.props.type}
                    value = {this.props.value}
                    onChange = {this.props.onChange}/>
                <button style={styles.button}>{this.props.button}</button>
            </li>
        )
    }
}
Input.propTypes = {
    tagName:PropTypes.string,
    type:PropTypes.string,
    button:PropTypes.string,
    defaultInfo:PropTypes.string,
    value:PropTypes.string,
    onChange:PropTypes.func
}
export default Input
