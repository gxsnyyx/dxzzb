// pages/shopTrolley/shopTrolley.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabs: [],
    activeTab: 0,
    cardList: [
      {
        id: '1',
        cardImg: '/images/xcxsy/logo.png',
        cardName: '这里是card的名字可能很长',
        isHave: false,
        cardTags: ['tag1','tag2'],
        cardDesc: '这里是一个描述',
        cardPrice: '这里是价格'
      }
    ],
    myList:[]
    // search: null
  },
  onTabCLick(e) {
    const index = e.detail.index
    this.setData({activeTab: index})
  },

  // 搜索功能
  selectResult(e) {
    console.log('select result', e.detail)
  },

  onChange(e) {
    
    const index = e.detail.index
    this.setData({activeTab: index})
  },
  // 获取橱窗列表
  getShopTrolleyList() {
    // cardList
    const titles = [`首页(${this.data.cardList.length})`, `title(${this.data.myList.length})`]
    const tabs = titles.map(item => ({title: item}))
    this.setData({tabs})
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
    this.getShopTrolleyList()
    this.setData({
      search: this.search.bind(this)
  })
  },
  search: function (value) {
    console.log(value, 'value')
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([{text: '搜索结果', value: 1}, {text: '搜索结果2', value: 2}])
        }, 200)
    })
},
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})