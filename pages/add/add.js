// pages/add/add.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        windowH:'',
        windowW:'',
        status:false,
        hide:true,
        showModalStatus: false
    },
    // 公函查看
    look: function(){
        wx.showLoading({
            title: '加载中',
            mask:true
        })
        let that = this;
        wx.downloadFile({
            url: 'http://tdream.antit.top/image/transactionform.jpg',
            success(res) {
                var ctx = wx.createCanvasContext('look');
                ctx.setFillStyle("#fff");
                ctx.fillRect(0,0,that.data.windowW,that.data.windowH);
                ctx.drawImage(res.tempFilePath, 0, 0, 793, 1122, 0, 0, that.data.windowW, that.data.windowH-100)
                ctx.draw();
                that.setData({
                    hide: false
                })
                wx.hideLoading();
            }
        })
    },
    // 关闭查看
    close: function(){
        console.log(1)
        this.setData({
            hide:true
        })
    },
    // 公函下载
    download: function(){
        this.setData({
            status:true
        })
        wx.showLoading({
            title:'正在保存',
            mask:true,
        })
        wx.downloadFile({
            url:'http://tdream.antit.top/image/transactionform.jpg',
            success(res){
                var ctx = wx.createCanvasContext('photo');
                ctx.drawImage(res.tempFilePath, 0, 0, 793, 1122, 0, 0, 793, 1122)
                ctx.draw();
                setTimeout(function () {
                    wx.canvasToTempFilePath({
                        canvasId: 'photo',
                        success(res) {
                            console.log(res)
                            wx.saveImageToPhotosAlbum({
                                filePath: res.tempFilePath,
                                success(res) {
                                    if (res.errMsg == "saveImageToPhotosAlbum:ok") {
                                        wx.hideLoading();
                                        wx.showToast({
                                            title: '保存成功',
                                            icon: 'success',
                                            mask: true
                                        })
                                    } else {
                                        wx.hideLoading();
                                        wx.showToast({
                                            title: '保存失败',
                                            icon: 'none',
                                            mask: true
                                        })
                                    }
                                }
                            })
                        }
                    })
                }, 1000)
            },
            fail(res){
                wx.hideLoading();
                wx.showToast({
                    title: '网络错误，下载失败',
                    icon:'none',
                    mask:false
                })
                return;
            }
        })
    },
    // 提交
    submit: function(e){
        // 后台处理
        // 提交成功调用弹出层
        var current = e.target.dataset.statu;
        this.modal(current);
    },
    // 弹出框
    power(e){
        console.log(e)
        var current = e.target.dataset.statu;
        this.modal(current);
    },
    modal: function(current){
        // 创建动画
        var animation = wx.createAnimation({
            duration:200,
            timingFunction:'liner',
            delay:0
        });
        // 实例化animation
        this.animation = animation;
        // 执行一组动画
        animation.opacity(0).rotateX(-100).step();
        // 导出给数据存储对象进行存储
        this.setData({
            animationData:animation.export()
        })
        // 到达指定时间执行第二组动画
        setTimeout(function(){
            animation.opacity(1).rotateX(0).step()
            this.setData({
                animationData:animation
            })
            // 关闭
            if(current == 'close'){
                this.setData({
                    showModalStatus:false,
                })
            }
        }.bind(this),200)
        if(current == 'open'){
            this.setData({
                showModalStatus:true
            })
        }
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        let that = this;
        wx.getSystemInfo({
            success: function(res) {
                that.setData({
                    windowH:res.windowHeight,
                    windowW:res.windowWidth
                })
            },
        })
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