import React,{PropTypes} from 'react'

import styles from './PopConfirm.css'

class PopConfirm extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        const {header,body,buttons} = this.props
        return (
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
        )
    }
}
PopConfirm.propTypes={
    header:PropTypes.string,
    body:PropTypes.string.isRequired,
    buttons:PropTypes.arrayOf(PropTypes.object).isRequired
}

module.exports = PopConfirm
