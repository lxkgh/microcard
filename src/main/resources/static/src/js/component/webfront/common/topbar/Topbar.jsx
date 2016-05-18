import React,{PropTypes} from 'react'
import Svg from 'SvgIcon'
import svgIcons from 'svgIcons'
import 'css.Common'
import cx from 'classnames'
// import cx from 'classnames'
class Topbar extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isShow:true
        }
        this.handleMenuClick = this.handleMenuClick.bind(this);
    }
    handleMenuClick(){
        this.setState({
            isShow:!this.state.isShow
        })
    }
    render(){
        const  {desc} = this.props
        const {isShow} = this.state//这样写比较方便
        const topbarStyle = {
            height: '44px',
            lineHeight: '44px',
            background: '#f8f8f8',
            position: 'absolute',
            width: '100%',
            left: 0,
            top: 0,
            boxShadow: '0 1px 2px #cfcfcf',
            color: '#5f5f5f',
            zIndex: 9998
        }
        const leftAStyle = {
            fontSize: '1.5rem',
            padding: '0 5px',
            // display: 'WebkitFlex',
            flexDirection:'row',
            alignItems:'center',
            height: '100%',
            position: 'relative',
            color: '#6f6f6f',
            cursor: 'pointer'
        }
        const threePointsStyle = {
            // // display: 'WebkitFlex',
            marginRight: '10px',
            cursor: 'pointer',
            marginLeft:'30px'
        }
        const menuBoxStyle = {
            padding: '15px 10px',
            background: 'rgba(255,255,255,0.95)',
            position: 'absolute',
            left: 0,
            top: 0,
            width: '100%',
            lineHeight: 1,
            boxShadow:'0 1px 2px #cfcfcf',
            zIndex: 9997,
            WebkitTransition: '-webkit-transform 0.2s ease-in',
            transform: isShow ? 'translateY(-145px)' : 'translateY(44px)'
        }
        const svgSpanStyle = {
            display: 'inline-block',
            textAlign: 'center',
            lineHeight: '46px',
            width: '46px',
            height: '46px',
            border: 'solid 1px #bbb',
            borderRadius: '4px',
            position: 'relative',
            paddingTop: '5px'
        }
        const btnStyle = {
            fontSize: '1.3rem',
            paddingTop: '10px',
            color: '#5f5f5f',
            textAlign: 'center'
        }
        return(
            <div>
                <div className ={cx('flexbox','space-between')} style = {topbarStyle}>
                    <a style ={leftAStyle } className={cx('flexbox','align-items-center')}>
                        <Svg paths={[svgIcons.leftArrow]} size ={[32,32]}
                            style = {{fontSize: '2rem',fill: '#6f6f6f'}}/>返回</a>
                    <div>
                        <h1>
                            <span>{desc}</span>
                        </h1>
                    </div>
                    <a style ={threePointsStyle} onClick ={this.handleMenuClick}
                        className ={cx('flexbox','flex-center','column')}>
                        <Svg paths={[svgIcons.threePoints]} size ={[32,32]}
                            style = {{fill:'#6f6f6f'}}/>
                    </a>
                </div>
                <section style = {menuBoxStyle}>
                    <ul className={cx('flexbox','space-between')}>
                        <li>
                            <span style = {svgSpanStyle}>
                                <Svg paths={[svgIcons.card]} size={[32,32]}
                                    style = {{fill:'#a1a1a1'}}/>
                            </span>
                            <div style ={btnStyle}>我的名片</div>
                        </li>
                        <li>
                            <span style = {svgSpanStyle}>
                                <Svg paths={[svgIcons.message]} size={[32,32]}
                                    style = {{fill:'#a1a1a1'}}/>
                            </span>
                            <div style ={btnStyle}>消息</div>
                        </li>
                        <li>
                            <span style = {svgSpanStyle}>
                                <Svg paths={[svgIcons.exit]} size={[32,32]}
                                    style = {{fill:'#a1a1a1'}}/>
                            </span>
                            <div style ={btnStyle}>退出</div>
                        </li>
                    </ul>
                </section>
            </div>
        )
    }
}
Topbar.propTypes= {
    desc:PropTypes.string
}
export default Topbar
