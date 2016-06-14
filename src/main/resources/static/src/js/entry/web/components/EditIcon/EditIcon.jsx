import React,{PropTypes} from 'react'
import Button from 'webfront.Button'
import styles from './editIcon.css'
import cx from 'classnames'
import Svg from 'SvgIcon'
import fileSvgIcons from './editIconIcons'

class EditIcon extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            title:this.props.activeIcon.title,
            website:this.props.activeIcon.website,
            paths:''
        }
    }
    componentWillReceiveProps(nextProps) {
        this.setState({
            title :nextProps.activeIcon.title,
            website:nextProps.activeIcon.website,
            paths:nextProps.activeIcon.paths
        })
    }
    render(){
        const {active,clickCloseBtn,editIconSubmit} = this.props
        const {title,website,paths} = this.state
        return(
            <div
                className= {styles.pageCont}
                style={{transform:active?'translateY(-400px)':'translateY(100px)'}}>
                <div
                    className={cx(styles.closeBtn,'flexbox',
                                    'items-center','flex-center')}
                    onClick={clickCloseBtn}>
                    <Svg
                        paths={[fileSvgIcons.close]}
                        size={[20,20]}
                    />
                </div>
                <div className={cx(styles.title,'flexbox')}>
                    <ul className={cx(styles.ulTitle,'flexbox')}>
                        <li className={cx(styles.liTitle)}>
                            <a className={styles.aTitle}>
                                自定义
                            </a>
                        </li>
                        <li className={cx(styles.liTitle)}>
                            <a className={styles.aTitle}>
                                系统栏目
                            </a>
                        </li>
                    </ul>
                </div>
                <div className={styles.content}>
                    <div style={{padding:'0px 10px 0px 10px'}}>
                        <p className={styles.pTip}>
                            自定义标题长度不超过6个字符
                        </p>
                        <div className={styles.editIcon}>
                        </div>
                        <div className={styles.pIconTitle}>
                            <div className={cx('flexbox','flex-center')}>
                                <div className={cx('flexbox','items-center',
                                                styles.SvgIcon)}>
                                    <Svg
                                        paths={[paths]}
                                        size={[80,80]}
                                        direction={[0.6,-0.6]}
                                        position={[15,52]}
                                        style={{fill:'#fff'}}
                                    />
                                </div>
                            </div>
                            <div style={{marginTop:'5px'}}>
                                所编辑图标
                            </div>
                        </div>
                        <input
                            type="text"
                            placeholder="自定义名称: 例 丰享商城"
                            className={styles.bottomInput}
                            onChange={this.changeTitle}
                            value={title}
                        />
                        <input
                            type="text"
                            placeholder="链接地址: 例 www.itbegin.com"
                            className={styles.bottomInput}
                            onChange={this.changeWebsite}
                            value={website}
                        />
                        <div style={{marginTop:'30px'}}>
                            <Button onClick={()=>{
                                editIconSubmit({title,website})
                            }}>
                                保存
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    changeTitle=(e)=>{
        this.setState({
            title:e.target.value
        })
    }
    changeWebsite=(e)=>{
        this.setState({
            website:e.target.value
        })
    }
}
EditIcon.defaultProps={
    active:false,
    activeIcon:{
        title:'',
        website:''
    }
}
EditIcon.propTypes={
    location:PropTypes.object,
    active:PropTypes.bool,
    clickCloseBtn:PropTypes.func,
    activeIcon:PropTypes.object,
    editIconSubmit:PropTypes.func.isRequired
}
module.exports=EditIcon
