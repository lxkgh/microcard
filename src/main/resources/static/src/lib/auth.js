import request from 'superagent'

let getUserId = function(){
  return sessionStorage.getItem('userId')
}

let setUserId=function(value){
    sessionStorage.setItem('userId',value)
}

let login = function(handleFn,errFn,finallyFn){
  if (isLogged()) {
    if (handleFn) handleFn()
    if (finallyFn) finallyFn()
    return
  }
  verifyUser((res) => {
      setUserId(res.userId)
      Auth.authorities=res.currentAuthorities
      if (isLogged()) {
          if (handleFn) handleFn()
      }else if(errFn){
          errFn()
      }
      if (finallyFn) finallyFn()
  })
}

let logout = function(successHandle,failureHandle){
    request.get('/logout')
    .then((res)=>{
        const data = JSON.parse(res.text)
        if (data.success) {
            setUserId('')
            Auth.authorities=[]
            if(successHandle) successHandle(data)
        }else {
            if(failureHandle) failureHandle(data)
        }
    })

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
  login:login,

  getUserId: getUserId,

  setUserId:setUserId,

  logout: logout,

  isLogged: isLogged,

  allowedAuthorities:[],

  authorities:[]
}

module.exports = Auth
function verifyUser(cb) {
    request.get('/api/auth/islogined')
    .then((res)=>{
        let data=JSON.parse(res.text)
        if (data.success) {
            cb({
              userId:data.data['userId'],
              currentAuthorities:data.data['authorities']
            })
        }else {
            cb({
                userId:'',
                currentAuthorities:[]
            })
        }
    })
}
