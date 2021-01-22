import {posts, services} from './dummy-data'

class Utils {
  constructor() {
    this.data = {
      posts,
      services
    }
}

  async fetch(resource) {
    return new Promise((resolve, reject) => {

      if (!this.data[resource]) {
        return reject({
          status: 404,
          success: false,
          message: `"${resource}" could not be found`
        })
      }

      try {
        setTimeout(() => resolve({ status: 200, success: true, data: {[resource]: this.data[resource]} }), 1000)
      } catch (err) {
        return reject({
          ...err,
          status: 400,
          success: false,
          message: 'Internal Server Error',
        })
      }
    })
  }

  async getResource(resource) {
     return await this.fetch(resource)
  }

}

export default new Utils()