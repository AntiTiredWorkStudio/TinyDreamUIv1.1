Component({
    data:{
        close:false,
    },
    methods: {
        dream() {
            wx.navigateTo({
                url: '/pages/add/add',
            })
        },
        close(){
            this.setData({
                close:false
            })
        }
    },
})