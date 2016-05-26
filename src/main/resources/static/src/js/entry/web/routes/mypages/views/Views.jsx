import React,{PropTypes} from 'react'
import Footerbar from 'footerbar'
class Views extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        const activeUrl = this.props.location.pathname
        return (
            <div>
                {this.props.children}
                <Footerbar activeUrl={activeUrl} />
            </div>
        )
    }
}
Views.propTypes={
    location:PropTypes.object
}
module.exports=Views
