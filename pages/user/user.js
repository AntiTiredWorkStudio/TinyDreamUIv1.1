// 个人中心逻辑处理
// 获取应用实例
const app = getApp()

Page({

    /**
     * 页面的初始数据
     */
    data: {

    },
    // 点击我的参与跳转
    dream_help: function () {
        wx.navigateTo({
            url: '/pages/dreamHelp/dreamHelp',
        })
    },
    // 梦想服务
    server: function () {
        wx.navigateTo({
            url: '/pages/dreamServer/dreamServer',
        })
    },
    // 手机号管理
    phoneMangement: function () {
        wx.navigateTo({
            url: '/pages/phoneMangement/phoneMangement',
        })
    },
    // 系统通知
    notice: function () {
        wx.navigateTo({
            url: '/pages/notice/notice',
        })
    },
    // 实名认证
    auth: function () {
        wx.navigateTo({
            url: '/pages/auth/auth',
        })
    },
    // 常见问题
    question: function () {
        wx.navigateTo({
            url: '/pages/questionInfo/questionInfo',
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