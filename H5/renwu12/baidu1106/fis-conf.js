fis.match('::packager', {
  spriter: fis.plugin('csssprites')
});


//加  md5
fis.match('*.{js,css,png}', {
  useHash: true
});


// fis-optimizer-uglify-js 插件进行压缩，已内置
fis.match('*.js', {
  optimizer: fis.plugin('uglify-js')
});


// fis-optimizer-clean-css 插件进行压缩，已内置
fis.match('*.css', {
  useSprite: true,
  optimizer: fis.plugin('clean-css')
});

// fis-optimizer-png-compressor 插件进行压缩，已内置
fis.match('*.png', {
  optimizer: fis.plugin('png-compressor')
});