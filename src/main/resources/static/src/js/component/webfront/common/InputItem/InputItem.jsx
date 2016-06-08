import React,{PropTypes} from 'react'

var styles={
    InputItemShort:{
        WebkitAppearance: 'none',
        appearance: 'none',
        outline: 'none',
        border: 0,
        background: '#fff',
        width: '100%',
        padding: '15px 20px 15px 20px',
        fontSize: '1.4rem'
    },
    InputItemLong:{
        WebkitAppearance: 'none',
        appearance: 'none',
        outline: 'none',
        border: 0,
        background: '#fff',
        width: '100%',
        padding: '15px 10px 15px 120px',
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
    label:{
        color: '#000',
        fontSize: '1.4rem',
        position: 'absolute',
        left: '12px',
        top: '50%',
        marginTop: '-7px'
    }
}

class InputItem extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            tagIsShow:true
        }
    }
    componentWillMount() {
        this.setState({
            tagIsShow:this.props.hasTagName
        })
    }
    render() {
        const {tagIsShow} = this.state
        const {InputItemType,marginBottom,borderRadius} = this.props
        const liStyleLong = {
            listStyle:'none',
            outside:'none',
            position: 'relative',
            background: '#fff',
            width: '100%',
            borderBottom: 'solid 1px #eaeaea',
            marginBottom:marginBottom,
            borderRadius:borderRadius,
            overflow:'hidden'
        }
        const liStyleShort = {
            listStyle:'none',
            outside:'none',
            position: 'relative',
            background: '#fff',
            width: '100%',
            border: 'solid 1px #eaeaea',
            marginBottom:marginBottom,
            borderRadius:borderRadius,
            overflow:'hidden'
        }
        return (
            <li style={InputItemType=='long'?liStyleLong:liStyleShort}>
                {tagIsShow?
                    <label style={styles.label}>
                        {this.props.tagName}
                    </label>:null
                }
                <input style={InputItemType=='long'?styles.InputItemLong:styles.InputItemShort}
                    placeholder={this.props.defaultInfo}
                    type = {this.props.type}
                    value = {this.props.value}
                    onChange = {this.props.onChange}/>
                <button style={styles.button}>{this.props.button}</button>
            </li>
        )
    }
}
InputItem.defaultProps={
    value:'',
    InputItemType:'long',
    hasTagName:true
}
InputItem.propTypes = {
    tagName:PropTypes.string,
    type:PropTypes.string,
    button:PropTypes.string,
    defaultInfo:PropTypes.string,
    value:PropTypes.string,
    onChange:PropTypes.func,
    InputItemType:PropTypes.string,
    hasTagName:PropTypes.bool,
    marginBottom:PropTypes.string,
    borderRadius:PropTypes.string
}
export default InputItem
