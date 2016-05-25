import React from 'react'
import ReactDOM from 'react-dom'
import 'css.Common'
import Topbar from 'topbar'
import Footerbar from 'footerbar'
import styles from './homePage.css'
import Svg from 'SvgIcon'
import svgIcons from 'svgIcons'
import cx from 'classnames'
import MenuBoxItem from 'webfront.MenuBoxItem'
import fileSvgIcons from './homePageSvg.js'
class HomePage extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        const topbarProps = {
            desc:'名片主页'
        }
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
        return(
            <div>
                <Topbar {...topbarProps}/>
                <div className={styles.wrapDivStyle}>
                    <section className={cx(styles.item,styles.shadow)}>
                        <div className={styles.iconfont}>
                            <Svg paths={[svgIcons.mine]}
                                size={[0,0]}
                                position={[3,3]}
                                style={{portrait}}/>
                            <img src="http://img4.imgtn.bdimg.com/it/u=85317439,938828283&fm=23&gp=0.jpg"
                                className={styles.headImg}/>
                        </div>
                        <div className={styles.info}>
                            <h1>Molly</h1>
                            <h3 className={styles.h3}>运营经理</h3>
                        </div>
                    </section>
                    <div className={styles.crousel}>
                        <img src="http://img1.imgtn.bdimg.com/it/u=1950598071,2605647260&fm=23&gp=0.jpg"
                            className={styles.img}/>
                    </div>
                    <div className={styles.menuBox}>
                        <ul className={styles.menuBoxUl}>
                            <MenuBoxItem {...MenuBoxItem1Props}/>
                            <MenuBoxItem {...MenuBoxItem2Props}/>
                            <MenuBoxItem {...MenuBoxItem3Props}/>
                            <MenuBoxItem {...MenuBoxItem4Props}/>
                        </ul>
                    </div>
                </div>
                <Footerbar />
            </div>
        )
    }
}

ReactDOM.render(
    <HomePage/>,
    document.getElementById('common-body')
)
