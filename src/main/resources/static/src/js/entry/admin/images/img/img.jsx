import React,{PropTypes} from 'react'

class Img extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        const {src,size,alt} = this.props
        return (
            <div style={{
                margin:'10px 10px'
            }}>
                <img src={src} alt={alt} width={size[0]} height={size[1]}/>
            </div>
        )
    }
}

Img.defaultProps={
    size:[100,100]
}

Img.propTypes={
    src:PropTypes.string.isRequired,
    size:PropTypes.arrayOf(PropTypes.number),
    alt:PropTypes.string
}
export default Img
