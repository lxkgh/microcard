import React,{PropTypes} from 'react'
import Svg from 'SvgIcon'
import 'css.Common'
import cx from 'classnames'
import styles from './QRcodeBar.css'
class QRcodeBar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        const {QRcodeName,QRLink,QRLinkTitle,QRcodeSvg,svgSize} = this.props
        return (
            <div className={cx(styles.wrapDivStyle,'flexbox','space-between')}>
                <div className={styles.infoDivStyle}>
                    <h1 className={styles.QRcodeNameStyle}>{QRcodeName}</h1>
                    <a href={QRLink} className={styles.QRLinkTitleStyle}>{QRLinkTitle}</a>
                </div>
                <div className={cx('flexbox','items-center')} style={{position:'relative'}}>
                    <Svg paths={[QRcodeSvg]}
                        size={[svgSize,svgSize]}/>
                    {this.props.children}
                </div>
            </div>
        )
    }
}
QRcodeBar.propTypes = {
    QRcodeName:PropTypes.string,
    QRLink:PropTypes.string,
    QRLinkTitle:PropTypes.string,
    QRcodeSvg:PropTypes.string,
    svgSize:PropTypes.number
}
export default QRcodeBar
