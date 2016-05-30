import messenger from 'web.Messenger'
export var webErrHandle=(err)=>{
    messenger.showMsg({
        msg:err.message
    })
}
