import React,{PropTypes} from 'react'
import Svg from 'SvgIcon'


class MenuBoxItem extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        const {num,itemSvg,size,svgColor,name,onClick} = this.props
        let width = 100/num+'%'
        const styles = {
            li:{
                margin:0,
                padding:0,
                listStyle:'none',
                float: 'left',
                width: width,
                height: '100px',
                textAlign: 'center',
                position: 'relative',
                border: '1px solid #ddd',
                borderLeft: 'none'
            },
            div:{
                padding: '21px 0 22px 0',
                position: 'relative',
                WebkitUserSelect: 'none',
                MozUserSelect: 'none'
            },
            svg:{
                fill:svgColor
            },
            p:{
                fontSize: '1.2rem',
                color: '#7d7d7d',
                marginTop: '10px'
            }
        }
        return (
            <li style={styles.li}
                onClick={onClick}>
                <div style={styles.div}>
                    <Svg paths={[itemSvg]}
                        size={[size,size]}
                        style={styles.svg}/>
                    <p style={styles.p}>{name}</p>
                </div>
            </li>
        )
    }
}
MenuBoxItem.propTypes = {
    num:PropTypes.number,
    itemSvg:PropTypes.string,
    size:PropTypes.number,
    svgColor:PropTypes.string,
    name:PropTypes.string,
    onClick:PropTypes.func
}
export default MenuBoxItem
