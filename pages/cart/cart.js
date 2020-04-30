// pages/cart/cart.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [{
      id:0,name:0,checked:false
    },
    {
      id:1,name:1,checked:false
    },
    {
      id:2,name:2,checked:false
    },
    {
      id:3,name:3,checked:false
    }],
    selectAll: false
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
  // 选择
  choose: function (e) {
    console.log(e);
    let index = e.currentTarget.dataset.index;
    let flag = !this.data.list[index].checked;
    let checked = 'list['+ index +'].checked';
    this.setData({
      [checked]: flag
    })
    this.checkChoose();
  },
  // 进入详情
  goDetail: function () {
    console.log(12)
    // wx.navigateTo({
    //   url: 'detail'
    // })
  },
  reduce: function () {
    console.log(11111)
    let value = this.data.value;
    value--
    if (value <= 0) {
      return false;
    }
    this.setData({
      value: value
    })
  },
  add: function () {
    let value = this.data.value;
    value++
    this.setData({
      value: value
    })
  },
  stop: function (e) {
    console.log(e)
  },
  onClose(event) {
    const { position, instance } = event.detail;
    switch (position) {
      case 'left':
      case 'cell':
        instance.close();
        break;
      case 'right':
      // 执行删除操作
        break;
    }
  },
  // 全选
  chooseAll: function () {
    
    let selectAll = this.data.selectAll;
    console.log(selectAll)
    let list = this.data.list;
    if (selectAll) {
      for (let i = 0; i < list.length; i++) {
        list[i].checked = false;
      };
      this.setData({
        selectAll:false,
        list:list
      })
    } else {
      for (let i = 0; i < list.length; i++) {
        if (!list[i].checked) {
          list[i].checked = !list[i].checked;
        }
      };
      this.setData({
        selectAll:true,
        list:list
      })
    }
  },
  checkChoose: function () {
    let list = this.data.list;
    let result = list.some((item,index) => {
      return item.checked == false
    })
    console.log(result)
    if (!result) {
      this.setData({
        selectAll:true,
      })
    } else {
      this.setData({
        selectAll:false,
      })
    }
  }
})