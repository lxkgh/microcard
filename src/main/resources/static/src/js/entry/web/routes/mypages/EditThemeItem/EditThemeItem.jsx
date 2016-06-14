import React,{PropTypes} from 'react'
// import Button from 'webfront.Button'
import styles from './editThemeItem.css'
// import cx from 'classnames'
import {withRouter} from 'react-router'
import Theme2Header from 'webfront.theme2Header'
import EditIcon from 'webfront.EditIcon'
import themeDefaultConfig from './themeDefaultConfig.js'
import request from 'superagent'
import ROUTES,{Prefixs} from 'web.Config'
import {webErrHandle} from 'ErrHandles'
import Messenger from 'web.Messenger'
import Auth from 'Auth'
import _ from 'lodash'

class EditThemeItem extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            active:false,
            currentTheme:0,
            currentThemeConfig:null,
            commomIconStyle:{},
            selectIcon:'',
            EditIconTitle:'',
            title:'',
            website:'',
            activeIcon:null
        }
    }
    componentWillMount() {
        if(this.props.location.state.code==2){
            const theme = themeDefaultConfig.theme2Header
            request.get(`${Prefixs.usercard}/gettheme`)
            .then((res)=>{
                const data = JSON.parse(res.text)
                if (data.success) {
                    const icons =data.data.themeInfo.icons
                    if(_.size(icons)==6){
                        this.setState({
                            currentTheme:2,
                            commomIconStyle:theme.commomIconStyle,
                            currentThemeConfig:{
                                Svg1:this.merge(theme.Svg1,icons[0]),
                                Svg2:this.merge(theme.Svg2,icons[1]),
                                Svg3:this.merge(theme.Svg3,icons[2]),
                                Svg4:this.merge(theme.Svg4,icons[3]),
                                Svg5:this.merge(theme.Svg5,icons[4]),
                                Svg6:this.merge(theme.Svg6,icons[5])
                            }
                        })}else{
                        this.setState({
                            currentTheme:2,
                            commomIconStyle:theme.commomIconStyle,
                            currentThemeConfig:{
                                Svg1:theme.Svg1,
                                Svg2:theme.Svg2,
                                Svg3:theme.Svg3,
                                Svg4:theme.Svg4,
                                Svg5:theme.Svg5,
                                Svg6:theme.Svg6
                            }
                        })
                    }
                }else{
                    this.setState({
                        currentTheme:2,
                        commomIconStyle:theme.commomIconStyle,
                        currentThemeConfig:{
                            Svg1:theme.Svg1,
                            Svg2:theme.Svg2,
                            Svg3:theme.Svg3,
                            Svg4:theme.Svg4,
                            Svg5:theme.Svg5,
                            Svg6:theme.Svg6
                        }
                    })
                }
            },webErrHandle)
        }
    }
    render(){
        const{currentThemeConfig,commomIconStyle,active,activeIcon}=this.state
        return(
            <div className= {styles.pageCont}>
                <div className={styles.wrapThemeEdit}>
                    {
                        currentThemeConfig?
                            <Theme2Header
                                clickSvg={this.clickTheme2Svg}
                                currentThemeConfig={currentThemeConfig}
                                commomIconStyle={commomIconStyle}
                            />:null
                    }
                    <a
                        className={styles.submitBtn}
                        onClick={()=>{this.clickSubmitTheme()}}>
                        保存主题
                    </a>
                    {
                        currentThemeConfig?
                            <EditIcon
                                active={active}
                                clickCloseBtn={this.clickCloseBtn}
                                activeIcon={currentThemeConfig[activeIcon]}
                                editIconSubmit={this.editIconSubmit}
                            />:null
                    }
                </div>
            </div>
        )
    }
    editIconSubmit=(obj)=>{
        const {currentThemeConfig} = this.state
        currentThemeConfig[this.state.activeIcon].title=obj.title
        currentThemeConfig[this.state.activeIcon].website=obj.website
        this.setState({
            currentThemeConfig:currentThemeConfig,
            active:false
        })
    }
    clickTheme2Svg=(activeIcon)=>{
        this.setState({
            active:true,
            activeIcon:activeIcon
        })
    }
    clickCloseBtn=()=>{
        this.setState({
            active:!this.state.active
        })
    }
    merge=(defaultTheme,dbTheme)=>{
        if(_.get(dbTheme,'title')==''){
            dbTheme.title=_.merge(dbTheme.title,defaultTheme.title)
        }
        if(_.get(dbTheme,'paths')==''){
            dbTheme.paths=_.merge(dbTheme.paths,defaultTheme.paths)
        }
        if(_.get(dbTheme,'website')==''){
            dbTheme.website=_.merge(dbTheme.website,defaultTheme.website)
        }
        return dbTheme
    }
    transformTheme=(code)=>{
        const theme = {}
        const {currentThemeConfig} = this.state
        theme['code'] = this.state.currentTheme
        if(code==2){
            const Icons = ['Svg1','Svg2','Svg3','Svg4','Svg5','Svg6']
            theme['themeInfo'] = {
                icons:
                    Icons.map(function(icon){
                        return {
                            number:icon,
                            website:currentThemeConfig[icon].website,
                            title:currentThemeConfig[icon].title,
                            paths:currentThemeConfig[icon].paths
                        }
                    })
            }
        }
        return theme
    }
    clickSubmitTheme=()=>{
        const theme=this.transformTheme(this.state.currentTheme)
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
EditThemeItem.propTypes={
    location:PropTypes.object
}
module.exports=withRouter(EditThemeItem)
