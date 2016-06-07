import React,{PropTypes} from 'react'
import Svg from 'SvgIcon'
import 'css.Common'
import cx from 'classnames'
class EditcardItem extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        const {frontSvg,frontSize,afterSvg,afterSize,frontName,bgColor,radiusSize,frontSvgFill,
                divContent,afterName,afterSvgFill,viewBoxInfo,onClick} = this.props
        const afterSvgStyle = {
            fill:afterSvgFill
        }
        const liStyle = {
            borderBottom: 'solid 1px #e5e5e5',
            background: '#fff',
            width: '100%',
            height:'50px',
            display:'flex'
        }
        const wrapperStyle = {
            padding:'12px 5px'
        }
        const wrapDivStyle ={
            width:'100%'
        }
        const svgBg = {
            backgroundColor:bgColor,
            borderRadius:radiusSize,
            marginRight:'5px'
        }
        const frontSvgStyle = {
            fill:frontSvgFill
        }
        return(
            <li style={liStyle}
                onClick={onClick}>
                <div className={cx('flexbox','wrapper','space-between','align-items-center')}
                    style={wrapDivStyle}>
                    <div className={cx('flexbox','front-content','items-center')}
                        style = {wrapperStyle}>
                        <div style={svgBg}>
                            <Svg paths={[frontSvg]}
                                size={[frontSize,frontSize]}
                                viewBoxInfo={viewBoxInfo}
                                style={frontSvgStyle}
                                />
                        </div>
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
EditcardItem.propTypes={
    frontSvg: PropTypes.string,
    afterSvg: PropTypes.string,
    frontSize: PropTypes.number,
    afterSize: PropTypes.number,
    frontName: PropTypes.string,
    divContent:PropTypes.string,
    afterName:PropTypes.string,
    frontSvgFill:PropTypes.string,
    afterSvgFill: PropTypes.string,
    viewBoxInfo:PropTypes.string,
    onClick:PropTypes.func,
    bgColor:PropTypes.string,
    radiusSize:PropTypes.string
}
EditcardItem.defaultProps = {
    frontSize:0,
    afterSize:0
}
export default EditcardItem
