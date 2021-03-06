import Card from '../../palette/card1';
//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    tabs: ["全部", "直播中", "待直播", "录播"],
    background: ['/images/swiper1.png', '/images/swiper2.png'],
    indicatorDots: true,
    vertical: false,
    autoplay: false,
    interval: 2000,
    duration: 500,
    activeIndex: 0,
    livingBackgroundImg: '/images/u142.png',
    // livingBackgroundImg: 'data:image/png;base64,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',
    toView: '',
    imagePath: '',
    paintPallette: {
      "width": "255px",
      "height": "350px",
      "background": "#f8f8f8",
      "views": [
        {
          "type": "image",
          "url": "/images/saveshare.png",
          "css": {
            "width": "194.1908713692946px",
            "height": "245px",
            "top": "23px",
            "left": "31px",
            "rotate": "0",
            "borderRadius": "",
            "borderWidth": "",
            "borderColor": "#000000",
            "shadow": "",
            "mode": "scaleToFill"
          }
        },
        {
          "type": "image",
          "url": "/images/saveshare.png",
          "css": {
            "width": "20.912863070539466px",
            "height": "13.46153846153849px",
            "top": "0.5400000000000018px",
            "left": "156.6997510373444px",
            "rotate": "0",
            "borderRadius": "",
            "borderWidth": "",
            "borderColor": "#000000",
            "shadow": "",
            "mode": "scaleToFill"
          }
        },
        {
          "type": "qrcode",
          "content": "哈哈哈",
          "css": {
            "color": "#000000",
            "background": "#ffffff",
            "width": "56.80082987551867px",
            "height": "58.5px",
            "top": "281.5px",
            "left": "169.3609958506224px",
            "rotate": "0",
            "borderRadius": ""
          }
        },
        {
          "type": "image",
          "url": "/images/saveshare.png",
          "css": {
            "width": "28.680497925311204px",
            "height": "18.461538461538463px",
            "top": "307.54px",
            "left": "35.33045643153526px",
            "rotate": "0",
            "borderRadius": "",
            "borderWidth": "",
            "borderColor": "#000000",
            "shadow": "",
            "mode": "scaleToFill"
          }
        },
        {
          "type": "text",
          "text": "大学长",
          "css": {
            "color": "#000000",
            "background": "rgba(0,0,0,0)",
            "width": "50px",
            "height": "21.449999999999996px",
            "top": "-3.552713678800501e-15px",
            "left": "180.52697095435684px",
            "rotate": "0",
            "borderRadius": "",
            "borderWidth": "",
            "borderColor": "#000000",
            "shadow": "",
            "padding": "0px",
            "fontSize": "15px",
            "fontWeight": "normal",
            "maxLines": "2",
            "lineHeight": "21.645000000000003px",
            "textStyle": "fill",
            "textDecoration": "none",
            "fontFamily": "",
            "textAlign": "left"
          }
        },
        {
          "type": "text",
          "text": "吃喝玩乐",
          "css": {
            "color": "#4D86F1",
            "background": "rgba(0,0,0,0)",
            "width": "100px",
            "height": "21.449999999999996px",
            "top": "319px",
            "left": "66.93px",
            "rotate": "0",
            "borderRadius": "",
            "borderWidth": "",
            "borderColor": "#000000",
            "shadow": "",
            "padding": "0px",
            "fontSize": "15px",
            "fontWeight": "normal",
            "maxLines": "2",
            "lineHeight": "21.645000000000003px",
            "textStyle": "fill",
            "textDecoration": "none",
            "fontFamily": "",
            "textAlign": "left"
          }
        },
        {
          "type": "text",
          "text": "小仙女",
          "css": {
            "color": "#000000",
            "background": "rgba(0,0,0,0)",
            "width": "100px",
            "height": "21.449999999999996px",
            "top": "302px",
            "left": "70.81px",
            "rotate": "0",
            "borderRadius": "",
            "borderWidth": "",
            "borderColor": "#000000",
            "shadow": "",
            "padding": "0px",
            "fontSize": "15px",
            "fontWeight": "normal",
            "maxLines": "2",
            "lineHeight": "21.645000000000003px",
            "textStyle": "fill",
            "textDecoration": "none",
            "fontFamily": "",
            "textAlign": "left"
          }
        }
      ]
    }

  },
  onImgOK(e) {
    console.log(e, 'e')
    this.imagePath = e.detail.path;
    this.setData({
      image: this.imagePath
    })
  },
  onShareAppMessage() {

  },
  
  tabClick: function(e) {
    console.log(e)
    this.setData({
      activeIndex: e.currentTarget.id
    });
    this.setData({
      toView: `show_${e.currentTarget.id}`
     })
  },
  // 进入预告直播页
  jumpToYG(e) {
    console.log(e.currentTarget.dataset.img, 'e')
    let self = this
    wx.navigateTo({
      url: '../ygzbjr/ygzbjr',
      success: function(res) {
        // 通过eventChannel向被打开页面传送数据
        res.eventChannel.emit('acceptDataToyg', { backImg: e.currentTarget.dataset.img })
      }
    })
  },
  // 跳转到直播中
  jumpToLiving(e) {
    let self = this
    wx.navigateTo({
      url: '../living/living',
      success: function(res) {
        // 通过eventChannel向被打开页面传送数据
        res.eventChannel.emit('acceptDataToyg', { backImg: e.currentTarget.dataset.img })
      }
    })
  },
  // tabbar切换
  tabChange(e) {
    wx.switchTab({
      url: '/mine'
    })
    console.log('tab change', e)
  },
  //事件处理函数
  // bindViewTap: function() {
  //   wx.navigateTo({
  //     url: '../logs/logs'
  //   })
  // },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  openShare() {
    this.setData({
      paintPallette: new Card().palette(),
    });
  },
   /**
   * 生命周期函数--监听页面初次渲染完成
   */
  // onReady: function() {
  //   this.setData({
  //     paintPallette: new Card().palette(),
  //   });
  // },
})
