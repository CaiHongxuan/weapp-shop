const wxRequest = async(params = {}, url) => {
    // todo loading
    let data = params.query || {}
    let method = params.method || 'GET'
    let result = new Promise((resolve, reject) => {
        wx.request({
            url: url,
            method: method,
            data: data,
            header: {
                'content-type': 'application/json'
            },
            success (res) {
                console.log("wxRequest.success", res)
                resolve(res.data)
            },
            fail (res) {
                console.log("wxRequest.error", res)
                reject(res)
            }
        })
    })
    // todo end load
    return result
}

// 使用fastmock模拟数据
const apiBaseUrl = 'https://www.fastmock.site/mock/60d3d3759492183873e05690570c449d/api'

// 商品分类
// 一级分类
const rootCategoryList = (params) => wxRequest(params, apiBaseUrl + '/root-cate-list')
// 通过一级分类获取二三级分类
const childrenCategoryList = (params) => wxRequest(params, apiBaseUrl + '/children-cate-list')

export default {
    rootCategoryList,
    childrenCategoryList
}