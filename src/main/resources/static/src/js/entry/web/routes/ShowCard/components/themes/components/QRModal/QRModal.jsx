import React,{PropTypes} from 'react'

import styles from './QRModal.css'

import SvgIcon from 'SvgIcon'
import icons from './icons.js'

class QRModal extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        const {title,desc,hide,image} = this.props
        return (
            <section className={styles.stage}>
                <div className={styles.close} onClick={hide}>
                    <SvgIcon {...icons.close} />
                </div>

                <div className={styles.header}>
                    <h1 className={styles.title}>{title}</h1>
                    <p className={styles.desc}>{desc}</p>
                </div>

                <div className={styles.body}>
                    <img src={image.path} alt={image.name} className={styles.img}/>
                </div>
            </section>
        )
    }
}
QRModal.defaultProps={
    title:'长按二维码',
    desc:'选择“识别图中二维码”'
}
QRModal.propTypes={
    title:PropTypes.string,
    desc:PropTypes.string,
    hide:PropTypes.func,
    image:PropTypes.object.isRequired
}
module.exports = QRModal
