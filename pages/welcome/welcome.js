Page({
  bindTap(){
    // wx.navigateTo({
    //   url: '../posts/posts',
    // });
    // wx.redirectTo({
    //   url: '../posts/posts',
    // })
    wx.switchTab({
      url: '../posts/posts',
    })
  },
  onUnload(){
    console.log('welcome page is unload')
  },
  onHide(){
    console.log("welcome page is hide")
  }
})