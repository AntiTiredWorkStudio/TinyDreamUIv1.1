// 小梦想互助逻辑处理
const app = getApp();

Page({

    /**
     * 页面的初始数据
     */
    data: {
        // 互助池状态切换信号量
        status:'1',
        statusList:[{
            status:'进行中'
        },{
            status:'我参与'
        },{
            status:'已结束'
        }],
        id:[{id:1},{id:2}]
    },
    // 状态切换--逻辑处理
    statustab: function (e) {
        console.log(e);
        this.setData({
            status:e.target.dataset.index
        })
    },
    // 绘制参与进度
    drawCircle: function (i) {
        var ctx = wx.createCanvasContext('top-' + i)
        console.log(ctx)
        ctx.setFillStyle('white');
        ctx.clearRect(0, 0, 85, 85);
        ctx.setLineWidth(7);
        ctx.setStrokeStyle('#ffc057');
        ctx.setLineCap('round');
        ctx.beginPath();
        ctx.arc(42.5, 42.5, 35.5, Math.PI / -2, 1.5 * Math.PI - Math.PI / 2, false);
        ctx.stroke()
        ctx.draw()
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        for (var i = 0, len = this.data.id.length; i < len; i++) {
            this.drawCircle(this.data.id[i].id)
        }
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {
        for (var i = 0, len = this.data.id.length; i < len; i++) {
            var cxt_arc = wx.createCanvasContext('bottom-'+this.data.id[i].id);
            cxt_arc.setLineWidth(7);
            cxt_arc.setStrokeStyle('#edf0f5');
            cxt_arc.setLineCap('round');
            cxt_arc.beginPath();
            cxt_arc.arc(42.5, 42.5, 35.5, 0, 2 * Math.PI, false);
            cxt_arc.stroke();
            cxt_arc.draw();
        }
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