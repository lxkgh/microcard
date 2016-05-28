import React,{PropTypes} from 'react'
import styles from './img.css'

import cx from 'classnames'

class Img extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        const {src,size,alt,active,onClick} = this.props
        return (
            <div style={{
                margin:'10px 10px'
            }} onClick={onClick}>
                <img src={src} alt={alt} width={size[0]} height={size[1]}
                    className={cx({[styles.active]:active})}/>
            </div>
        )
    }
}

Img.defaultProps={
    size:[100,100],
    active:false
}

Img.propTypes={
    src:PropTypes.string.isRequired,
    size:PropTypes.arrayOf(PropTypes.number),
    alt:PropTypes.string,
    active:PropTypes.bool,
    onClick:PropTypes.func
}
export default Img
