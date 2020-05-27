import { Http } from '../utils/http'

class Theme {
  static async getHomeLocationA () {
    //模板字符串 ES6
    return await Http.request({
      url: `themes`,
      data: {
        name: 't-1'
      },
      method: 'GET'
    })
  }
}

export {
  Theme
}