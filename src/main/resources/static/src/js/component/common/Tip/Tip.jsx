import React from 'react'
import ReactDOM from 'react-dom'

const backgroundColor = {
    success: '#dff0d8',
    info: '#d9edf7',
    warning: '#fcf8e3',
    danger: '#f2dede'
}

const color = {
    success: '#3c763d',
    info: '#31708f',
    warning: '#8a6d3b',
    danger: '#a94442'
}

const Duration = 1500

class Tip extends React.Component {
    state = {
        isShow: false,
        type: 'success',
        msg: ''
    }

    componentWillUnmount() {
        clearTimeout(this.timeId)
    }

    hide(callback) {
        if (callback) {
            callback()
        }
        this.setState({
            isShow: false
        })
        clearTimeout(this.timeId)
    }

    showSuccess(msg, option) {
        clearTimeout(this.timeId)
        let callback
        let duration = Duration
        if (option) {
            duration = option.time || Duration
            callback = option.callback
        }
        this.setState({
            isShow: true,
            msg,
            type: 'success'
        })
        this.timeId = setTimeout(() => {
            this.hide(callback)
        }, duration)
    }

    showInfo(msg, option) {
        clearTimeout(this.timeId)
        let callback
        let duration = Duration
        if (option) {
            duration = option.time || Duration
            callback = option.callback
        }
        this.setState({
            isShow: true,
            msg,
            type: 'info'
        })
        this.timeId = setTimeout(() => {
            this.hide(callback)
        }, duration)
    }

    showWarning(msg, option) {
        clearTimeout(this.timeId)
        let callback
        let duration = Duration
        if (option) {
            duration = option.time || Duration
            callback = option.callback
        }
        this.setState({
            isShow: true,
            msg,
            type: 'warning'
        })
        this.timeId = setTimeout(() => {
            this.hide(callback)
        }, duration)
    }

    showDanger(msg, option) {
        clearTimeout(this.timeId)
        let callback
        let duration = Duration
        if (option) {
            duration = option.time || Duration
            callback = option.callback
        }
        this.setState({
            isShow: true,
            msg,
            type: 'danger'
        })
        this.timeId = setTimeout(() => {
            this.hide(callback)
        }, duration)
    }

    render() {
        const {isShow, type, msg} = this.state
        let rootStyle = {
            position: 'fixed',
            top: '0px',
            left: '0px',
            right: '0px',
            display: 'flex',
            visibility: 'hidden',
            transform: 'translate3d(0px, -50px, 0px)',
            zIndex: '999',
            transition: 'transform 1000ms cubic-bezier(0.23, 1, 0.32, 1) 0ms' +
                ', visibility 1000ms cubic-bezier(0.23, 1, 0.32, 1) 0ms'
        }

        let containerStyle = {
            padding: '0px 24px',
            backgroundColor: backgroundColor[type],
            height: '50px',
            lineHeight: '50px',
            borderRadius: '0px',
            minWidth: '500px',
            flexGrow: 0,
            margin: 'auto'
        }

        let contentStyle = {
            fontSize: 14,
            color: color[type],
            opacity: 0,
            transition: 'opacity 1000ms cubic-bezier(0.23, 1, 0.32, 1) 0ms'
        }

        if (isShow) {
            rootStyle.visibility = 'visible'
            rootStyle.transform = 'translate3d(0px, 0px, 0px)'
            contentStyle.opacity = 1
            contentStyle.transition = 'opacity ' +
                '1000ms cubic-bezier(0.23, 1, 0.32, 1) 100ms'
        }

        return (
            <div style={rootStyle}>
                <div width="3" style={containerStyle}>
                    <div style={contentStyle}>
                        {msg}
                    </div>
                </div>
            </div>
        )
    }
}

const div = document.createElement('div')
document.querySelector('body').appendChild(div)
const tip = ReactDOM.render(<Tip />, div)

exports['default'] = tip
module.exports = tip
