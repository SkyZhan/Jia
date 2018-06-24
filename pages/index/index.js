// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    listData: [
      { "rmb": "20000.00", "rate": "98.0%"},
    ],
    routers: [
      {
        name: '权限管理',
        url: '',
        icon: '/images/index/wenjian.png'
      },
      {
        name: '活动管理',
        url: '',
        icon: '/images/index/activity.png'
      },
      {
        name: '租金催缴',
        url: '../index/renteCall/renteCall',
        icon: '/images/index/rente.png'
      },
      {
        name: '商圈管理',
        url: '',
        icon: '/images/index/house.png'
      },
      {
        name: '报修管理',
        url: '',
        icon: '/images/index/repair.png'
      },
      {
        name: '客户资料',
        url: '',
        icon: '/images/index/book.png'
      },
      {
        name: '报表',
        url: '',
        icon: '/images/index/linegraph.png'
      },
      {
        name: '操作日志',
        url: '',
        icon: '/images/index/logs.png'
      },
      {
        name: '系统设置',
        url: '',
        icon: '/images/index/settings.png'
      }
    ]  
  
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