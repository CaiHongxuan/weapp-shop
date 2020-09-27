const wxRequest = async (params = {}, url) => {
  // todo loading
  let data = params.query || {}
  let method = params.method || 'GET'
  return new Promise((resolve, reject) => {
    wx.request({
      url: url,
      method: method,
      data: data,
      header: {
        'content-type': 'application/json'
      },
      success(res) {
        console.log('wxRequest.success', res)
        resolve(res.data)
      },
      fail(res) {
        console.log('wxRequest.error', res)
        reject(res)
      }
    })
  })
  // todo end load
}

// 使用fastmock模拟数据
const apiBaseUrl = 'https://www.fastmock.site/mock/60d3d3759492183873e05690570c449d/api'

// 商品分类
// 一级分类
const rootCategoryList = (params) => wxRequest(params, apiBaseUrl + '/root-cate-list')
// 通过一级分类获取二三级分类
const childrenCategoryList = (params) => wxRequest(params, apiBaseUrl + '/children-cate-list')

// 获取历史搜索关键词
const getHisKeywordList = (params) => wxRequest(params, apiBaseUrl + '/his-keywords')

// 获取商品列表
const goodsList = (params) => wxRequest(params, apiBaseUrl + '/goods-list')

// 获取商品详情
const goodsDetail = (params) => wxRequest(params, apiBaseUrl + '/goods-detail')

// 加入购物车
const addCart = (params) => wxRequest(params, apiBaseUrl + '/add-cart')

// 购物车商品列表
const cartList = (params) => wxRequest(params, apiBaseUrl + '/cart-list')

// 切换勾选购物车全部商品
const cartCheckAll = (params) => wxRequest(params, apiBaseUrl + '/cart-check-all')

// 更新购物车（切换勾选购物车某个商品、调整商品数量）
const updateCart = (params) => wxRequest(params, apiBaseUrl + '/update-cart')

// 删除购物车
const delCart = (params) => wxRequest(params, apiBaseUrl + '/del-cart')

export default {
  rootCategoryList,
  childrenCategoryList,
  getHisKeywordList,
  goodsList,
  goodsDetail,
  addCart,
  cartList,
  cartCheckAll,
  updateCart,
  delCart
}
