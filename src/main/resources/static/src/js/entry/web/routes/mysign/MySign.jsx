import React from 'react'

import Topbar from 'topbar'
import styles from './MySign.css'
import cx from 'classnames'
import Button from 'webfront.Button'

class MySociety extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            sign:''
        }
    }

    changeSign(e){
        this.setState({
            sign:e.target.value
        })
    }
    render(){
        const topbarProps = {
            desc:'修改个人签名'
        }
        const {sign} = this.state
        return(
            <div className= {styles.wrapDivStyle}>
                <Topbar {...topbarProps}/>
                <div className= {styles.myInfoMenu}>
                    <section className="fixed">
                        <h3 className={styles.h3Style}>我的签名</h3>
                        <ul className={cx(styles.ulStyle,'fixed')}>
                            <div className={styles.wrapTextarea}>
                                <textarea className={styles.textarea}
                                    onChange={(e)=>{this.changeSign(e)}}
                                    value={sign}/>
                            </div>
                        </ul>
                        <Button>保存</Button>
                    </section>
                </div>
            </div>
        )
    }
}
module.exports=MySociety
