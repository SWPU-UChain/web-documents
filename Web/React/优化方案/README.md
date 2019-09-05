#### 性能优化方案

###### 两大主要问题：

    1、首屏问题（打包文件过大）
        解析：浏览器内核有GUI渲染引擎和js引擎，跨线程通信(操作dom)效率较低，并且html需要由js执行生成，js执行也需要时间
    2、seo问题
        解析：spa的通病~爬虫爬取的是html标签，无法识别服务器的js文件内容
    
###### 优化方案：

    1、服务器渲染 - 首屏、seo
        原理：返回html字符串，客户端跳过了js执行生成html、html文件解析等过程，直接将html字符串转化为token显示到页面
        优势：
            加快首屏速度   
            优化seo
            不占用客户端资源
        缺陷：
            占用服务器资源（路由跳转、html生成全靠服务器，加大服务器负荷）
            不利于前后端分离
    2、prerender-spa-plugin（预渲染）- 首屏、seo
        将js文件预先渲染为html文件（根据路由），so客户端直接获取html文件进行解析，而不是由js生成html文件
        原理：
            基于puppeteer，puppeteer基于Chromium，Chromium(谷歌浏览器的引擎)可以在后台运行js将对应路由的html生成，并且注入文件中
    3、Polyfill.io - 首屏
        Polyfill用来做为es2015+语法的兼容，但在不需要做兼容的高版本浏览器上会带来文件过大的问题，而且Polyfill在全局对象上封装了很多做兼容的属性和方法导致全局对象的臃肿，会带来js执行效率的问题，
        使用：加入script链接 https://cdn.polyfill.io/v2/polyfill.js
        原理：  
             服务器通过识别 User-Agent http请求头来识别浏览器的种类，返回不同的js文件，高版本浏览器返回的文件内容如下
             /* Polyfill service v3.25.1
              * For detailed credits and licence information see https://github.com/financial-times/polyfill-service.
              * 
              * UA detected: chrome/75.0.0
              * Features requested: default
              *  */
             
             (function(undefined) {
             
             /* No polyfills found for current settings */
             
             })
             .call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
    4、DOM渲染层与GPU硬件加速：
           过程：
                1、浏览器先获取dom树并根据  