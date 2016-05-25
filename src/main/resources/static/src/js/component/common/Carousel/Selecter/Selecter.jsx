import React,{PropTypes} from 'react'

import styles from './Selecter.css'

import Dot from './Dot/Dot.jsx'

class Selecter extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        const {size,active,onSelect} = this.props
        return (
            <div className={styles.selecter} onClick={(e)=>{this.onClick(e,onSelect)}}>
                {this.renderDots(size,active)}
            </div>
        )
    }
    renderDots(size,active){
        let dots=[]
        for (let i = 0; i < size; i++) {
            dots.push(<Dot key={i} name={i} active={i==active} />)
        }
        return dots
    }
    onClick(e,onSelect){
        e.preventDefault()
        if (onSelect&&e.currentTarget!=e.target) {
            onSelect(Number(e.target.attributes.name.value))
        }
    }
}
Selecter.propTypes={
    size:PropTypes.number.isRequired,
    active:PropTypes.number.isRequired,
    onSelect:PropTypes.func
}
module.exports=Selecter
