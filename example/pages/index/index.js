var Wxmlify = require('../../wxmlify/wxmlify')
var sample = require('../../sample')

Page({
  onLoad() {
    var self = this;
    my.setNavigationBar({
      title: 'Alipay小程序解析HTML',
    });
    var wxmlify = new Wxmlify(sample.test, this, {
      preserveStyles: ['fontSize', 'fontWeight', 'fontStyle', 'color', 'textDecoration', 'textAlign', 'backgroundColor', 'background'],
      dataKey: 'description',
      disableImagePreivew: false,
      onImageTap: function (evt) {
        console.log(evt)
      }
    })

    console.log(wxmlify.getFullNodes())
    // console.log(wxmlify.getHTML())
  }
})
