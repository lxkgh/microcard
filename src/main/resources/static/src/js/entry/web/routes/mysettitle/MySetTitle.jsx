import React from 'react'

import Topbar from 'topbar'
import styles from './MySetTitle.css'

class MySetTitle extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }

    changeSign(e){
        this.setState({
            sign:e.target.value
        })
    }
    render(){
        const topbarProps = {
            desc:'设置标题'
        }
        return(
            <div className= {styles.wrapDivStyle}>
                <Topbar {...topbarProps}/>
                <div className={styles.content}>
                    <div className = {styles.setHead}>
                        <section className={styles.sectionStyle}>
                            <h1 className={styles.h1Style}>设置名片分享标题</h1>
                            <textarea className={styles.title}>
                            </textarea>
                            <p className={styles.tips}>字数不超过30个字</p>
                            <h1 className={styles.h1Style}>分享摘要</h1>
                            <textarea className={styles.nutshell}>
                            </textarea>
                            <p className={styles.tips}>字数不超过60个字</p>
                            <p className={styles.pbtn}>
                                <a className={styles.svbtn}>保存</a>
                            </p>
                        </section>
                        <div className={styles.msg}>
                            <span className={styles.spanStyle}>如何使用微信微名片</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
module.exports=MySetTitle
