import request from 'superagent'

let getToken = function(){
  return sessionStorage.getItem('token')
}

let setToken=function(value){
    sessionStorage.setItem('token',value)
}

let getAuthorities= function(){
  return JSON.parse(sessionStorage.getItem('authorities'))
}

let setAuthorities=function(value){
    sessionStorage.setItem('authorities',JSON.stringify(value))
}

let login = function(handleFn,errFn){
  if (isLogged()) {
    return
  }
  verifyUser((res) => {
      setToken(res.token)
      setAuthorities(res.currentAuthorities)
      if (isLogged()) {
          if (handleFn) handleFn(res)
      }else if(errFn){
          errFn(res)
      }
  })
}

let logout = function(successHandle,failureHandle){
    request.get('/logout')
    .then((res)=>{
        const data = JSON.parse(res.text)
        if (data.success) {
            setToken('')
            setAuthorities('')
            if(successHandle) successHandle(data)
        }else {
            if(failureHandle) failureHandle(data)
        }
    })

}

let isLogged = function(){
    return isTokenExist()&&isAuthorited()
}

let isTokenExist = function(){
    const token=getToken()
    const isLogged=token==null||token=="undefined"||token==undefined||token==''
    return !isLogged
}

let isAuthorited = function(){
    if (Auth.allowedAuthorities.length==0) {
        return true
    }
    let currentAuthorities = getAuthorities()
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

  getToken: getToken,

  setToken:setToken,

  logout: logout,

  isLogged: isLogged,

  allowedAuthorities:[]
}

module.exports = Auth
function verifyUser(cb) {
    request.get('/api/auth/islogined')
    .then((res)=>{
        let data=JSON.parse(res.text)
        if (data.success) {
            cb({
              token: Math.random().toString(36).substring(7),
              currentAuthorities:data.data
            })
        }else {
            cb({
                currentAuthorities:[]
            })
        }
    })
}
