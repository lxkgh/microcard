import React,{PropTypes} from 'react'
import Svg from 'SvgIcon'
import 'css.Common'
import cx from 'classnames'

class MenuItem extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        const {frontSvg,frontSize,afterSvg,afterSize,frontName,
                divContent,afterName,frontSvgFill,afterSvgFill,
                svgBackColor,rx,ry,viewBoxInfo,rectx,recty,
                rectWidth,rectHeight,onClick} = this.props
        const frontSvgStyle = {
            fill:frontSvgFill,
            marginRight:'5px'
        }
        const afterSvgStyle = {
            fill:afterSvgFill
        }
        const liStyle = {
            borderBottom: 'solid 1px #e5e5e5',
            background: '#fff',
            width: '100%',
            // float: 'left',
            height:'50px',
            display:'flex'
        }
        const wrapperStyle = {
            padding:'12px 5px'
        }
        const divSuitLi = {
            width:'100%'
        }
        const rectStyle = {
            width:rectWidth,
            height:rectHeight,
            stroke:'none',
            fill:svgBackColor,
            rx:rx,
            ry:ry,
            x:rectx,
            y:recty
        }
        return(
            <li style={liStyle}
                onClick={onClick}>
                <div className={cx('flexbox','wrapper','space-between','align-items-center')}
                    style = {divSuitLi}>
                    <div className={cx('flexbox','front-content','items-center')}
                        style = {wrapperStyle}>
                        <Svg paths={[frontSvg]}
                            size={[frontSize,frontSize]}
                            style={frontSvgStyle}
                            viewBoxInfo={viewBoxInfo}>
                            <rect style={rectStyle}></rect>
                        </Svg>
                        <div className={cx('front-name')}>{frontName}</div>
                    </div>
                    <div className="content">{divContent}</div>
                    <div className={cx('flexbox','after-content')}>
                        {afterName}
                        <Svg paths={[afterSvg]}
                            size={[afterSize,afterSize]}
                            style={afterSvgStyle}/>
                    </div>
                </div>
            </li>
        )
    }
}
MenuItem.propTypes={
    frontSvg: PropTypes.string,
    afterSvg: PropTypes.string,
    frontSize: PropTypes.number,
    afterSize: PropTypes.number,
    frontName: PropTypes.string,
    divContent:PropTypes.string,
    afterName:PropTypes.string,
    frontSvgFill: PropTypes.string,
    afterSvgFill: PropTypes.string,
    svgBackColor:PropTypes.string,
    rx:PropTypes.number,
    ry:PropTypes.number,
    viewBoxInfo:PropTypes.string,
    rectx:PropTypes.number,
    recty:PropTypes.number,
    onClick:PropTypes.func,
    rectWidth:PropTypes.string,
    rectHeight:PropTypes.string
}
MenuItem.defaultProps = {
    frontSize:0,
    afterSize:0,
    rectWidth:'100%',
    rectHeight:'100%'
}
export default MenuItem
