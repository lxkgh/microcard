import request from 'superagent'

module.exports = {
  login(username, password, cb) {
    cb = arguments[arguments.length - 1]
    if (localStorage.token) {
      if (cb) cb(true)
      this.onChange(true)
      return
    }
    verifyUser(username, password, (res) => {
      if (res.authenticated) {
        localStorage.token = res.token
        if (cb) cb(true)
        this.onChange(true)
      } else {
        if (cb) cb(false)
        this.onChange(false)
      }
    })
  },

  getToken: function () {
    return localStorage.token
  },

  logout: function (cb) {
    delete localStorage.token
    if (cb) cb()
    this.onChange(false)
  },

  loggedIn: function () {
    return !!localStorage.token
  },

  onChange: function () {}
}

function verifyUser(username, password, cb) {
    request.post('/verifyuser')
    .send({username:username,password:password})
    .then((err,res)=>{
        if (err) {
            cb({ authenticated: false })
            return
        }
        let data=JSON.parse(res.text)
        if (data.success) {
            cb({
              authenticated: true,
              token: Math.random().toString(36).substring(7)
            })
        }else {
            cb({ authenticated: false })
        }
    })
}
