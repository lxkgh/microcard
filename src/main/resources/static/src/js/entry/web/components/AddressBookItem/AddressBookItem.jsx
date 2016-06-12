import React,{PropTypes} from 'react'
import styles from './AddressBookItem.css'
import cx from 'classnames'
import Svg from 'SvgIcon'
import fileSvgIcons from './abIcons.js'
class AddressBookItem extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            showItems:false
        }
    }
    render(){
        const {showItems} = this.state
        const {userName,cellphone,imgPath}= this.props
        const telhref = `tel:${cellphone}`
        const msghref = `sms:${cellphone}?body=为了联盟!`
        return(
            <div>
                <div className={cx('flexbox','items-center',styles.itemDiv,'space-between')}>
                    <div className={styles.wrapPortrait}>
                        <img
                            src={imgPath}
                            style={{height:'40px',
                                    width:'40px'}}
                        />
                    </div>
                    <div className={styles.name}>
                        <span>{userName}</span>
                    </div>
                    <div className={cx('flexbox','items-center')}>
                        <Svg
                            paths={showItems?[fileSvgIcons.fold]:[fileSvgIcons.unfold]}
                            size={[16,16]}
                            className={styles.retract}
                            onClick={()=>{this.clickRetract()}}
                        />
                    </div>
                </div>
                {
                    showItems?
                    <div className={cx('flexbox',styles.items)}>
                        <a
                            className={styles.aItem}
                            href={telhref}>
                            <Svg
                                paths={[fileSvgIcons.phone]}
                                size={[28,28]}
                            />
                            <span className={styles.spanStyle}>
                                拨号
                            </span>
                        </a>
                        <a
                            className={styles.aItem}
                            href={msghref}
                        >
                            <Svg
                                paths={[fileSvgIcons.shortMsg]}
                                size={[28,28]}
                            />
                            <span className={styles.spanStyle}>
                                短信
                            </span>
                        </a>
                        <a className={styles.aItem}>
                            <Svg
                                paths={[fileSvgIcons.card]}
                                size={[28,28]}
                            />
                            <span className={styles.spanStyle}>
                                查看
                            </span>
                        </a>
                    </div>:null
                }
            </div>
        )
    }
    clickRetract=()=>{
        this.setState({
            showItems:!this.state.showItems
        })
    }
}
AddressBookItem.propTypes = {
    userName:PropTypes.string,
    cellphone:PropTypes.string,
    imgPath:PropTypes.string
}
module.exports=AddressBookItem
