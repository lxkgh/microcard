import React,{PropTypes} from 'react'
import styles from './toggleButton.css'
import cx from 'classnames'

class ToggleButton extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            btnName:'不显示',
            isShow:false
        }
    }
    componentWillMount() {
        this.setState({
            btnName:this.props.name
        })
    }
    toggleClick(){
        this.setState({
            btnName:this.state.isShow?this.props.name:this.props.nameChecked,
            isShow:!this.state.isShow
        })
    }
    render() {
        const {btnName} = this.state
        return (
            <div style={{background:'#fff',marginRight:'5px'}}>
                <label className={cx('flexbox','items-center')}>
                    <span className={styles.buttonName}>
                        {btnName}
                    </span>
                    <input className={styles.switchButton}
                        type="checkbox"
                        onChange={()=>this.toggleClick()}/>
                </label>
            </div>
        )
    }
}
ToggleButton.propTypes={
    name:PropTypes.string,
    nameChecked:PropTypes.string
}
ToggleButton.defaultProps = {
    name:'',
    nameChecked:''
}
export default ToggleButton
