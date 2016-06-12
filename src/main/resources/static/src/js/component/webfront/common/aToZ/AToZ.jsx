import React from 'react'
import styles from './aToZ.css'
import cx from 'classnames'
import Svg from 'SvgIcon'
import fileSvgIcons from './aToZIcons.js'
class AToZ extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            titleBtn:'A-Z',
            showItems:false
        }
    }
    render(){
        const contents = ['A','B','C','D','E','F','G','H','I','J','K','L','M',
                            'N','O','P','Q','R','S','T','U','V','W','X','Y',
                            'Z','#']
        const {titleBtn,showItems} = this.state
        return(
            <div >
                <div className={cx('flexbox','items-center')}>
                    {titleBtn}
                    <Svg
                        paths={showItems?[fileSvgIcons.down]:[fileSvgIcons.up]}
                        size={[16,16]}
                        className={styles.retract}
                        onClick={()=>{this.clickRetract()}}
                    />
                </div>
                <div className={styles.checkbox}>
                    <ul className={cx('flexbox','row','wrap',styles.ul)}>
                {
                    showItems? contents.map((content)=>{
                        return(
                        <li className={styles.liItem}>
                            <span
                                className={styles.spanStyle}
                                onClick={(e)=>{this.clickListItem(e)}}
                            >
                                {content}
                            </span>
                        </li>
                        )
                    }):null
                }
                    </ul>
                </div>
            </div>
        )
    }
    clickRetract=()=>{
        this.setState({
            showItems:!this.state.showItems
        })
    }
    clickListItem=(e)=>{
        if(e.target.innerText=='#'){
            this.setState({
                titleBtn:'A-Z'
            })
            return
        }
        this.setState({
            titleBtn:e.target.innerText
        })
    }
}
module.exports=AToZ
