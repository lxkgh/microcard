import React from 'react'
import ReactDOM from 'react-dom'
import styles from './Messenger.css'
import Cover from 'Cover'
import PopConfirm from './components/PopConfirm.jsx'
import Msg from './components/Msg.jsx'

class Messenger extends React.Component {
    constructor(props) {
        super(props)
        this.state={
            popup:null
        }
    }
    render() {
        const {popup} = this.state
        return (
            <Cover ref="cover" autoHide={false} className={styles.cover}>
                {popup}
            </Cover>
        )
    }
    showPopConfirm=(options)=>{
        this.refs['cover'].setState({show:true})
        this.setState({
            popup:<PopConfirm {...options}/>
        })
    }
    showMsg=(options)=>{
        let time = 1500
        if (options) {
            time = options.time || time
        }
        this.refs['cover'].setState({show:true})
        this.setState({
            popup:<Msg {...options}/>
        })
        setTimeout(this.hide,time)
    }
    hide=()=>{
        this.refs['cover'].setState({show:false})
    }
}

const div = document.createElement('div')
document.querySelector('body').appendChild(div)
const messenger = ReactDOM.render(<Messenger />, div)
module.exports=messenger
