import React, {PropTypes} from 'react'

import styles from './Header.css'
import SvgIcon from 'SvgIcon'
import svgIcons from 'web.ShowCardIcons'
class Header extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        const {children,img} = this.props
        return (
            <div className={styles.header}>
                <img className={styles.headerIcon}
                    src={img}/>
                <div className={styles.user}>
                    <div className={styles.userName}>{children[0]}</div>
                    <div>{children[1]}</div>
                </div>
                <div style={{flex:1}}></div>
                <div style={{marginRight:20}}>
                    <div className={styles.visitIcon}>
                        <SvgIcon {...svgIcons.users} style={{fill:'#fff'}}/>
                    </div>
                    <div className={styles.visitNum}>{children[2]}</div>
                </div>
            </div>
        )
    }
}
Header.propTypes={
    img:PropTypes.string.isRequired
}
module.exports = Header
