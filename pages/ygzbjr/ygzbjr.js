// pages/ygzbjr/ygzbjr.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    backImg: null,
    weixinimg: '/images/xcxsy/u472.svg'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(this.getOpenerEventChannel(), 'this.getOpenerEventChannel()')
    if (JSON.stringify(this.getOpenerEventChannel()) != '{}') {
      const eventChannel = this.getOpenerEventChannel()
      let self = this
      eventChannel.on('acceptDataToyg', function(data) {
        console.log(data)
        self.setData({
          backImg: data.backImg,
        })
      })
    }
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