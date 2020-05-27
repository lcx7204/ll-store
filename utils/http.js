import { promisic } from './utils'

class Http {
  static async request ({ url, data, method = 'GET' }) {
    const res = await promisic(wx.request)({
      url: `${config.apiBaseUrl}${url}`,
      data,
      method
    })
    return res.data
  }
}

// promisic封装wx.request
// promisic(wx.request)({
//   url:'',
//   data:data,
//   method: ''
// })

// 异步回调的三种方式
// callback
// promise
// async await

export {
  Http
}