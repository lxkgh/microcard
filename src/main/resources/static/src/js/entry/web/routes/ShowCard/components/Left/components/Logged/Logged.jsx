import React from 'react'

import background from './backround.jpg'

import styles from './Logged.css'
import SvgIcon from 'SvgIcon'
import svgIcons from './svgIcons.js'

class Logged extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className={styles.logged}>
                <div className={styles.header}>
                    <div className={styles.userIcon}>
                        <img width="50" height="50" src = {background}
                            style={{borderRadius:'25px'}}/>
                    </div>
                    <div style={{color:'#c5c9d2',fontSize:'1.8rem',paddingLeft:'10px'}}>
                        {'Molly'}
                    </div>
                    <div className={styles.flex}/>
                    <div className={styles.message}>
                        <SvgIcon {...svgIcons.message}/>
                    </div>
                </div>

                <div className={styles.body}>
                    <div className={styles.item}>
                        <SvgIcon {...svgIcons.mycard} />
                        <div>{'我的名片'}</div>
                    </div>
                    <div className={styles.item}>
                        <SvgIcon {...svgIcons.editcard} />
                        <div>{'编辑名片'}</div>
                    </div>
                    <div className={styles.item}>
                        <SvgIcon {...svgIcons.contacts} />
                        <div>{'通讯录'}</div>
                    </div>
                    <div className={styles.item}>
                        <SvgIcon {...svgIcons.wallet} />
                        <div>{'我的钱包'}</div>
                    </div>
                    <div className={styles.item}>
                        <SvgIcon {...svgIcons.pos} />
                        <div>{'手机pos机'}</div>
                    </div>
                    <div className={styles.item}>
                        <SvgIcon {...svgIcons.shopping} />
                        <div>{'我的v店'}</div>
                    </div>
                    <div className={styles.item}>
                        <SvgIcon {...svgIcons.friends} />
                        <div>{'我的圈子'}</div>
                    </div>
                    <div className={styles.item}>
                        <SvgIcon {...svgIcons.micropage} />
                        <div>{'微单页'}</div>
                    </div>
                    <div className={styles.item}>
                        <SvgIcon {...svgIcons.link} />
                        <div>{'微链接'}</div>
                    </div>
                    <div className={styles.item}>
                        <SvgIcon {...svgIcons.more} />
                        <div>{'更多'}</div>
                    </div>
                </div>

                <div className={styles.footer}>
                    <div className={styles.search}>
                        <SvgIcon {...svgIcons.search} />
                        <div>{'企业搜索'}</div>
                    </div>
                    <div className={styles.flex}/>
                    <div className={styles.exit}>
                        <SvgIcon {...svgIcons.exit} />
                        <div>{'退出'}</div>
                    </div>
                </div>
            </div>
        )
    }
}

module.exports = Logged
