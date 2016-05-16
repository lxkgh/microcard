import React,{PropTypes} from 'react'

import csses from './table.css'
import cx from 'classnames'

const styles={
    table:{
        position:'relative',
        width:'100%'
    },
    header:{
        borderBottom:'solid 1px #ddd',
        borderTop:'solid 1px #ddd',
        width:'100%',
        position:'relative'
    },
    body:{
        width:'100%',
        position:'relative'
    }
}

class Table extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div style={styles.table} className={this.props.className}>
                {this.props.children}
            </div>
        )
    }
}


class Header extends React.Component{
    constructor(props){
        super(props)
    }
    render() {
        return (
            <div style={styles.header}>
                {this.props.children}
            </div>
        )
    }
}
Table.Header=Header


class Body extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div style={styles.body}>
                {this.props.children}
            </div>
        )
    }
}
Table.Body=Body

class Row extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        const {children,percents,className,active,onClick} = this.props
        const classes = cx(csses.row,className,{[csses.active]:active})
        return (
            <div className={classes} onClick={onClick}>
                {
                    this.renderItems(children,percents)
                }
            </div>
        )
    }
    renderItems(children,percents){
        let itemsDom=children.map((item,i)=>{
            let percent=percents?percents[i]:null
            return (
                <div key={i} style={{
                    width:percent,
                    display:'inline-block',
                    padding:'2px',
                    lineHeight:'35px'
                }}>{item}</div>
            )
        })
        return itemsDom
    }
}
Row.defaultProps={
    active:false
}
Row.propTypes={
    percents:PropTypes.arrayOf(PropTypes.string),
    active:PropTypes.bool,
    onClick:PropTypes.func
}
Table.Row=Row
export default Table
