// pages/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    account: "",
    password: ""

  },
  //获取账号
  accountInput: function (e) {
    this.setData({
      account: e.detail.value
    })
  },
  //获取密码
  passwordInput: function (e) {
    this.setData({
      password: e.detail.value
    })
  },
  //登陆
  login: function () {
    if (this.data.account.length == 0 || this.data.password.length == 0) {
      wx.showToast({
        title: '用户名和密码不能为空',
        icon: 'loading',
        duration: 1000
      })
    } else if (this.data.account == "admin" && this.data.password == "admin") {
      // 这里修改成跳转的页面  
      wx.showToast({
        title: '登录成功',
        icon: 'success',
        duration: 1000,
        success: function () {
          wx.navigateTo({
            url: '../index/index'
          })
        }
      });
    } else {
      wx.showToast({
        title: '登陆失败',
        icon: 'none',
        duration: 1000
      })
    }
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