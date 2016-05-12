import React,{PropTypes} from 'react'

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
    },
    row:{
        width:'100%',
        borderBottom:'solid 1px #ddd',
        height:'35px'
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
        const {children,percents,className} = this.props
        return (
            <div style={styles.row} className={className}>
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
Row.propTypes={
    percents:PropTypes.arrayOf(PropTypes.string)
}
Table.Row=Row
export default Table
