/**
 * @file fis-conf.js
 */
'use strict';
(function (fis) {

    // 忽略构建文件
    fis.set('project.ignore', fis.get('project.ignore').concat(['build/**', '.gitignore', 'package.json', 'README.md']));
    // 按需加载依赖
    fis.set('project.files', ['/*.html', '/mock/**']);
    // 采用 commonJS 规范
    fis.hook('commonjs', { extList: ['.js', '.es6', '.jsx'], baseUrl: '/src/' });
    // 采用 node_modules 依赖
    fis.hook('node_modules').unhook('components');


    // 压缩 css
    fis.match('*.css', { optimizer: fis.plugin('clean-css') });
    // 压缩 png
    fis.match('*.png', { optimizer: fis.plugin('png-compressor') });
    // 压缩 html
    fis.match('*.html', { optimizer: fis.plugin('htmlminify') });
    // 压缩 html 行内的 js, mod.js
    fis.match('{*.html:js,/static/lib/mod.js}', { optimizer: fis.plugin('uglify-js') });


    // 开启 js 模块化
    fis.match('/{src,node_modules}/**.{js,es6,jsx}', { isMod: true });
    // 开启 babel 转码
    fis.match('/src/**.{es6,jsx}', {
        rExt: 'js',
        preprocessor: [fis.plugin('js-require-css'), fis.plugin('js-require-file')],
        parser: fis.plugin('babel-5.x', {
            optional: ['es7.decorators', 'es7.classProperties'],
            sourceMaps: true
        })
    });


    // 合并 node_modules 依赖 && 因为是纯前端项目，依赖不能自动被加载进来，所以这里需要借助一个 loader 来完成
    fis.match('/node_modules/**.js', { optimizer: fis.plugin('uglify-js'), packTo: '/pkg/third.js' })
       .match('::package', {
            postpackager: fis.plugin('loader', {
                resourcemapWhitespace: 0,
                useInlineMap: true
            })
        });


    // 生产环境
    fis.media('production')
       .match('!(*.html)', { useHash: true })
       .match('/(mock/**)', { release: false })
       .match('/{static,src,node_modules}/**.{js,es6,jsx}', { packTo: '/pkg/all.js', moduleId: function () { return fis.util.md5(arguments[1], 20); }, optimizer: fis.plugin('uglify-js') })
}(fis));