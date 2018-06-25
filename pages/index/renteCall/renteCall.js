Page({

  data: {
    show: false,//控制下拉列表的显示隐藏，false隐藏、true显示
    routers: [
      {
        name: '',
        url: '../index',
        icon: '/images/renteCall/return.png'
      }],
    renteData:[
      {
        renteid:1,
        rentehouse:'家公馆1号馆 101房',
        prepay:1700,//上个月租金
        nextpay:1800,//下个月租金
        paystatus:'暂未缴费'

      },
      {
        renteid: 2,
        rentehouse: '家公馆1号馆 102房',
        prepay: 1700,//上个月租金
        nextpay: 1800,//下个月租金
        paystatus: '暂未缴费'
      }
      ],
    selectData: ['家公馆1号馆', '家公馆2号馆', '家公馆3号馆', '家公馆4号馆', '家公馆5号馆', '家公馆6号馆'],//下拉列表的数据
    index: 0//选择的下拉列表下标
   
  },
  // 点击下拉显示框
  selectTap() {
    this.setData({
      show: !this.data.show
    });
  },
  // 点击下拉列表
  optionTap(e) {
    let Index = e.currentTarget.dataset.index;//获取点击的下拉列表的下标
    this.setData({
      index: Index,
      show: !this.data.show
    });
  },
  onLoad: function (options) {

  },

  onTapToHistory(event) {
    var renteid = event.currentTarget.dataset.renteid;
    console.log(renteid);
    wx.navigateTo({
      url: 'renteCallHistory/renteCallHistory?id=' + renteid,
    })
  },
  onTapToChanges(event) {
    var renteid = event.currentTarget.dataset.renteid;
    console.log(renteid);
    wx.navigateTo({
      url: 'renteCallChanges/renteCallChanges?id=' + renteid,
    })
  },

})