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
        const {QRcodeName,QRLink,QRLinkTitle,QRcodeSvg,svgSize,qrcodeSvgStyle,
        titleSvg,titleSvgSize,titleSvgStyle,titleClick} = this.props
        return (
            <div className={cx(styles.wrapDivStyle,'flexbox','space-between')}>
                <div className={styles.infoDivStyle}>
                    <h1 className={styles.QRcodeNameStyle}>{QRcodeName}</h1>
                    <div className={cx('flexbox','items-center',styles.linkDiv)}
                        onClick={titleClick}>
                    <a href={QRLink} className={styles.QRLinkTitleStyle}>{QRLinkTitle}</a>
                    <Svg paths={[titleSvg]}
                        size={[titleSvgSize,titleSvgSize]}
                        style={titleSvgStyle}/>
                    </div>
                </div>
                <div className={cx('flexbox','items-center')} style={{position:'relative'}}>
                    <Svg paths={[QRcodeSvg]}
                        size={[svgSize,svgSize]}
                        style={qrcodeSvgStyle}/>
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
    svgSize:PropTypes.number,
    titleSvg:PropTypes.string,
    titleSvgSize:PropTypes.number,
    titleSvgStyle:PropTypes.object,
    qrcodeSvgStyle:PropTypes.object,
    titleClick:PropTypes.func
}
export default QRcodeBar
