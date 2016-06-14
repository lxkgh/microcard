import React from 'react'
import Button from 'webfront.Button'
import styles from './themeStore.css'
import cx from 'classnames'
import Imgbox from 'webfront.Imgbox'
import theme1Img from './主题1.jpg'
import theme2Img from './主题2.jpg'
import Messenger from 'web.Messenger'
import request from 'superagent'
import ROUTES,{Prefixs} from 'web.Config'
import {webErrHandle} from 'ErrHandles'
import {withRouter} from 'react-router'
import Auth from 'Auth'
class ThemeStore extends React.Component{
    constructor(props){
        super(props);
        this.state={
            activeTheme:1,
            isSelectedPic:true,
            themeCode:''
        }
    }
    render(){
        const {isSelectedPic} = this.state
        const theme1Props = {
            src:theme1Img,
            size:[150,200],
            isSelected:isSelectedPic
        }
        const theme2Props = {
            src:theme2Img,
            size:[150,200],
            isSelected:!isSelectedPic
        }
        return(
            <div>
                <div className= {styles.pageCont}>
                    <div className={styles.themeBox}>
                        <div className={cx('flexbox','wrap')}>
                            <Imgbox
                                {...theme1Props}
                                onClick={()=>{this.clickNormalTheme()}}>
                                <div className={styles.themeName}>
                                    免费主题
                                </div>
                            </Imgbox>
                            <Imgbox
                                {...theme2Props}
                                onClick={()=>{this.clickVipFerrisWheel()}}
                            >
                                <div className={styles.themeName}>
                                    摩天轮
                                </div>
                            </Imgbox>
                        </div>
                    </div>
                </div>
                <div className = {styles.footer}>
                    <Button onClick={()=>{this.submitBtn()}}>
                        <h2>
                            使用主题
                        </h2>
                    </Button>
                </div>
            </div>
        )
    }
    clickNormalTheme=()=>{
        this.setState({
            isSelectedPic:!this.state.isSelectedPic
        })
        return this.state.isSelectedPic?null:Messenger.showMsg({
            msg:'免费主题，部分功能受到限制'
        })
    }
    clickVipFerrisWheel=()=>{
        this.setState({
            activeTheme:2
        },()=>{
            // request.put(`${Prefixs.usercard}/sorttheme`+
            //     `?code=${this.state.activeTheme}`)
            // .then((res)=>{
            //     const data = JSON.parse(res.text)
            //     Messenger.showMsg({
            //         msg:data.desc
            //     })
            //     if (data.success) {
            this.props.router.push({pathname:ROUTES.editthemeitem,
                                    query:{},
                                    state:{
                                        code:this.state.activeTheme
                                    }})
            //     }
            // },webErrHandle)
        })
    }
    submitBtn=()=>{
        const theme = {
            code:this.state.activeTheme,
            themeInfo:{
                icons:[{
                    number:'101',
                    website:'',
                    title:''
                }]
            }
        }
        request.put(`${Prefixs.usercard}/settheme`)
        .send(theme)
        .then((res)=>{
            const data = JSON.parse(res.text)
            Messenger.showMsg({
                msg:data.desc
            })
            if (data.success) {
                this.setState({
                    themeCode:this.state.activeTheme
                })
                this.props.router.push(`${ROUTES.showcard}/${Auth.getUserId()}`)
            }
        },webErrHandle)

    }
}

module.exports=withRouter(ThemeStore)
