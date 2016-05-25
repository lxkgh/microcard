import React,{PropTypes} from 'react'
import  ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import styles from './Carousel.css'
import Selecter from './Selecter/Selecter.jsx'

const transitionName={
    enter: styles.enter,
    enterActive: styles.enterActive,
    leave: styles.leave,
    leaveActive: styles.leaveActive
}

class Carousel extends React.Component {
    constructor(props) {
        super(props)
        this.state={
            active:0
        }
        this.start = true
        this.nextActive=this.nextActive.bind(this)
    }
    componentDidMount() {
        this.startCarousel()
    }
    render() {
        const {imgs,time,width,height} = this.props
        const {active} = this.state
        return (
            <div className={styles.carousel} style={{width:width,height:height}}
                onMouseOver={()=>{this.onMouseOver()}}
                onMouseOut={()=>this.onMouseOut()}>
                <ReactCSSTransitionGroup transitionName={transitionName}
                    transitionEnterTimeout={time}
                    transitionLeaveTimeout={time}>
                    <img className={styles.img} src={imgs[active]} key={imgs[active]}/>
                </ReactCSSTransitionGroup>
                <Selecter size={imgs.length} active={active}
                    onSelect={(i)=>{this.changeActive(i)}}/>
                {this.props.children}
            </div>
        )
    }
    onMouseOver(){
        this.stopCarousel()
    }
    onMouseOut(){
        this.startCarousel()
    }
    startCarousel(){
        this.setI=setInterval(this.nextActive,1000*3)
    }
    stopCarousel(){
        clearInterval(this.setI)
    }
    changeActive(i){
        this.setState({
            active:i
        })
    }
    nextActive(){
        const size = this.props.imgs.length
        const oldActive = this.state.active
        const newActive = (oldActive+1)%size
        this.setState({
            active: newActive
        })
    }
}
Carousel.defaultProps = {
    time:300,
    width:'600px',
    height:'300px'
}
Carousel.propTypes = {
    imgs:PropTypes.arrayOf(PropTypes.string).isRequired,
    time:PropTypes.number,
    width:PropTypes.string,
    height:PropTypes.string
}
module.exports = Carousel
