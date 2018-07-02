// pages/index/renteCall/renteCallChanges/renteCallChanges.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
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
  
  },
  // 提交信息
  formSubmit: function (e) {
    var house = parseInt(e.detail.value.housefee);
    var water = parseInt(e.detail.value.waterfee);
    var eletr = parseInt(e.detail.value.eletrfee);
    var prope = parseInt(e.detail.value.propefee);
    var other = parseInt(e.detail.value.otherfee);
    var total = house+water+eletr+prope+other;
    console.log('form发生了submit事件，总额度为：', total);
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
  },


})