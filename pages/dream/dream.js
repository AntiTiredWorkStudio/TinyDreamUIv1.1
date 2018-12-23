// 小梦想逻辑处理
// 获取应用实例
const app = getApp()

Page({

    /**
     * 页面的初始数据
     */
    data: {
        // 是否显示空
        isShow:false,
        // tab切换数组
        tabList:[{
            tab:'小梦想'
        },{
            tab:'幸运梦想'
        }],
        // 显示那一栏（标记）
        dream:'1'
    },
    // 点击切换事件
    toggle: function (e) {
        console.log(e)
        this.setData({
            dream:e.target.dataset.index+1
        })
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