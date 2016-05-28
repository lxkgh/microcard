import React from 'react'
import ReactDOM from 'react-dom'

import Cover from 'Cover'

import styles from './Messenger.css'

class Messenger extends React.Component {
    constructor(props) {
        super(props)
        this.state=this.initState()
    }
    render() {
        const {header,body,buttons} = this.state
        return (
            <Cover ref="cover" autoHide={false} className={styles.cover}>
                <div className={styles.popup}>
                    <div className={styles.header}>{header}</div>
                    <div className={styles.body}>{body}</div>
                    <div className={styles.footer}>
                        {
                            buttons.map((btn,i)=>{
                                return <div key={i} onClick={btn.onClick}>{btn.desc}</div>
                            })
                        }
                    </div>
                </div>
            </Cover>
        )
    }
    initState=()=>{
        return {
            header:'',
            body:'内容',
            buttons:[
                {
                    desc:'确定',
                    onClick:this.hide
                }
            ]
        }
    }
    show=(options)=>{
        this.setState(options);
        this.refs['cover'].setState({show:true})
    }
    hide=()=>{
        this.refs['cover'].setState({show:false})
        this.setState(this.initState())
    }
}

const div = document.createElement('div')
document.querySelector('body').appendChild(div)
const messenger = ReactDOM.render(<Messenger />, div)
module.exports=messenger
