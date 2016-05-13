import React,{PropTypes} from 'react'

const styles = {
    col:{
        padding:'6px 0',
        display:'inline-block'
    }
}

class Col extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        const {col} = this.props
        styles.col.width=col*100/12+'%'
        return (
            <div style={styles.col}>{this.props.children}</div>
        )
    }
}
Col.propTypes={
    col:PropTypes.number.isRequired
}

Col.md1=100/12+'%'
Col.md2=200/12+'%'
Col.md3=300/12+'%'
Col.md4=400/12+'%'
Col.md5=500/12+'%'
Col.md6=600/12+'%'
Col.md7=700/12+'%'
Col.md8=800/12+'%'
Col.md9=900/12+'%'
Col.md10=1000/12+'%'
Col.md11=1100/12+'%'
Col.md12=1200/12+'%'

export default Col
