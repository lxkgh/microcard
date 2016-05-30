import React,{PropTypes} from 'react'
import styles from './IdcardItem.css'
import ToggleButton from 'webfront.ToggleButton'
import cx from 'classnames'
class IdcardItem extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value:''
        }
    }
    render() {
        const {toggleButtonProps} = this.props
        return (
            <li className={cx(styles.li,'flexbox','items-center')}>
                <label className={styles.label}>{this.props.tagName}</label>
                <input className={styles.InputItem}
                    placeholder={this.props.defaultInfo}
                    type = {this.props.type}
                    value = {this.props.value}
                    onChange = {this.props.onChange}/>
                <ToggleButton {...toggleButtonProps}/>
            </li>
        )
    }
}
IdcardItem.propTypes = {
    tagName:PropTypes.string,
    type:PropTypes.string,
    button:PropTypes.string,
    defaultInfo:PropTypes.string,
    value:PropTypes.string,
    onChange:PropTypes.func,
    toggleButtonProps:PropTypes.object
}
export default IdcardItem
