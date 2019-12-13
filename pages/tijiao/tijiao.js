// pages/tijiao/tijiao.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    value5:"",
    array: ['男', '女'],
    array1: ['1997', '1998'],
    objectArray: [
      {
        id: 0,
        name: '美国'
      },
      {
        id: 1,
        name: '中国'
      },
    ], index: 0, fruit: [{
      id: 1,
      name: '香蕉',
    }, {
      id: 2,
      name: '苹果'
    }, {
      id: 3,
      name: '西瓜'
    }, {
      id: 4,
      name: '葡萄',
    }],
    current: '苹果',
    date: ["2014/01/01", "2014/02/02", "2014/03/01", "2014/03/01"],
  },
  
  bindPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },
  changColor(e){
    this.setData({
      key: e.target.dataset.index
    })
  },


  handleFruitChange({ detail = {} }) {
    this.setData({
      current: detail.value
    });
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