import React,{PropTypes} from 'react'
import MenuItem from 'menuitem'
import fileSvgIcons from './EditCardSvg.js'
import svgIcons from 'svgIcons'
import styles from './EditCard.css'
import cx from 'classnames'
import ROUTES from 'web.Config'
import messenger from 'web.Messenger'
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
        messenger.showMsg({
            msg:'该功能暂时未开放'
        })
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
            svgBackColor:'#56abe4',
            rx:10,
            ry:10,
            rectWidth:'100%',
            rectHeight:'100%'
        }
        const MenuItem2Props ={
            frontSvg:fileSvgIcons.society,
            frontSize:32,
            frontSvgFill:'#fff',
            frontName:'社交信息',
            afterSvg:svgIcons.rightArrow,
            afterSize:32,
            svgBackColor:'#00bb9c',
            afterSvgFill:'#e5e5e5',
            rx:10,
            ry:10
        }
        const MenuItem3Props ={
            frontSvg:fileSvgIcons.mySign,
            frontSize:32,
            frontSvgFill:'#fff',
            frontName:'我的签名',
            afterSvgFill:'#e5e5e5',
            afterSvg:svgIcons.rightArrow,
            afterSize:32,
            svgBackColor:'#9d55b8',
            rx:10,
            ry:10
        }
        const MenuItem4Props ={
            frontSvg:fileSvgIcons.title,
            frontSize:32,
            frontSvgFill:'#fff',
            frontName:'名片标题',
            afterSvgFill:'#e5e5e5',
            afterSvg:svgIcons.rightArrow,
            afterSize:32,
            svgBackColor:'rgb(6, 94, 175)',
            rx:10,
            ry:10
        }
        const MenuItem5Props ={
            frontSvg:fileSvgIcons.theme,
            frontSize:32,
            frontSvgFill:'#fff',
            frontName:'主题',
            afterSvgFill:'#e5e5e5',
            afterSvg:svgIcons.rightArrow,
            afterSize:32,
            svgBackColor:'#56abe4',
            rx:10,
            ry:10
        }
        const MenuItem6Props ={
            frontSvg:fileSvgIcons.background,
            frontSize:32,
            frontSvgFill:'#fff',
            frontName:'背景',
            afterSvgFill:'#e5e5e5',
            afterSvg:svgIcons.rightArrow,
            afterSize:32,
            svgBackColor:'#f4c600',
            rx:5,
            ry:5,
            viewBoxInfo:'-16 -16 64 64',
            rectx:-16,
            recty:-16
        }
        const MenuItem7Props ={
            frontSvg:fileSvgIcons.music,
            frontSize:32,
            frontSvgFill:'#fff',
            frontName:'背景音乐',
            afterSvgFill:'#e5e5e5',
            afterSvg:svgIcons.rightArrow,
            afterSize:32,
            svgBackColor:'#11cd6e',
            rx:10,
            ry:10
        }
        const MenuItem8Props ={
            frontSvg:fileSvgIcons.rank,
            frontSize:32,
            frontSvgFill:'#fff',
            frontName:'头衔（身份）',
            afterSvgFill:'#e5e5e5',
            afterSvg:svgIcons.rightArrow,
            afterSize:32,
            svgBackColor:'#9d55b8',
            rx:10,
            ry:10
        }
        const MenuItem9Props ={
            frontSvg:fileSvgIcons.product,
            frontSize:32,
            frontSvgFill:'#fff',
            frontName:'产品&服务',
            afterSvgFill:'#e5e5e5',
            afterSvg:svgIcons.rightArrow,
            afterSize:32,
            svgBackColor:'#33475f',
            rx:10,
            ry:10,
            viewBoxInfo:'-16 -16 64 64',
            rectx:-16,
            recty:-16
        }
        return(
            <div>
                <div className={styles.wrapDivStyle}>
                    <div className={cx(styles.menuDivStyle,'fixed')}>
                        <section className={cx(styles.section1,'fixed')}>
                            <MenuItem {...MenuItem1Props}
                                onClick={()=>{this.clickMyInfo()}}/>
                            <MenuItem {...MenuItem2Props}
                                onClick={()=>{this.clickMySociety()}}/>
                            <MenuItem {...MenuItem3Props}
                                onClick={()=>{this.clickMySign()}}/>
                            <MenuItem {...MenuItem4Props}
                                onClick={()=>{this.clickEditTitle()}}/>
                        </section>
                        <section className={cx(styles.section1,'fixed')}>
                            <MenuItem {...MenuItem5Props}
                                onClick={()=>{this.clickEditTheme()}}/>
                            <MenuItem {...MenuItem6Props}
                                onClick={()=>{this.clickEditBackground()}}/>
                            <MenuItem {...MenuItem7Props}
                                onClick={()=>{this.clickEditMusic()}}/>
                        </section>
                        <section className={cx(styles.section1,'fixed')}>
                            <MenuItem {...MenuItem8Props}
                                onClick={()=>{this.clickEditRank()}}/>
                            <MenuItem {...MenuItem9Props}
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
