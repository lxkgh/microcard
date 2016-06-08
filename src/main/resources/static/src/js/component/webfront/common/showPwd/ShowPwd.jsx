import React,{PropTypes} from 'react'
import Svg from 'SvgIcon'
import fileSvgIcons from './showPwdSvg.js'
class ShowPwd extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            visible:false
        }
    }
    render(){
        const {divStyle,iconSize,iconStyle} = this.props
        const {visible} = this.state
        return(
            <div style={divStyle} onClick={this.props.onClick}>
                <Svg paths={visible?[fileSvgIcons.pwdVisible]:[fileSvgIcons.pwdInvisible]}
                    size={[iconSize,iconSize]}
                    style={iconStyle}/>
            </div>
        )
    }
}

ShowPwd.propTypes={
    divStyle:PropTypes.object,
    iconStyle:PropTypes.object,
    iconSize:PropTypes.number,
    onClick:PropTypes.func
}
export default ShowPwd
