//参与互助逻辑处理
//获取应用实例
const app = getApp()
var ctx = wx.createCanvasContext('top');

Page({
  data: {
      money:100,
      price:5,
      remaining:20,
      obtainMoney:'80',
      jindu:'',
      close:false,
      message:'0',
      hide:true,
  },
  //绘制进度条
  drawCircle(jindu){
      var jindu = jindu * 2;
      if(jindu == 0){
        ctx.clearRect(0,0,190,190);
        return;
      }
      ctx.setFillStyle('white');
      ctx.clearRect(0,0,190,190);
      ctx.setLineWidth(15);
      ctx.setStrokeStyle('#ffc057');
      ctx.setLineCap('round');
      ctx.beginPath();
      ctx.arc(95, 95, 80, Math.PI/-2, jindu * Math.PI - Math.PI / 2, false);
      ctx.stroke()
      ctx.draw()
  },
  //事件处理函数
  onReady(){
      var cxt_arc = wx.createCanvasContext('bottom');
      cxt_arc.setLineWidth(15);
      cxt_arc.setStrokeStyle('#edf0f5');
      cxt_arc.setLineCap('round');
      cxt_arc.beginPath();
      cxt_arc.arc(95, 95, 80, 0, 2 * Math.PI, false);
      cxt_arc.stroke();
      cxt_arc.draw();
  },
  //跳转到参与页面
  dreamInfo(){
      wx.navigateTo({
          url: '/pages/dreamHelp/dreamHelp',
      })
  }, 
  join(){
    wx.navigateTo({
        url: '/pages/payInfo/payInfo',
    })
  },
  close: function () {
      this.setData({
          close:false
      })
  },
  lucky: function () {
      wx.navigateTo({
          url: '/pages/lucky/lucky',
      })
  },
//  客服
  coach: function () {
      this.setData({
          message:'1',
          hide:!this.data.hide
      })
  },
//   消息
  notice: function () {
      wx.navigateTo({
          url: '/pages/notice/notice',
      })
  },
  rules: function () {
      wx.navigateTo({
          url: '/pages/rules/rules',
      })
  },
  onLoad: function () {
    this.update();
    setTimeout(function(){
        this.setData({
            close:true
        })
    }.bind(this),1000)
      if (this.data.message != 0){
          this.setData({
              hide:false
          })
      }else{
          this.setData({
              hide: true
          })
      }
  },
  update: function () {
      this.setData({
          jindu: this.data.obtainMoney / this.data.money
      })
      this.drawCircle(this.data.jindu);
  },
  onShow: function () {
      this.update();
  },
  getUserInfo: function(e) {
    
  }
})
