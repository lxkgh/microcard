import request from 'superagent'

let getUserId = function(){
  return sessionStorage.getItem('userId')
}

let setUserId=function(value){
    sessionStorage.setItem('userId',value)
}

let loginClient = function(handleFn,errFn,finallyFn){
  if (isLogged()) {
    if (handleFn) handleFn()
    if (finallyFn) finallyFn()
    return
  }
  verifyUser((res) => {
      setUserId(res.userId)
      Auth.authorities=res.currentAuthorities
      Auth.username=res.username
      if (isLogged()) {
          if (handleFn) handleFn()
      }else if(errFn){
          errFn()
      }
      if (finallyFn) finallyFn()
  })
}

let loginServer=function(user,successHandle,failureHandle,errHandle){
    request.post('/login')
    .send(user)
    .set('Content-Type','application/x-www-form-urlencoded')
    .then((res)=>{
        const data = JSON.parse(res.text)
        if (data.success) {
            if (successHandle) successHandle(data)
        }else {
            if (failureHandle) failureHandle(data)
        }
    },errHandle)
}

let logoutServer = function(successHandle,failureHandle){
    request.get('/logout')
    .end((err,res)=>{
        if (err) {
            if(failureHandle) failureHandle(err.message)
            return
        }
        const data = JSON.parse(res.text)
        if (data.success) {
            logoutClient()
            if(successHandle) successHandle(data)
        }else {
            if(failureHandle) failureHandle(data.desc)
        }
    })

}

let logoutClient = function(){
    setUserId('')
    Auth.username=''
    Auth.authorities=[]
}

let isLogged = function(){
    return isUserIdExist()&&isAuthorited()
}

let isUserIdExist = function(){
    const userId=getUserId()
    const isLogged=userId==null||userId=="undefined"||userId==undefined||userId==''
    return !isLogged
}

let isAuthorited = function(){
    if (Auth.allowedAuthorities.length==0) {
        return true
    }
    let currentAuthorities = Auth.authorities
    if (currentAuthorities.length==0) {
        return false
    }
    for (let i = 0; i < Auth.allowedAuthorities.length; i++) {
        for (let j = 0; j < currentAuthorities.length; j++) {
            if (Auth.allowedAuthorities[i]==currentAuthorities[j].authority) {
                return true
            }
        }
    }
    return false
}

const Auth={
  loginClient:loginClient,

  loginServer:loginServer,

  getUserId: getUserId,

  setUserId:setUserId,

  logoutServer: logoutServer,

  logoutClient:logoutClient,

  isLogged: isLogged,

  allowedAuthorities:[],

  authorities:[],

  username:''
}

module.exports = Auth
function verifyUser(cb) {
    request.get('/api/auth/islogined')
    .then((res)=>{
        let data=JSON.parse(res.text)
        if (data.success) {
            cb({
              userId:data.data['userId'],
              username:data.data['username'],
              currentAuthorities:data.data['authorities']
            })
        }else {
            cb({
                userId:'',
                username:'',
                currentAuthorities:[]
            })
        }
    })
}
