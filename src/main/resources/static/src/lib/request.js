class Request {
  constructor(url) {
    this.url = url
    this.client=new XMLHttpRequest()
  }
  set (key, value) {
    this.client.setRequestHeader(key,value)
    return this
  }
  get (obj) {
    this.client.open('GET',AddObj(this.url,obj),true)
    return this
  }
  post (obj) {
    this.obj=obj
    this.client.open('POST',this.url,true)
    this.set("Content-type", "application/json;charset=utf-8")
    return this
  }
  put (obj) {
    this.obj=obj
    this.client.open('PUT',AddObj(this.url,obj),true)
    this.set("Content-type", "application/json;charset=utf-8")
    return this
  }
  delete (obj) {
    this.client.open('DELETE',AddObj(this.url,obj),true)
    return this
  }
  then (fn) {
    this.promise=Ajax(this.client,this.obj)
    this.promise=this.promise.then(fn)
    return this
  }
  catch (fn) {
    this.promise=this.promise.catch(fn)
    return this
  }
}
export default Request


function Ajax(client,obj){
  return new Promise(function(resolve, reject){
    client.send(sendStr(obj))
    client.onload = function () {
      if (this.status >= 200 && this.status < 300) {
        try {  resolve(JSON.parse(this.response))  }
        catch (e) {  console.log(e)  }
      } else {
        reject(this.statusText)
        console.log(this.statusText);
      }
    }
    client.onerror = function () {
      reject(this.statusText)
      console.log(this.statusText);
    }
  })
}

function AddObj(url,obj,send){
  if (obj) {
    url += '?'+sendStr(obj)
  }
  return url
}

function sendStr(obj){
  var sendStr=''
  if (obj) {
    var argcount = 0
    for (var key in obj) {
      if (obj.hasOwnProperty(key)) {
        if (argcount++) {
          sendStr += '&'
        }
        sendStr += encodeURIComponent(key) + '=' + encodeURIComponent(obj[key])
      }
    }
  }
  return sendStr
}
