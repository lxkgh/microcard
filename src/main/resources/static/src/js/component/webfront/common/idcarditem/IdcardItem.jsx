import React,{PropTypes} from 'react'
import styles from './IdcardItem.css'
import SwitchButton from 'webfront.SwitchButton'
import cx from 'classnames'
class IdcardItem extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value:''
        }
    }
    render() {
        const {switchButtonProps} = this.props
        return (
            <li className={cx(styles.li,'flexbox','items-center','space-between')}>
                <label className={styles.label}>{this.props.tagName}</label>
                <input className={styles.InputItem}
                    placeholder={this.props.defaultInfo}
                    type = {this.props.type}
                    value = {this.props.value}
                    onChange = {this.props.onChange}/>
                <SwitchButton {...switchButtonProps}/>
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
    switchButtonProps:PropTypes.object
}
export default IdcardItem
