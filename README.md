# 绝区零开发文档

## 前端部分

### 1.1前端工程化部署

使用vite构建vue框架，axios promise 的网络请求库，element-plus UI库，gsap 动画库，sass css预处理器

#### 1.1.1构建vue并启动

安装（安装要求在 npm18.0.0版本以上）

```shell
npm create vue@latest
#启动项目
npm run dev #默认启动指令
#安装完后启动若报错可将vue文件重新安装一遍
npm i
```

#### 1.1.2aixos安装及配置

安装

```shell
npm install axios
```

配置

新建**axios_utlis**

```javascript
import axios from 'axios'

const httpAxios = axios.create({
  baseURL: '/api'
})

httpAxios.interceptors.request.use(
  function (config) {
    // 在发送请求之前做些什么
    return config
  },
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error)
  }
)

// 添加响应拦截器
httpAxios.interceptors.response.use(
  function (response) {
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    return response.data
  },
  function (error) {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    return Promise.reject(error)
  }
)

export default httpAxios
```

在**vite.config.js**配置

```javascript
  publicPath:'./',
  server:{
    proxy:{
      '/api':{
        //后台服务所在的源  *注：localhost:81中的81为端口，localhost为域名
        target:'http://127.0.0.1:8080',
        changeOrigin:true,//修改源 是否跨域
        rewrite:path=>path.replace(/^\/api/,'') // /api替换为''
      }
    },
    port:3434
  }
```



#### 1.1.3element—plus安装及配置

安装

```shell
npm install element-plus --save
```

**main.js**导入

```javascript
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

app.use(ElementPlus)
```

按需导入

```shell
npm install -D unplugin-vue-components unplugin-auto-import
```

**vite.config.js**配置

```javascript
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()]
    }),
    Components({
      resolvers: [ElementPlusResolver()]
    })
  ],
})
```



#### 1.1.4gsap安装及配置

安装

```shell
npm install gsap
```

按需导入

```javascript
import gasp  from 'gsap';
```

**使用**

```JavaScript
//创建动画
//我们有一个方法、一个目标和一个 vars 对象
gsap.to(".box", { x: 200 }) // '.box'为class样式
```

四个类型

```javascript
//这是最常见的补间类型。补间将从元素的当前状态开始，并“到”补间中定义的值进行动画处理(从头到尾)
gsap.to()
//就像一个倒向，它“从”补间中定义的值进行动画处理，并在元素的当前状态结束(从尾到头)
gsap.from()
//您可以定义起始值和结束值（指定起点和终点）
gsap.fromTo()
//立即设置属性（无动画）。它本质上是一个零持续时间的补间
gsap.set()
```

转换速记

```javascript
//从X轴移动100像素
X:100 = translateX(100px)
//从Y轴移动100像素
Y:100 = translateY(100px)
//从X轴移动50%大小
xPercent: 50 = translateX(50%)
//从Y轴移动50%大小
yPercent: 50 = translateY(50%)
//缩放比例2
scale: 2 = transform: scale(2)
//缩放X轴比例2
scaleX: 2 = transform: scaleX(2)
//缩放Y轴比例2
scaleY: 2 = transform: scaleY(2)
//旋转90°
rotation: 90 = transform: rotate(90deg)
//旋转1.25弧度
rotation: "1.25rad" = Using Radians - no CSS alternative	//表示没有css替代方案
//偏斜30°
skew: 30 = transform: skew(30deg)
//偏斜X轴30°
skewX: 30 = transform: skewX(30deg)
//偏斜Y轴30°
skewY: "1.23rad" = Using Radians - no CSS alternative	//表示没有css替代方案
//变换原点中心"40%"
transformOrigin: "center 40%" = transform-origin: center 40%
//不透明度
opacity: 0 = adjust the elements opacity	//调整不透明度
//阿尔法通道
autoAlpha: 0 = shorthand for opacity & visibility	//不透明度和可见性的简写
//持续时间
duration: 1 = animation-duration: 1s
//重复次数：无数次
repeat: -1 = animation-iteration-count: infinite	//表示迭代次数：无限
//重复次数：2遍
repeat: 2 = animation-iteration-count: 2
//延迟：2s
delay: 2 = animation-delay: 2
//溜溜球（从头到尾正反执行）
yoyo: true = animation-direction: alternate		//动画方向：交替
```



#### 1.1.5sass 安装及配置

安装

```shell
npm install sass -D
```

**vite.config.js**配置

```javascript
css: {
    preprocessorOptions: {
      scss: {
        /**如果引入多个文件，可以使用
         * '@import "@/assets/scss/globalVariable1.scss";
         * @import"@/assets/scss/globalVariable2.scss";'
         **/
        additionalData: '@import "@/style/color.scss";'
      }
    }
  },
```

按需导入

```scss
<style scoped lang="scss">
@import "@/style/《文件名》.scss";
</style>
```

### 1.2项目介绍

本项目以上海米哈游影铁科技有限公司制作发行的游戏作品官网进行**仿照无任何商业行为**

网站分别有：**加载页、首页、角色介绍、新闻资讯、设定档案、背景音乐、各社交媒体官号、以及个人账户**

#### 1.2.1首页（包含背景音乐、各社交媒体官号、以及个人账户）

#### 1.2.2角色介绍

#### 1.2.3新闻资讯

#### 1.2.4设定档案
