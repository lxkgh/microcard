import React,{PropTypes} from 'react'

const styles={
    dialog:{
        backgroundColor:'#fff',
        minHeight:'60px',
        margin:'120px auto 0px',
        borderRadius:'4px',
        WebkitBoxShadow:'0 5px 15px rgba(0,0,0,.5)',
        boxShadow: '0 5px 15px rgba(0,0,0,.5)'
    },
    header:{
        height:'55px',
        borderBottom:'solid 1px #e5e5e5',
        lineHeight:'55px',
        padding:'0 15px',
        fontSize:'1.6rem'
    },
    body:{
        minHeight:'80px',
        padding:'10px 15px'
    },
    footer:{
        height:'60px',
        borderTop:'solid 1px #e5e5e5',
        lineHeight:'50px',
        padding:'0 15px'
    }
}

class Dialog extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        const {children,width} = this.props
        styles.dialog.width=width
        return (
            <div style={styles.dialog}>
                {children}
            </div>
        )
    }
}
Dialog.defaultProps={
    width:'50%'
}
Dialog.propTypes={
    width:PropTypes.string
}

class Header extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        const {children} = this.props
        return (
            <div style={styles.header}>
                {children}
            </div>
        )
    }
}
Dialog.Header=Header

class Body extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        const {children} = this.props
        return (
            <div style={styles.body}>
                {children}
            </div>
        )
    }
}
Dialog.Body=Body

class Footer extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        const {children} = this.props
        return (
            <div style={styles.footer} className="flexbox items-center row-reverse">
                {children}
            </div>
        )
    }
}
Dialog.Footer=Footer

export default Dialog
