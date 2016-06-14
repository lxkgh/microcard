import React,{PropTypes} from 'react'
import fileSvgIcons from './EditCardSvg.js'
import svgIcons from 'svgIcons'
import styles from './EditCard.css'
import cx from 'classnames'
import ROUTES from 'web.Config'
import messenger from 'web.Messenger'
import EditcardItem from 'webfront.EditcardItem'
class EditCard extends React.Component{
    constructor(props){
        super(props);
    }
    clickMyInfo(){
        this.context.router.push(ROUTES.editinfo)
    }
    clickMySociety(){
        this.context.router.push(ROUTES.editsociety)
    }
    clickMySign(){
        this.context.router.push(ROUTES.editsign)
    }
    clickEditTitle(){
        this.context.router.push(ROUTES.edittitle)
    }
    clickEditTheme(){
        this.context.router.push(ROUTES.themestore)
    }
    clickEditBackground(){
        this.context.router.push(ROUTES.editbkgimg)
    }
    clickEditMusic(){
        messenger.showMsg({
            msg:'该功能暂时未开放'
        })
    }
    clickEditRank(){
        messenger.showMsg({
            msg:'该功能暂时未开放'
        })
    }
    clickEditProduct(){
        messenger.showMsg({
            msg:'该功能暂时未开放'
        })
    }
    render(){
        const MenuItem1Props ={
            frontSvg:fileSvgIcons.editCard,
            frontSize:32,
            frontSvgFill:'#fff',
            frontName:'修改信息',
            afterSvg:svgIcons.rightArrow,
            afterSize:32,
            afterSvgFill:'#e5e5e5',
            bgColor:'#56abe4',
            radiusSize:'10px'
        }
        const MenuItem2Props ={
            frontSvg:fileSvgIcons.society,
            frontSize:32,
            frontSvgFill:'#fff',
            frontName:'社交信息',
            afterSvg:svgIcons.rightArrow,
            afterSize:32,
            bgColor:'#00bb9c',
            afterSvgFill:'#e5e5e5',
            radiusSize:'10px'
        }
        const MenuItem3Props ={
            frontSvg:fileSvgIcons.mySign,
            frontSize:32,
            frontSvgFill:'#fff',
            frontName:'我的签名',
            afterSvgFill:'#e5e5e5',
            afterSvg:svgIcons.rightArrow,
            afterSize:32,
            bgColor:'#9d55b8',
            radiusSize:'10px'
        }
        const MenuItem4Props ={
            frontSvg:fileSvgIcons.title,
            frontSize:32,
            frontSvgFill:'#fff',
            frontName:'名片标题',
            afterSvgFill:'#e5e5e5',
            afterSvg:svgIcons.rightArrow,
            afterSize:32,
            bgColor:'rgb(6, 94, 175)',
            radiusSize:'10px'
        }
        const MenuItem5Props ={
            frontSvg:fileSvgIcons.theme,
            frontSize:32,
            frontSvgFill:'#fff',
            frontName:'主题',
            afterSvgFill:'#e5e5e5',
            afterSvg:svgIcons.rightArrow,
            afterSize:32,
            bgColor:'#56abe4',
            radiusSize:'10px'
        }
        const MenuItem6Props ={
            frontSvg:fileSvgIcons.background,
            frontSize:32,
            frontSvgFill:'#fff',
            frontName:'背景',
            afterSvgFill:'#e5e5e5',
            afterSvg:svgIcons.rightArrow,
            afterSize:32,
            bgColor:'#f4c600',
            radiusSize:'10px',
            viewBoxInfo:'-16 -16 64 64'
        }
        const MenuItem7Props ={
            frontSvg:fileSvgIcons.music,
            frontSize:32,
            frontSvgFill:'#fff',
            frontName:'背景音乐',
            afterSvgFill:'#e5e5e5',
            afterSvg:svgIcons.rightArrow,
            afterSize:32,
            bgColor:'#11cd6e',
            radiusSize:'10px'
        }
        const MenuItem8Props ={
            frontSvg:fileSvgIcons.rank,
            frontSize:32,
            frontSvgFill:'#fff',
            frontName:'头衔（身份）',
            afterSvgFill:'#e5e5e5',
            afterSvg:svgIcons.rightArrow,
            afterSize:32,
            bgColor:'#9d55b8',
            radiusSize:'10px'
        }
        const MenuItem9Props ={
            frontSvg:fileSvgIcons.product,
            frontSize:32,
            frontSvgFill:'#fff',
            frontName:'产品&服务',
            afterSvgFill:'#e5e5e5',
            afterSvg:svgIcons.rightArrow,
            afterSize:32,
            bgColor:'#33475f',
            viewBoxInfo:'-16 -16 64 64',
            radiusSize:'10px'
        }
        return(
            <div>
                <div className={styles.pageCont}>
                    <div className={cx(styles.menuDivStyle,'fixed')}>
                        <section className={cx(styles.section1,'fixed')}>
                            <EditcardItem {...MenuItem1Props}
                                onClick={()=>{this.clickMyInfo()}}/>
                            <EditcardItem {...MenuItem2Props}
                                onClick={()=>{this.clickMySociety()}}/>
                            <EditcardItem {...MenuItem3Props}
                                onClick={()=>{this.clickMySign()}}/>
                            <EditcardItem {...MenuItem4Props}
                                onClick={()=>{this.clickEditTitle()}}/>
                        </section>
                        <section className={cx(styles.section1,'fixed')}>
                            <EditcardItem {...MenuItem5Props}
                                onClick={()=>{this.clickEditTheme()}}/>
                            <EditcardItem {...MenuItem6Props}
                                onClick={()=>{this.clickEditBackground()}}/>
                            <EditcardItem {...MenuItem7Props}
                                onClick={()=>{this.clickEditMusic()}}/>
                        </section>
                        <section className={cx(styles.section1,'fixed')}>
                            <EditcardItem {...MenuItem8Props}
                                onClick={()=>{this.clickEditRank()}}/>
                            <EditcardItem {...MenuItem9Props}
                                onClick={()=>{this.clickEditProduct()}}/>
                        </section>
                    </div>
                </div>
            </div>
        )
    }
}
EditCard.contextTypes = {
    router:PropTypes.object
}
module.exports=EditCard
