import React from 'react'
import styles from './useMicrocard.css'
import {withRouter} from 'react-router'
import logo from '../webchatQrcode/logo.png'
import txt from './txt.js'
// import webchatPic from './webchatPic.png'
// import webchatPic2 from './webchatPic2.png'
import pic3 from './pic3.jpg'
import pic2 from './pic2.jpeg'
import pic1 from './pic1.jpg'
import pic0 from './pic0.jpg'
class UseMicrocard extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className={styles.pageCont}>
                <div className={styles.inner}>
                    <div className={styles.topTitle}>
                        <h2 className={styles.title}>怎样使用微名片</h2>
                    </div>
                    <div className={styles.logoCont}>
                        <img src={logo} alt="丰享logo"/>
                    </div>
                    <div className={styles.editShow}>
                        <div className={styles.showTxt}>
                            <pre className={styles.preTxt1}>
                                {txt.preTxt1}
                            </pre>
                        </div>
                    </div>
                    <div className={styles.editShow}>
                        <div className={styles.showTxt}>
                            <pre className={styles.preTxt2}>
                                {txt.preTxt2}
                            </pre>
                        </div>
                    </div>
                    <div className={styles.picCont}>
                        <img
                            src={pic0}
                            alt="标题图片3"
                            style={{width:'100%',height:'100%'}}/>
                    </div>
                    <div className={styles.editShow}>
                        <div className={styles.showTxt}>
                            <pre className={styles.preTxt1}>
                                {txt.preTxt3}
                            </pre>
                        </div>
                    </div>
                    <div className={styles.editShow}>
                        <div className={styles.showTxt}>
                            <pre className={styles.preTxt1}>
                                {txt.preTxt4}
                            </pre>
                        </div>
                    </div>
                    <div className={styles.picCont}>
                        <img
                            src={pic1}
                            alt="标题图片3"
                            style={{width:'100%',height:'100%'}}/>
                    </div>
                    <div className={styles.editShow}>
                        <div className={styles.showTxt}>
                            <pre className={styles.preTxt2}>
                                {txt.preTxt5}
                            </pre>
                        </div>
                    </div>
                    <div className={styles.editShow}>
                        <div className={styles.showTxt}>
                            <pre className={styles.preTxt1}>
                                {txt.preTxt6}
                            </pre>
                        </div>
                    </div>
                    <div className={styles.editShow}>
                        <div className={styles.showTxt}>
                            <pre className={styles.preTxt1}>
                                {txt.preTxt7}
                            </pre>
                        </div>
                    </div>
                    <div className={styles.editShow}>
                        <div className={styles.showTxt}>
                            <pre className={styles.preTxt1}>
                                {txt.preTxt7}
                            </pre>
                        </div>
                    </div>
                    <div className={styles.picCont}>
                        <img
                            src={pic2}
                            alt="标题图片3"
                            style={{width:'100%',height:'100%'}}/>
                    </div>
                    <div className={styles.editShow}>
                        <div className={styles.showTxt}>
                            <pre className={styles.preTxt2}>
                                {txt.preTxt9}
                            </pre>
                        </div>
                    </div>
                    <div className={styles.editShow}>
                        <div className={styles.showTxt}>
                            <pre className={styles.preTxt1}>
                                {txt.preTxt10}
                            </pre>
                        </div>
                    </div>
                    <div className={styles.editShow}>
                        <div className={styles.showTxt}>
                            <pre className={styles.preTxt1}>
                                {txt.preTxt11}
                            </pre>
                        </div>
                    </div>
                    <div className={styles.picCont}>
                        <img
                            src={pic3}
                            alt="标题图片3"
                            style={{width:'100%',height:'100%'}}/>
                    </div>
                    <div className={styles.editShow}>
                        <div className={styles.showTxt}>
                            <pre className={styles.preTxt2}>
                                {txt.preTxt12}
                            </pre>
                        </div>
                    </div>
                    <div className={styles.editShow}>
                        <div className={styles.showTxt}>
                            <pre className={styles.preTxt1}>
                                {txt.preTxt13}
                            </pre>
                        </div>
                    </div>
                    <div className={styles.editShow}>
                        <div className={styles.showTxt}>
                            <pre className={styles.preTxt1}>
                                {txt.preTxt14}
                            </pre>
                        </div>
                    </div>
                    <div className={styles.editShow}>
                        <div className={styles.showTxt}>
                            <pre className={styles.preTxt1}>
                                {txt.preTxt15}
                            </pre>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

module.exports=withRouter(UseMicrocard)
