import React from 'react'
import styles from './addressBook.css'
import cx from 'classnames'
import AToZ from 'webfront.aToZ'
import AddressBookItem from 'web.AddressBookItem'
import Auth from 'Auth'
import {Prefixs} from 'web.Config'
import request from 'superagent'
import messenger from 'web.Messenger'
import {webErrHandle} from 'ErrHandles'
import defaultPortait from '../home/头像默认.png'
let span1 = true
let span2 = false
class AddressBook extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            active:true,
            userId:Auth.getUserId(),
            contacts:[]
        }
    }
    componentWillMount() {
        this.getContactList()
    }
    render(){
        span1 = this.state.active
        span2 = !this.state.active
        const {contacts} = this.state
        const spanStyle1 = {
            width:'30%',
            textAlign:'center',
            borderBottom:span1?'2px solid #2999ff':'none'
        }
        const spanStyle2 = {
            width:'30%',
            display:'flex',
            justifyContent:'center',
            borderBottom:span2?'2px solid #2999ff':'none'
        }
        return(
            <div className={styles.pageCont}>
                <div className={styles.addressBook}>
                    <div className={styles.community}>
                        <ul>
                            <li className={'fixed'}>
                                <a className={styles.aCommunity}>我的圈子</a>
                            </li>
                        </ul>
                    </div>
                    <div className={styles.listBook}>
                        <h2 className={styles.listTitle}>全部</h2>
                        <div className={cx(styles.listMenu,'flexbox','space-between')}>
                            <span
                                style={spanStyle1}
                                onClick={()=>{this.clickSpan1()}}
                            >
                                <div>全部</div>
                            </span>
                            <span
                                style={spanStyle2}
                                onClick={()=>{this.clickSpan2()}}
                            >
                                <AToZ />
                            </span>
                        </div>
                        {
                            contacts.map((contact) => {
                                return(
                                    <AddressBookItem
                                        userName={contact.name}
                                        cellphone={contact.phone}
                                        imgPath={
                                            contact.userIcon?
                                            contact.userIcon.path:defaultPortait
                                        }
                                    />
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }
    clickSpan1=()=>{
        if(span1){return}
        this.setState({
            active:!this.state.active
        })
    }
    clickSpan2=()=>{
        if(span2){return}
        this.setState({
            active:!this.state.active
        })
    }
    getContactList=()=>{
        request.get(
            `${Prefixs.usercard}/getContact?userId=${this.state.userId}`
        ).then((res) => {
            const data = JSON.parse(res.text)
            if(data.success){
                this.setState({
                    contacts:data.data
                })
            }else {
                messenger.show({
                    msg:'获取联系人列表失败'
                })
            }
        },webErrHandle)
    }
}
module.exports=AddressBook
