import React from 'react'
import ReactDOM from 'react-dom'
import 'css.Common'
import styles from './register.css'
import Svg from 'SvgIcon'
import svgIcons from 'svgIcons'
import cx from 'classnames'
class Register extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div className = {styles.RegisterCont}>
                <div className = {styles.Wrap}>
                    <Svg paths ={[svgIcons.mobile]}
                    size ={[128,128]} className={cx(styles.mobileSvg,styles.svg)}/>
                    <button className={styles.loginBtn}>登入</button>
                </div>
                <div className={styles.wrapbox}>
                    <form>
                        <label className={styles.firlb}>
                            <span className={styles.areaCode}>+86</span>
                            <input type="text"
                                    id = "mobile"
                                    className = {styles.mobile}
                                    placeholder="请输入手机号"/>
                        </label>
                        <label className={styles.seclb}>
                            <input type="text"
                                    id = "code"
                                    className = {styles.checkCode}
                                    placeholder = "请输入验证码"/>
                            <input type="button"
                                    className={styles.getCheckCode}
                                    value = "| 获取验证码"/>
                        </label>
                    </form>
                </div>
            </div>
        )
    }
}
ReactDOM.render(
    <Register />,
    document.getElementById('common-body')
)
