import React,{PropTypes} from 'react'

import Topbar from 'topbar'
import MenuItem from 'menuitem'
import fileSvgIcons from './editCardSvg.js'
import svgIcons from 'svgIcons'
import styles from './editCard.css'
import cx from 'classnames'
import {withRouter} from 'react-router'

class EditCard extends React.Component{
    constructor(props){
        super(props);
    }
    clickMyInfo(){
        this.props.router.push('/myinfo')
    }
    clickMySociety(){
        this.props.router.push('/mysociety')
    }
    clickMySign(){
        this.props.router.push('/mysign')
    }
    clickMySetTitle(){
        this.props.router.push('/mysettitle')
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
            ry:10
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
                <Topbar />
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
                                onClick={()=>{this.clickMySetTitle()}}/>
                        </section>
                        <section className={cx(styles.section1,'fixed')}>
                            <MenuItem {...MenuItem5Props}/>
                            <MenuItem {...MenuItem6Props}/>
                            <MenuItem {...MenuItem7Props}/>
                        </section>
                        <section className={cx(styles.section1,'fixed')}>
                            <MenuItem {...MenuItem8Props}/>
                            <MenuItem {...MenuItem9Props}/>
                        </section>
                    </div>
                </div>
            </div>
        )
    }
}
EditCard.propTypes = {
    router: PropTypes.object
}
module.exports=withRouter(EditCard)
