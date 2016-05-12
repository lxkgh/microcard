import React,{PropTypes} from 'react'

class SvgIcon extends React.Component {
    constructor(props) {
        super(props)
        this.getTransform=this.getTransform.bind(this)
    }
    render() {
        const {paths,size,position,direction,realIconSize,
            style,className,onClick}=this.props
        return (
            <svg style={style} className={className}
                width={size[0]} height={size[1]} onClick={onClick}>
                <g transform={this.getTransform(position,direction,size,realIconSize)}>
                    {
                        paths.map((path,i)=>{
                            return <path key={i} d={path} />
                        })
                    }
                </g>
            </svg>
        )
    }
    getTransform(position,direction,size,realIconSize){
        let scaleW=size[0]/realIconSize[0]
        let scaleH=size[1]/realIconSize[1]
        return (
            'translate('+position.join(', ')+
            ') scale('+direction.join(', ')+
            ') scale('+scaleW+', '+scaleH+')'
        )
    }
}
SvgIcon.defaultProps={
    size:[16,16],
    position:[0,0],
    direction:[1,1],
    realIconSize:[1024,1024]
}
SvgIcon.propTypes={
    style:PropTypes.object,
    className:PropTypes.string,
    onClick:PropTypes.func,
    paths:PropTypes.arrayOf(PropTypes.string).isRequired,
    size:PropTypes.arrayOf(PropTypes.number),
    position:PropTypes.arrayOf(PropTypes.number),
    direction:PropTypes.arrayOf(PropTypes.number),
    realIconSize:PropTypes.arrayOf(PropTypes.number)
}
export default SvgIcon
