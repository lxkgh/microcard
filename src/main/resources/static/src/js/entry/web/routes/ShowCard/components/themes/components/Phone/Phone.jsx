import React,{PropTypes} from 'react'

import styles from './phone.css'
import phoneImg from './phone.png'

import SvgIcon from 'SvgIcon'
import icons from './icons.js'

import cx from 'classnames'
class Phone extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        let {phoneNum,hide} = this.props
        let phoneHref = `tel:${phoneNum}`
        return (
            <section className={styles.stage}>
                <div className={styles.box}>
                    <div
                        style={{
                            width: '100%',
                            height: '200px',
                            marginTop: '10px',
                            backgroundImage:`url(${phoneImg})`}}>
                    </div>
                    <ul className={styles.ul}>
                        <li>
                            <span className={styles.span}>
                                手机
                            </span>
                            <a
                                className={styles.aStyle}
                                href={phoneHref}>
                                <div className={cx(styles.numBox,'flexbox','items-center',
                                                'space-between')}>
                                    {phoneNum}
                                    <div className={cx(styles.phoneIcon,'flexbox')}>
                                        <SvgIcon {...icons.telPhone}/>
                                    </div>
                                </div>
                            </a>
                        </li>
                    </ul>
                    <div
                        className={cx(styles.close,'flexbox','items-center','flex-center')}
                        onClick={hide}>
                        <SvgIcon {...icons.close} />
                    </div>
                </div>
            </section>
        )
    }
}
Phone.defaultProps={
    phoneNum:'0'
}
Phone.propTypes={
    phoneNum:PropTypes.string,
    hide:PropTypes.func
}
module.exports = Phone
