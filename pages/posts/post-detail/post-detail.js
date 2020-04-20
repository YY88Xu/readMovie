var postsData = require("../../../data/posts-data");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    collected: false
  },

  /**
   * 生命周期函数--监听页面加载  一般在这里去后台获取数据 {{true}} boolean类型
   */
  onLoad: function (options) {
    var postId = options.id;
    var postData = postsData.postsList[postId];
    this.data.currentPostId = postId;
    this.setData({
      ...postData
    });
    var postsCollected = wx.getStorageSync('posts_collected');
    if (postsCollected) {
      let current = postsCollected[postId];
      if (current) {
        this.setData({
          collected: current
        })
      } else {
        postsCollected[postId] = false;
        wx.setStorageSync('posts_collected', postsCollected);
      }

    } else {
      postsCollected = {};
      postsCollected[postId] = false;
      wx.setStorageSync('posts_collected', postsCollected);
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

  },

  tapCollection() {
    // var tmp = wx.getStorageSync('posts_collected');
    // console.log(this.data.currentPostId);
    // let collected = tmp[this.data.currentPostId];
    // collected = !collected;
    // tmp[this.data.currentPostId] = collected;
    // wx.setStorageSync('posts_collected', tmp);
    // this.setData({
    //   collected: collected
    // })
    // wx.showToast({
    //   title: collected ? '收藏成功' : '取消成功',
    //   duration: 1000
    // })
    let that = this;
    wx.showModal({
      content: that.data.collected ? '是否取消收藏' : "是否收藏",
      success: function (res) {
        if (res.confirm) {
          var tmp = wx.getStorageSync('posts_collected');
          let collected = tmp[that.data.currentPostId];
          collected = !collected;
          tmp[that.data.currentPostId] = collected;
          wx.setStorageSync('posts_collected', tmp);
          that.setData({
            collected: collected
          })
        }
      }
    })

  }
})