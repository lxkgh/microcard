import React,{PropTypes} from 'react'

class Popup extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const {value} = this.props
        return (
            <div>
                <div>
                    <div>{value}</div>
                    <div></div>
                </div>
                <div></div>
            </div>
        )
    }
}
Popup.propTypes = {
    value:PropTypes.string
//     type:PropTypes.string,
//     button:PropTypes.string,
//     defaultInfo:PropTypes.string,
//     value:PropTypes.string,
//     onChange:PropTypes.func
}
export default Popup
