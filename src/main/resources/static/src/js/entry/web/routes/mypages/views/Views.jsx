import React,{PropTypes} from 'react'
import Footerbar from 'footerbar'
class Views extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        const activeUrl = this.props.location.pathname
        const psStyle = {
            position:'absolute',
            bottom:0,
            left:0
        }
        return (
            <div>
                {this.props.children}
                <Footerbar activeUrl={activeUrl}
                    style={psStyle}/>
            </div>
        )
    }
}
Views.propTypes={
    location:PropTypes.object
}
module.exports=Views
