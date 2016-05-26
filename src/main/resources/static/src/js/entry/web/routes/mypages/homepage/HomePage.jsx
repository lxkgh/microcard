import React,{PropTypes} from 'react'

import Footerbar from 'footerbar'
import styles from './homePage.css'
import Svg from 'SvgIcon'
import svgIcons from 'svgIcons'
import cx from 'classnames'
import MenuBoxItem from 'webfront.MenuBoxItem'
import fileSvgIcons from './homePageSvg.js'
import defaultPortait from './头像默认.png'
import img1 from './主页轮播1.jpg'
import img2 from './主页轮播2.jpg'
import img3 from './主页轮播3.jpg'
import Carousel from 'Carousel'

class HomePage extends React.Component{
    constructor(props){
        super(props);
    }
    clickEditcard(){
        this.context.router.push('/mypages/editcard')
    }
    clickMyCard(){
        this.context.router.push('/mypages/mycard')
    }
    clickMore(){

    }
    render(){
        const portrait = {
            fill:'d3d9dd'
        }
        const MenuBoxItem1Props = {
            num:3,
            itemSvg:svgIcons.card,
            size:32,
            svgColor:'rgb(65, 204, 249)',
            name:'编辑名片'
        }
        const MenuBoxItem2Props = {
            num:3,
            itemSvg:svgIcons.card,
            size:32,
            svgColor:'rgb(65, 204, 249)',
            name:'我的名片'
        }
        const MenuBoxItem4Props = {
            num:3,
            itemSvg:svgIcons.threePoints,
            size:32,
            svgColor:'#d3d9dd',
            name:'更多'
        }
        const MenuBoxItem3Props = {
            num:3,
            itemSvg:fileSvgIcons.mapIcon,
            size:32,
            svgColor:'#ea8010',
            name:'地图导航'
        }
        const CarouselPic = {
            imgs:[img1,img2,img3],
            height:'100%',
            width:'100%'
        }
        return(
            <div>
                <div className={styles.wrapDivStyle}>
                    <section className={cx(styles.item,styles.shadow)}>
                        <div className={styles.iconfont}>
                            <Svg paths={[svgIcons.mine]}
                                size={[0,0]}
                                position={[3,3]}
                                style={{portrait}}/>
                            <img src={defaultPortait}
                                className={styles.headImg}/>
                        </div>
                        <div className={styles.info}>
                            <h1>Molly</h1>
                            <h3 className={styles.h3}>运营经理</h3>
                        </div>
                    </section>
                    <div className={styles.crousel}>
                        <Carousel {...CarouselPic}/>
                    </div>
                    <div className={styles.menuBox}>
                        <ul className={styles.menuBoxUl}>
                            <MenuBoxItem {...MenuBoxItem1Props}
                                onClick={()=>{this.clickEditcard()}}/>
                            <MenuBoxItem {...MenuBoxItem2Props}
                                onClick={()=>{this.clickMyCard()}}/>
                            <MenuBoxItem {...MenuBoxItem3Props}
                                onClick={()=>{this.clickMore()}}/>
                            <MenuBoxItem {...MenuBoxItem4Props}/>
                        </ul>
                    </div>
                </div>
                <Footerbar />
            </div>
        )
    }
}
HomePage.contextTypes = {
    router:PropTypes.object
}
module.exports=HomePage
