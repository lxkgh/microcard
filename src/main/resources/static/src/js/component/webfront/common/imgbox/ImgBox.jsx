import React,{PropTypes} from 'react'
import styles from './Imgbox.css'
import Svg from 'SvgIcon'
import fileSvgIcons from './imgSvg.js'

class ImgBox extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isSelected:false
            // isUsed:false
        }
    }
    render() {
        const {src,size,alt,onClick,isSelected} = this.props
        return (
            <div style={{
                margin:'10px 10px',
                position:'relative',
                verticalAlign:'middle',
                borderRadius:'2px',
                boxShadow: '0 0 4px rgba(0,0,0,0.3)'
            }} onClick={onClick}>
                <div style={{position:'relative',width:size[0],height:size[1],
                    overflow:'hidden'}}>
                    <img src={src} alt={alt} width={size[0]} height={size[1]}
                    className={styles.imgStyle}/>
                    <div className= {styles.icon} style={{display:isSelected?'block':'none'}}>
                            <div className={styles.wrapSvg}>
                                <Svg paths={[fileSvgIcons.checkmark]}
                                    size={[16,16]}
                                    style={{fill:'#fff'}}/>
                            </div>
                    </div>
                </div>
                {this.props.children}
            </div>
        )
    }
}

ImgBox.defaultProps={
    size:[100,200]
}

ImgBox.propTypes={
    src:PropTypes.string.isRequired,
    size:PropTypes.arrayOf(PropTypes.number),
    alt:PropTypes.string,
    // isUsed:PropTypes.bool,
    isSelected:PropTypes.bool,
    onClick:PropTypes.func
}
export default ImgBox
