import React,{PropTypes} from 'react'
import styles from './IdcardItem.css'

class IdcardItem extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value:''
        }
    }

    render() {
        return (
            <li className={styles.li}>
                <label className={styles.label}>{this.props.tagName}</label>
                <input className={styles.InputItem}
                    placeholder={this.props.defaultInfo}
                    type = {this.props.type}
                    value = {this.props.value}
                    onChange = {this.props.onChange}/>
                <div  className={styles.btnDiv}>
                    <label className={styles.wrapLabelStyle}>
                        <input className={styles.btn}
                            type="checkbox"/>
                    </label>
                </div>
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
    onChange:PropTypes.func
}
export default IdcardItem
