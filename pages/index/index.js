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
      jindu:''
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
  lucky: function () {
      wx.navigateTo({
          url: '/pages/lucky/lucky',
      })
  },
  rules: function () {
      wx.navigateTo({
          url: '/pages/rules/rules',
      })
  },
  onLoad: function () {
    this.update();
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
