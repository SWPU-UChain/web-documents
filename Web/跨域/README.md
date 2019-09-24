#### 简单请求和复杂请求

1、简单请求：

   method： get、post、head中的其中一个
    
   content-type：text/plain、multipart/form-data、application/x-www-form-urlencoded中其中一个

   xhr中默认请求头为application/json，是复杂请求
   
2、复杂请求：非简单请求的都是复杂请求

   复杂请求首先会发起一个预检请求，该请求是option方法的，通过该请求来知道服务端是否允许跨域请求
   