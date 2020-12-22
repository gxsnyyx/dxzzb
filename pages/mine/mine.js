// pages/mine/mine.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userIcon: '/images/xcxsy/u144.jpg',
    mySeeList: ["/images/xcxsy/u144.jpg", "/images/xcxsy/u144.jpg"],
    sheetList: [
      { text: '清除', value: 1 },
    ],
    sheetLoginOutList: [
      { text: '退出登录', value: 1 },
    ],
    showActionsheet: false,
    showLoginOutSheet: false
  },
  // 打开登出抽屉
  openSheetLogin() {
    wx.hideTabBar({
      animation: false,
    })
    this.setData({showLoginOutSheet : true})
  },
  // 打开清除抽屉
  openSheet() {
    console.log('show')
    wx.hideTabBar({
      animation: false,
    })
    this.setData({showActionsheet : true})
  },
  // 关闭抽屉
  closeSheet() {
    wx.showTabBar({
      animation: false,
    })
  },

   // 点击抽屉
  btnClick(e) {
    console.log(e, 'e')
  },
   // 点击登出抽屉
   btnLoginOutClick(e) {
    console.log(e, 'e')
  },
  // 修改资料
  jumptoeditUserInfo() {
    let self = this
    console.log(1, self.userIcon, this.data.userIcon)
    wx.navigateTo({
      url: '../editUser/editUser',
      success: function(res) {
        // 通过eventChannel向被打开页面传送数据
        res.eventChannel.emit('acceptDataFromOpenerPage', { id: '110',userIcon: self.data.userIcon })
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
    
    wx.showTabBar({
      animation: false,
    })
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