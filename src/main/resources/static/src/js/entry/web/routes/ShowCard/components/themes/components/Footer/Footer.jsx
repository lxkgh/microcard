import React,{PropTypes} from 'react'

import styles from './Footer.css'

import SvgIcon from 'SvgIcon'
import svgIcons from 'web.ShowCardIcons'

class Footer extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        const {clickTelPhone} = this.props
        return (
            <div className={styles.footer}>
                <div className={styles.itemWrap}>
                    <div
                        className={styles.item}
                        onClick={clickTelPhone}>
                        <SvgIcon {...svgIcons.emptyTelPhone}/>
                    </div>
                </div>
                <div className={styles.itemWrap}>
                    <div className={styles.item}>
                        <SvgIcon {...svgIcons.plus}/>
                    </div>
                </div>
                <div className={styles.itemWrap}>
                    <div className={styles.item}>
                        <SvgIcon {...svgIcons.location}/>
                    </div>
                </div>
            </div>
        )
    }
}
// <div className={styles.itemWrap}>
//     <div className={styles.item}>
//         <SvgIcon {...svgIcons.shopping}/>
//     </div>
// </div>
// <div className={styles.itemWrap}>
//     <div className={styles.item}>
//         <SvgIcon {...svgIcons.link}/>
//     </div>
// </div>

Footer.propTypes={
    clickTelPhone:PropTypes.func
}
module.exports = Footer
